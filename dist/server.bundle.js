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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_server_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/server.class */ \"./app/lib/server.class.js\");\n/* harmony import */ var _lib_server_class__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_server_class__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * The main script that is responsible for starting the\n * application.\n * \n * @module app\n * @requires express\n */\n\n\n\n// Import required modules.\n\n\n\nlet server = new _lib_server_class__WEBPACK_IMPORTED_MODULE_1___default.a(express__WEBPACK_IMPORTED_MODULE_0___default.a); // Create a server object.\n\n// Initialize the server.\nserver.initDb();\nserver.initRoutes();\nserver.initViews();\n\nserver.run(); // Run the server.\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./app/controllers/api_session.controller.js":
/*!***************************************************!*\
  !*** ./app/controllers/api_session.controller.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * The module that holds the API session controller class.\n * \n * @module controllers/api_session\n */\n\n\n\n// Import api_session module.\nconst ApiSessionModel = __webpack_require__(/*! ../models/api_session.model */ \"./app/models/api_session.model.js\");\n\n/**\n * Class to handle API session logic.\n */\nclass ApiSessionController {\n    /**\n     * Creates an instance of ApiSessionController.\n     * \n     * @memberof ApiSessionController\n     * @param {string} authCode - The authorization code from OAUTH.\n     */\n    constructor(authCode) {\n        this.apiSessionModel = new ApiSessionModel({ authCode: authCode });\n    }\n\n    /**\n     * Creates a new session with an authorization code.\n     *\n     * @returns {boolean} Successful execution status.\n     * @memberof ApiSessionController\n     */\n    newSession() {\n        this.apiSessionModel.save(function(err) {\n            if(err) return false;\n        });\n\n        return true;\n    }\n}\n\nmodule.exports = ApiSessionController;\n\n//# sourceURL=webpack:///./app/controllers/api_session.controller.js?");

/***/ }),

/***/ "./app/lib/server.class.js":
/*!*********************************!*\
  !*** ./app/lib/server.class.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {/**\n * The module for that holds the server class.\n * \n * @module lib/server\n * @requires path\n */\n\n\n\n// Import required modules.\nconst path = __webpack_require__(/*! path */ \"path\");\nconst config = __webpack_require__(/*! ../../config/app.config */ \"./config/app.config.js\");\n\n/**\n * Class to manage the NodeJS and Express server.\n */\nclass Server {\n    /**\n     * Creates an instance of Server.\n     * \n     * @param {Object} express - The express object to be used.\n     */\n    constructor(express) {\n        this.express = express;\n        this.app = express();\n    }\n\n    /**\n     * Initialized the database connection.\n     * \n     * @param {Object} [options] - The optional values to be overridden in the function.\n     * @param {string} [options.dbUser] - The Mongo username credential.\n     * @param {string} [options.dbPass] - The Mongo password credential.\n     * @param {string} [options.dbHost] - The Mongo hostname credential.\n     * @param {number} [options.dbPort] - The Mongo port number credential.\n     * @param {string} [options.dbDatabase] - The Mongo database name credential.\n     * @returns {boolean} Successful execution status.\n     */\n    initDb(optional={}) {\n        // Import required modules.\n        const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n        // Set the option values.\n        let dbUser = encodeURIComponent(optional.dbUser || config.db.username);\n        let dbPass = encodeURIComponent(optional.dbPass || config.db.password);\n        let dbHost = encodeURIComponent(optional.dbHost || config.db.host);\n        let dbPort = encodeURIComponent(optional.dbPort || config.db.port);\n        let dbDatabase = encodeURIComponent(optional.dbDatabase || config.db.database);\n\n        // Connect to the database.\n        let mongoUri = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbDatabase}`;\n        mongoose.connect(mongoUri, { useNewUrlParser: true });\n\n        return true;\n    }\n\n    /**\n     * Initializes the routes to be used.\n     * \n     * @returns {boolean} Successful execution status.\n     */\n    initRoutes() {\n        // Import required routes.\n        const generalRouter = __webpack_require__(/*! ../routes/general */ \"./app/routes/general.js\");\n\n        this.app.use(generalRouter); // Import the general router.\n\n        return true;\n    }\n\n    /**\n     * Initializes the views location, engine, and static files.\n     * \n     * @param {Object} [options] - The optional values to be overridden in the function.\n     * @param {string} [options.viewPath] - The path where the views are stored to be used for Express.\n     * @param {string} [options.viewEngine] - The templating engine that will be used for Express.\n     * @param {string} [options.staticPath] - The path where static files are stored to be used for Express.\n     * @returns {boolean} Successful execution status.\n    */\n    initViews(optional={}) {\n        // Set the option values.\n        let viewPath = optional.viewPath || \"../views\";\n        let viewEngine = optional.viewEngine || \"ejs\";\n        let staticPath = optional.staticPath || \"../public\";\n\n        this.app.set(\"views\", path.join(__dirname, viewPath)); // Set the view location.\n        this.app.set(\"view engine\", viewEngine); // Set the view engine.\n        this.app.use(this.express.static(path.join(__dirname, staticPath))); // Set the static location.\n\n        return true;\n    }\n\n    /**\n     * Runs the server object\n     *\n     * @param {Object} [options] - The optional values to be overridden in the function.\n     * @param {number} [options.port] - The port to listen on for the web application.\n     * @returns {boolean} Successful execution status.\n     */\n    run(options={}) {\n        // Set the option values.\n        let port = options.port || config.server.port;\n\n        this.app.listen(port);\n    }\n}\n\nmodule.exports = Server;\n/* WEBPACK VAR INJECTION */}.call(this, \"app/lib\"))\n\n//# sourceURL=webpack:///./app/lib/server.class.js?");

/***/ }),

/***/ "./app/models/api_session.model.js":
/*!*****************************************!*\
  !*** ./app/models/api_session.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * The module that holds the API session schema and model.\n * \n * @module models/api_session\n * @requires mongoose\n */\n\n\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n/**\n * Mongoose model for API session data.\n * \n * @class ApiSessionModel\n * @property {string} id - The unique user ID.\n * @property {string} authCode - The authorization code provided from OAUTH page.\n * @property {string} accessToken - The valid code that enables access to the API.\n * @property {string} createdAt - An ISO timestamp of when the object was created.\n * @property {string} updatedAt - An ISO timestamp of when the object was last updated.\n */\nconst schema = new mongoose.Schema({\n    authCode: {\n        type: String,\n        required: [true, \"Authorization code is required\"] \n    },\n    accessToken: {\n        type: String,\n        default: null\n    }\n}, { timestamps: true });\n\nconst ApiSession = mongoose.model(\"session\", schema);\n\nmodule.exports = ApiSession;\n\n//# sourceURL=webpack:///./app/models/api_session.model.js?");

/***/ }),

/***/ "./app/routes/general.js":
/*!*******************************!*\
  !*** ./app/routes/general.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * The module that holds the general routes.\n * \n * @module routes/general\n * @requires express\n */\n\n\n\n// Import required modules.\nconst express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\n\n// Import the APISessionController class.\nconst ApiSessionController = __webpack_require__(/*! ../controllers/api_session.controller */ \"./app/controllers/api_session.controller.js\");\nlet apiSessionController;\n\n/**\n * The index route of the project. Creates a new API session\n * in the database.\n * \n * @function getIndex\n * @param {object} request - The express requested resource.\n * @param {string} request.query.authCode - The authorization code to be inserted to the database.\n * @param {object} response - The response that should be routed to.\n * @param {object} [next] - The next middleware to use.\n */\nrouter.get(\"/\", function(request, response) {\n    \n    apiSessionController = new ApiSessionController(request.query.authCode);\n    apiSessionController.newSession();\n\n    response.render(\"index\"); // Render the index page.\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./app/routes/general.js?");

/***/ }),

/***/ "./config/app.config.js":
/*!******************************!*\
  !*** ./config/app.config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {/**\n * The main configuration file.\n * @module config/config\n * @requires path\n * @requires dotenv\n */\n\n\nconst path = __webpack_require__(/*! path */ \"path\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\nconst nodeEnv = \"development\";\ndotenv.config({ path: path.join(__dirname, `../env/${nodeEnv}.env`) }); // Load the environment variables.\n\n/**\n * The object to hold default configuration data.\n * \n * @const\n * @type {Object}\n * @property {Object} server - The server data for the NodeJS application.\n * @property {number} server.port - The port the server will run on.\n * @property {Object} db - The data to connect to the database.\n * @property {string} db.host - The hostname of the database.\n * @property {number} db.port - The port the database is listening on.\n */\nconst defaultConfig = {\n    server: {\n        port: 5500\n    },\n    db: {\n        host: \"localhost\",\n        port: 27017\n    }\n};\n\n/**\n * The object to hold all application configuration data.\n * \n * @const\n * @type {Object}\n * @property {string} env - The environment of the application state. Set by NODE_ENV.\n * @property {Object} [server] - The server data for the NodeJS application.\n * @property {number} [server.port=defaults.server.port] - The port the server will run on.\n * @property {Object} api - The credentials and data held in the API.\n * @property {string} api.username - The username to authenticate with the API.\n * @property {string} api.password - The password to authenticate with the API.\n * @property {Object} db - The data to connect to the database.\n * @property {string} db.username - The username of the database user.\n * @property {string} db.password - The password of the database user.\n * @property {string} [db.host=defaults.db.host] - The hostname of the database.\n * @property {number} [db.port=defaults.db.port] - The port the database is listening on.\n * @property {string} db.database - The name of the database to connect to.\n */\nconst config = {\n    env: nodeEnv,\n    server: {\n        port: parseInt(\"8000\") || defaults.server.port\n    },\n    api: {\n        username: \"KYS0naBkxILDow\",\n        password: \"5mYePznJqPRTt2-WKZZfVfeox6s\"\n    },\n    db: {\n        username: \"mcsbDefault\",\n        password: \"g*tB5b6AQ9sjE$pzrp@ULmXb8Bg#ew\",\n        host: \"localhost\" || false,\n        port: parseInt(\"27017\") || defaults.db.port,\n        database: \"mcsb\"\n    }\n};\n\nmodule.exports = config;\n/* WEBPACK VAR INJECTION */}.call(this, \"config\"))\n\n//# sourceURL=webpack:///./config/app.config.js?");

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