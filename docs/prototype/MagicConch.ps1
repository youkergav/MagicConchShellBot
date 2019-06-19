# Author:   Nate Perkins, Gavin Youker
# Date:     2019-05-29
# Desc:     Multi-threaded PowerShell script to query Reddit's
#           REST API. The script has two main lambda functions:
#           GetToken - which retrieves and updates sessions based
#           on OAUTH, and QueryAPI - which scans Reddit comments for
#           the trigger string and sends automated conch responses.
# Info:     The Magic Conch Shell Bot is a lavender-colored seashell, 
#           and has a speaker inside it to help the toy and users 
#           communicate more effectively. It is operated by a pull-
#           string on Reddit.
# Links:    https://www.reddit.com/dev/api
#           https://github.com/reddit-archive/reddit/wiki/OAuth2
#           https://github.com/youkergav/MagicConchShellBot


Param ($Arg) # Define command parameter.
If(!$Arg) {$Arg = ""}


# Perform OAUTH authentication for Reddit API.
$GetToken = {
    Param($RUNPATH) # Set the path where the script was ran.


    Function EchoLog {
        param($Output) # Set the output parameter.
    
        echo $Output
        "$(Get-Date -UFormat '%Y-%m-%d %H:%M:%S')`t$Output" | Out-File -FilePath "$RUNPATH\log.txt" -Append
    }

    # Function to return the time in seconds.
    Function GetTimeSeconds {
        return [math]::Round((New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds, 0)
    }

    # Function to echo output and write it to the log.
    

    $Config = Get-Content -Raw -Path "$RUNPATH\config.json" | ConvertFrom-Json  # Read from the config file.

    # Build the authentication headers.
    $user = $Config.Username # Client ID
    $password = $Config.Password # Client secret
    $encodedCreds = [System.Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes("$($user):$($password)"))
    $Headers = @{Authorization = "Basic $encodedCreds"}

    # Build the POST parameters.
    $PostParams = @{
        grant_type = "authorization_code"
        code = $Config.AuthCode # Code generated from authorization request.
        redirect_uri = "http://memes.youkers.online"
    }

    # Get the token.
    EchoLog("Getting access token...")
    $Request = $(Invoke-WebRequest -Uri "https://www.reddit.com/api/v1/access_token" -Method "POST" -Body $PostParams -Headers $Headers).Content | ConvertFrom-Json
    $Auth = @{
        "AccessToken" = $Request.access_token
        "RefreshToken" = $Request.refresh_token
        "Expires" = $Request.expires_in
    }
    
    $Config.AccessToken = $Auth.AccessToken
    $Config | ConvertTo-Json -Depth 4 > "$RUNPATH\config.json"
    
    # Guarantees use of refresh token on first loop if access token is expired
    $Timestamp = GetTimeSeconds
    If(!$Auth.Expires) {$Auth.Expires = 60 + 10}
    
    While(1) {
        $ExpiresTime = $($Auth.Expires - 60)

        If($($(GetTimeSeconds) - $Timestamp) -Ge $ExpiresTime) {        
            # Build the POST parameters.
            $PostParams = @{
                grant_type = "refresh_token"
                refresh_token = "300109934139-gVkpATCMNqUw-d3zW8sNzCVdJHw"
            }

            # Refresh the token.
            EchoLog("Token has expired. Refreshing access token...")
            $Request = $(Invoke-WebRequest -Uri "https://www.reddit.com/api/v1/access_token" -Method "POST" -Body $PostParams -Headers $Headers).Content | ConvertFrom-Json
            $Auth.AccessToken = $Request.access_token
            $Auth.Expires = $Request.expires_in
            
            $Config.AccessToken = $Auth.AccessToken
            $Config | ConvertTo-Json -Depth 4 > "$RUNPATH\config.json"

            $Timestamp = GetTimeSeconds
        }
        
        Start-Sleep -s $ExpiresTime # Delay until token has expired.
    }
}

# Perform API queries to get and reply to comments.
$QueryAPI = {
    Param($RUNPATH) # Set the path where the script was ran.

    # Function to echo output and write it to the log.
    Function EchoLog {
        param($Output) # Set the output parameter.

        echo $Output
        "$(Get-Date -UFormat '%Y-%m-%d %H:%M:%S')`t$Output" | Out-File -FilePath "$RUNPATH\log.txt" -Append
    }

    $IDs = New-Object System.Collections.ArrayList
    $FirstRun = 1
    While(1) {
        $Config = Get-Content -Raw -Path "$RUNPATH\config.json" | ConvertFrom-Json # Read from the config file.

        # Build, send, and parse the request.
        $Headers = @{Authorization = "Bearer $($Config.AccessToken)"}
        $Request = $(Invoke-WebRequest -Uri "https://oauth.reddit.com/r/magicconchshelldev/comments?limit=100" -Method "GET" -Headers $Headers).Content | ConvertFrom-Json
        $Data = $Request.Data

        # Loop through all new comments.
        ForEach($Child in $Data.children) {
            $Comment = $Child.Data 

            # Check for valid comments.
            If($(Select-String -Pattern "\\*pulls string\\*" -InputObject $($Comment.body).ToLower())){
                If(-Not ($IDs.Contains($Comment.id))) {
                    [void]$IDs.Add($Comment.id) # Add element to the array

                    If($FirstRun -Eq 0) {
                        EchoLog("New comment found! Replying...")

                        # Build the POST parameters.
                        $PostParams = @{
                            api_type = "json"
                            text = ("Ask again later.")
                            thing_id = "t1_$($Comment.id)"
                        }
                        
                        $Request = Invoke-WebRequest -Uri "https://oauth.reddit.com/api/comment" -Method "POST" -Body $PostParams -Headers $Headers # Reply to the comment.
                    }
                }
            }

            # Max-out the array at 100 elements.
            If($IDs.Count -Eq 100) {
                $IDs.Remove($IDs[$IDs.Count - 1])
            }
        }

        Start-Sleep -s 10 # Delay for 10 seconds.
        $FirstRun = 0
    }
}

# Check program status
$JobGetToken = $(Get-Job -Name "GetToken" -ErrorAction SilentlyContinue)
$JobQueryAPI = $(Get-Job -Name "QueryAPI" -ErrorAction SilentlyContinue)

$Command = @{
    "Start" = {
        # Check to make sure no jobs are currently running.
        If($JobGetToken -Or $JobQueryAPI) {
            echo "Error: Script is already running, try stopping first."
        } else {
            Out-File -FilePath "$PSScriptRoot\log.txt" # Create log file.

            # Start the GetToken script as a job.
            echo "Loading tokens..."
            Start-Job $GetToken -Name "GetToken" -Arg $PSScriptRoot > $Null

            echo "Delaying for 15 seconds..."
            Start-Sleep -s 15

            # Start the QueryAPI script as a job.
            echo "Getting API calls...."
            Start-Job $QueryAPI -Name "QueryAPI" -Arg $PSScriptRoot > $Null

            echo "`nDone. Script is running."
        }
    }
    "Stop" = {
        If($JobGetToken) {
            # Stop the GetToken script
            Stop-Job -Name "GetToken"
            Remove-Job -Name "GetToken"
            echo "GetToken script has stopped."
        }else {
            echo "Error: GetToken script is not running."
        }    
        If($JobQueryAPI){
            # Stop the JobQueryAPI script
            Stop-Job -Name "QueryAPI"
            Remove-Job -Name "QueryAPI"
            echo "JobQueryAPI script has stopped."
        }else {
            echo "Error: JobQueryAPI script is not running."
        }

    }
    "Watch" = {
        If($($JobGetToken -And $JobQueryAPI) -And $($($JobGetToken.State -Eq "Running") -And $($JobQueryAPI.State -Eq "Running"))) {
            While(1) {
                # Get the status for each job.
                Receive-Job -Name "GetToken"
                Receive-Job -Name "QueryAPI"

                Start-Sleep -s 10 # Delay for 10 seconds.
            }
        } else {
            echo "Error: Script is not running."
        }
    }
}


Switch($Arg.ToLower()) {
    "start" {
        &$Command.Start
        Break
    }
    "stop" {
        &$Command.Stop
        Break
    }
    "watch" {
        &$Command.Watch
        Break
    }
    "restart" {
        &$Command.Stop
        &$Command.Start
        Break
    }
    default {
        echo "Invalid command. Commands:  start | watch | stop | restart"
    }
}
