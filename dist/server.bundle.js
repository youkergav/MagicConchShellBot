/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_server_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/server.class */ \"./app/lib/server.class.js\");\n/**\n * The main script that is responsible for starting the\n * application.\n * \n * @module app\n * @requires express\n */\n\n\n\n// Import required modules.\n\n\n\nlet server = new _lib_server_class__WEBPACK_IMPORTED_MODULE_1__[\"default\"](express__WEBPACK_IMPORTED_MODULE_0___default.a); // Create a server object.\n\n// Initialize the server.\n(async () => {\n    await (() => {\n        server.initDb({}, (error, result) => {\n            if(error) {\n                console.log(\"error initializing database\");\n                return false;\n            }\n    \n            console.log(\"initialized database\");\n            console.log(`host: ${result.host}`);\n            console.log(`port: ${result.port}`);\n            console.log(`username: ${result.user}`);\n            console.log(`database: ${result.name}`);\n        });\n    \n        server.initRoutes();\n    \n        server.initViews({}, (error, result) => {\n            if(error) {\n                console.log(error)\n                return false;\n            };\n    \n            console.log(\"initialized express views\");\n            console.log(`view path: ${result.viewPath}`);\n            console.log(`view engine: ${result.viewEngine}`);\n            console.log(`static files path: ${result.staticPath}`);\n        });\n    })();\n\n    server.run({}, (error, result) => {\n        if(error) {\n            console.log(error)\n            return false;\n        };\n    \n        console.log(\"running the application\");\n        console.log(`port: ${result.port}`);\n    });\n})();\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./app/controllers/api_session.controller.js":
/*!***************************************************!*\
  !*** ./app/controllers/api_session.controller.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_api_session_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/api_session.model */ \"./app/models/api_session.model.js\");\n/**\n * The module that holds the API session controller class.\n * \n * @module controllers/api_session\n */\n\n\n\n// Import api_session module.\n\n\n/**\n * Class to handle API session logic.\n */\nclass ApiSessionController {\n    /**\n     * Creates an instance of ApiSessionController.\n     * \n     * @memberof ApiSessionController\n     * @param {string} authCode - The authorization code from OAUTH.\n     */\n    constructor(authCode) {\n        this.apiSessionModel = new _models_api_session_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ authCode: authCode });\n    }\n\n    /**\n     * Creates a new session with an authorization code.\n     *\n     * @returns {boolean} Successful execution status.\n     * @memberof ApiSessionController\n     */\n    newSession() {\n        this.apiSessionModel.save(function(err) {\n            if(err) return false;\n        });\n\n        return true;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApiSessionController);\n\n//# sourceURL=webpack:///./app/controllers/api_session.controller.js?");

/***/ }),

/***/ "./app/lib/server.class.js":
/*!*********************************!*\
  !*** ./app/lib/server.class.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/app.config */ \"./config/app.config.js\");\n/* harmony import */ var _routes_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/general */ \"./app/routes/general.js\");\n/**\n * The module for that holds the server class.\n * \n * @module lib/server\n * @requires path\n */\n\n\n\n// Import required modules.\n\n\n\n\n\n\n/**\n * Class to manage the NodeJS and Express server.\n */\nclass Server {\n    /**\n     * Callback for retrieving errors and results.\n     *\n     * @callback getData\n     * @param {Object} error - The error message to return.\n     * @param {Object} result - The successful result data.\n     * @returns {boolean} Successful execution status.\n     */\n\n    /**\n     * Creates an instance of Server.\n     * \n     * @param {Object} express - The express object to be used.\n     * \n     * @example\n     * import express from \"express\";\n     * import Server from \"./lib/server.class\";\n     * \n     * let server = new Server(express);\n     */\n    constructor(express) {\n        this.express = express;\n        this.app = express();\n    }\n\n    /**\n     * Initialized the database connection.\n     * \n     * @param {Object} options - The optional values to be overridden in the function. If none pass in \"{}\".\n     * @param {string} [options.username=config.db.username] - The Mongo username credential.\n     * @param {string} [options.password=config.db.password] - The Mongo password credential.\n     * @param {string} [options.host=config.db.host] - The Mongo hostname credential.\n     * @param {number} [options.port=config.db.port] - The Mongo port number credential.\n     * @param {string} [options.database=config.db.database] - The Mongo database name credential.\n     * @param {getData} callback - A callback to retrieve data.\n     * \n     * @example\n     * // Call with default params.\n     * server.initDb({}, (error, result) => {\n     *      if(error) return false;\n     * \n     *      // do something\n     * });\n     * \n     * // Call with optional params.\n     * server.initDb({\n     *      username: \"root\",\n     *      password: \"toor\",\n     *      host: \"8.8.8.8\",\n     *      port: \"12345\",\n     *      database: \"sample\"\n     * }, (error, result) => {\n     *      if(error) return false;\n     * \n     *      // do something\n     * });\n     */\n    initDb(options, callback) {\n        // Set the option values.\n        let username = encodeURIComponent(options.username || _config_app_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].db.username);\n        let password = encodeURIComponent(options.password || _config_app_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].db.password);\n        let host = encodeURIComponent(options.host || _config_app_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].db.host);\n        let port = encodeURIComponent(options.port || _config_app_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].db.port);\n        let database = encodeURIComponent(options.database || _config_app_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].db.database);\n\n        // Connect to the database.\n        let mongoUri = `mongodb://${username}:${password}@${host}:${port}/${database}`;\n        mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(mongoUri, { useNewUrlParser: true }, (error, result) => {\n            if(error) {\n                callback(error, null);\n                return false;\n            }\n\n            callback(null, result);\n            return true;\n        });\n    }\n\n    /**\n     * Initializes the routes to be used.\n     * \n     * @example\n     * server.initRoutes();\n     */\n    initRoutes() {\n        this.app.use(_routes_general__WEBPACK_IMPORTED_MODULE_4__[\"default\"]); // Import the general router.\n    }\n\n    /**\n     * Initializes the views location, engine, and static files.\n     * \n     * @param {Object} options - The optional values to be overridden in the function. If none pass in \"{}\".\n     * @param {string} [options.viewPath=path.join(__dirname, \"../views\")] - The path where the views are stored to be used for Express.\n     * @param {string} [options.viewEngine=\"ejs\"] - The templating engine that will be used for Express.\n     * @param {string} [options.staticPath=path.join(__dirname, \"../public\")] - The path where static files are stored to be used for Express.\n     * @param {getData} callback - A callback to retrieve data.\n     * \n     * @example\n     * // Call with default params.\n     * server.initViews({}, (error, result) => {\n     *      if(error) return false;\n     * \n     *      // do something\n     * });\n     * \n     * // Call with optional params.\n     * server.initViews({\n     *      viewPath: path.join(__dirname, \"views\"),\n     *      viewEngine: \"jade\",\n     *      staticPath: path.join(__dirname, \"static\")\n     * }, (error, result) => {\n     *      if(error) return false;\n     * \n     *      // do something\n     * });\n    */\n    initViews(options, callback) {\n        // Set the option values.\n        let viewPath = options.viewPath || Object(path__WEBPACK_IMPORTED_MODULE_0__[\"join\"])(__dirname, \"../views\");\n        let viewEngine = options.viewEngine || \"ejs\";\n        let staticPath = options.staticPath || Object(path__WEBPACK_IMPORTED_MODULE_0__[\"join\"])(__dirname, \"../public\");\n\n        // Check that the specified paths exist.\n        if(!Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"existsSync\"])(viewPath)) {\n            callback(new Error(`the view path ${viewPath}\" does not exist`), null);\n            return false;\n        }\n\n        if(!Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"existsSync\"])(staticPath)) {\n            callback(new Error(`the static files path ${staticPath} does not exist`), null);\n            return false;\n        }\n\n        // Set the express views.\n        this.app.set(\"views\", viewPath);\n        this.app.set(\"view engine\", viewEngine);\n        this.app.use(this.express.static(staticPath));\n\n        // Fire a successful callback.\n        callback(null, {\n            viewPath: viewPath,\n            viewEngine: viewEngine,\n            staticPath: staticPath\n        });\n    }\n\n    /**\n     * Runs the server object\n     *\n     * @param {Object} options - The optional values to be overridden in the function. If none pass in \"{}\".\n     * @param {number} [options.port=config.server.port] - The port to listen on for the web application.\n     * @param {getData} callback - A callback to retrieve data.\n     * \n     * @example\n     * // Call with default params.\n     * server.run({}, (error, result) => {\n     *      if(error) return false;\n     * \n     *      // do something.\n     * });\n     * \n     * // Call with optional params.\n     * server.run({ port: 4000 }, (error, result) => {\n     *      if(error) return false;\n     * \n     *      // do something.\n     * })\n     */\n    run(options, callback) {\n        // Set the option values.\n        let port = options.port || _config_app_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].server.port;\n\n        // Check if port is a number.\n        if(typeof port !== \"number\") {\n            callback(new Error(`the port ${port} is not a number`), null);\n            return false;\n        }\n\n        // Listen on port and check for errors.\n        this.app.listen(port).on(\"error\", (error) => {\n            callback(error, null);\n            return false;\n        });\n\n        callback(null, { port: port });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Server);\n/* WEBPACK VAR INJECTION */}.call(this, \"app/lib\"))\n\n//# sourceURL=webpack:///./app/lib/server.class.js?");

/***/ }),

/***/ "./app/models/api_session.model.js":
/*!*****************************************!*\
  !*** ./app/models/api_session.model.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * The module that holds the API session schema and model.\n * \n * @module models/api_session\n * @requires mongoose\n */\n\n\n\n\n\n/**\n * Mongoose model for API session data.\n * \n * @class ApiSessionModel\n * @property {string} id - The unique user ID.\n * @property {string} authCode - The authorization code provided from OAUTH page.\n * @property {string} accessToken - The valid code that enables access to the API.\n * @property {string} createdAt - An ISO timestamp of when the object was created.\n * @property {string} updatedAt - An ISO timestamp of when the object was last updated.\n */\nconst schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n    authCode: {\n        type: String,\n        required: [true, \"Authorization code is required\"] \n    },\n    accessToken: {\n        type: String,\n        default: null\n    }\n}, { timestamps: true });\n\nconst ApiSession = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])(\"session\", schema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApiSession);\n\n//# sourceURL=webpack:///./app/models/api_session.model.js?");

/***/ }),

/***/ "./app/routes/general.js":
/*!*******************************!*\
  !*** ./app/routes/general.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_api_session_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/api_session.controller */ \"./app/controllers/api_session.controller.js\");\n/**\n * The module that holds the general routes.\n * \n * @module routes/general\n * @requires express\n */\n\n\n\n// Import required modules.\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\n\n// Import the APISessionController class.\n\nlet apiSessionController;\n\n/**\n * The index route of the project. Creates a new API session\n * in the database.\n * \n * @function getIndex\n * @param {object} request - The express requested resource.\n * @param {string} request.query.authCode - The authorization code to be inserted to the database.\n * @param {object} response - The response that should be routed to.\n * @param {object} [next] - The next middleware to use.\n */\nrouter.get(\"/\", function(request, response) {\n    apiSessionController = new _controllers_api_session_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"](request.query.authCode);\n    apiSessionController.newSession();\n\n    response.render(\"index\"); // Render the index page.\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./app/routes/general.js?");

/***/ }),

/***/ "./config/app.config.js":
/*!******************************!*\
  !*** ./config/app.config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * The main configuration file.\n * @module config/config\n * @requires path\n * @requires dotenv\n */\n\n\n\n\n\nconst nodeEnv = \"development\";\nObject(dotenv__WEBPACK_IMPORTED_MODULE_1__[\"config\"])({ path: Object(path__WEBPACK_IMPORTED_MODULE_0__[\"join\"])(__dirname, `../env/${nodeEnv}.env`) }); // Load the environment variables.\n\n/**\n * The object to hold default configuration data.\n * \n * @const\n * @type {Object}\n * @property {Object} server - The server data for the NodeJS application.\n * @property {number} server.port - The port the server will run on.\n * @property {Object} db - The data to connect to the database.\n * @property {string} db.host - The hostname of the database.\n * @property {number} db.port - The port the database is listening on.\n */\nconst defaultConfig = {\n    server: {\n        port: 5500\n    },\n    db: {\n        host: \"localhost\",\n        port: 27017\n    }\n};\n\n/**\n * The object to hold all application configuration data.\n * \n * @const\n * @type {Object}\n * @property {string} env - The environment of the application state. Set by NODE_ENV.\n * @property {Object} [server] - The server data for the NodeJS application.\n * @property {number} [server.port=defaults.server.port] - The port the server will run on.\n * @property {Object} api - The credentials and data held in the API.\n * @property {string} api.username - The username to authenticate with the API.\n * @property {string} api.password - The password to authenticate with the API.\n * @property {Object} db - The data to connect to the database.\n * @property {string} db.username - The username of the database user.\n * @property {string} db.password - The password of the database user.\n * @property {string} [db.host=defaults.db.host] - The hostname of the database.\n * @property {number} [db.port=defaults.db.port] - The port the database is listening on.\n * @property {string} db.database - The name of the database to connect to.\n */\nconst config = {\n    env: nodeEnv,\n    server: {\n        port: parseInt(\"8000\") || defaults.server.port\n    },\n    api: {\n        username: \"KYS0naBkxILDow\",\n        password: \"5mYePznJqPRTt2-WKZZfVfeox6s\"\n    },\n    db: {\n        username: \"mcsbDefault\",\n        password: \"g*tB5b6AQ9sjE$pzrp@ULmXb8Bg#ew\",\n        host: \"localhost\" || false,\n        port: parseInt(\"27017\") || defaults.db.port,\n        database: \"mcsb\"\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n/* WEBPACK VAR INJECTION */}.call(this, \"config\"))\n\n//# sourceURL=webpack:///./config/app.config.js?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./app/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/youkergav/Documents/Projects/CODING/MagicConchShellBot/app/app.js */\"./app/app.js\");\n\n\n//# sourceURL=webpack:///multi_./app/app.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });