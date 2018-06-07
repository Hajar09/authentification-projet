require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_routes_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bcrypt__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bcrypt__);
//on importe ses dépendances 



const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();


const { SERVER_PORT, DBUrl } = process.env;




const LocalStrategy = __webpack_require__(4).Strategy;


//initialise passport et serializing et deserializing User Instances; plus les sessions
app.use(__WEBPACK_IMPORTED_MODULE_6_passport___default.a.initialize());
app.use(__WEBPACK_IMPORTED_MODULE_6_passport___default.a.session());

__WEBPACK_IMPORTED_MODULE_6_passport___default.a.serializeUser((user, done) => {
    done(null, user._id);
});
__WEBPACK_IMPORTED_MODULE_6_passport___default.a.deserializeUser((user, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

//pour se connecter à mongodb
const url = DBUrl;
const options = {
    promiseLibrary: Promise
};

__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connect(url, options);
__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connection.on('connected', () => {
    console.log(`[MongoDb] is running on port 27017`);
});

//pour lier pug à mes fichiers 
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_5_path___default.a.join(__dirname + "/public")));
app.set('views', __WEBPACK_IMPORTED_MODULE_5_path___default.a.join(__dirname + '/views'));
app.set('view engine', 'pug');

//affichage du json et utilisation de volleyball
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_2_volleyball___default.a);

//ma racine
app.get('/', (req, res) => {
    res.send("welcome on board!");
    res.redirect("/users");
});

//ma route dans laquelle est accessible ma route /new_user
app.use("/users", __WEBPACK_IMPORTED_MODULE_4__routes_routes_js__["a" /* userRouter */]);

app.listen(SERVER_PORT, () => {
    console.log(`[Express] running on port:`, SERVER_PORT);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__passport_crypt_hash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bcrypt__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_connect_flash__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_connect_flash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_connect_flash__);



const userRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

const LocalStrategy = __webpack_require__(4).Strategy;


const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_5_connect_flash___default()());

const isValidPassword = (user, password) => {
    return __WEBPACK_IMPORTED_MODULE_4_bcrypt___default.a.compareSync(password, user.password);
};

//va me permettre d'accéder sur cette route à mon html(qui est sur pug)
userRouter.get('/new_user', (req, res) => {
    res.render("user_add");
});

//création et sauvegarde dans ma base d'un user via mon Schema
userRouter.post('/new_user', (req, res) => {

    let newUser = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */](req.body); //ce qu'on envoie depuis notre formulaire

    newUser.password = Object(__WEBPACK_IMPORTED_MODULE_3__passport_crypt_hash__["a" /* createHash */])(req.body.password);

    //save user
    newUser.save((err, user) => {
        if (err) res.send(err);
        //res.json(user)
        res.render('display_user', { user }); //template pour transmettre les infos de user
    });
});

//afficher la page login
userRouter.get('/user_login', (req, res) => {
    res.render("login_user");
});

userRouter.get('/success_login', (req, res) => {
    res.render("success_login");
});

//passport: strategy login
__WEBPACK_IMPORTED_MODULE_1_passport___default.a.use("login", new LocalStrategy(function (username, password, done) {
    __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */].findOne({
        username: username
    }, function (err, user) {
        if (err) {
            console.log('erreur' + err);
            return done(err);
        }
        if (!user) {
            console.log('User not found with username ' + username);
            return done(null, false, {
                message: 'Incorrect username.'
            });
        }
        if (!isValidPassword(user, password)) {
            console.log('Invalid password');
            return done(null, false, {
                message: 'Incorrect password.'
            });
        }
        console.log('Bien joué :°°/^^');
        return done(null, user);
    });
}));

//connextion d'un utilisateur: pb avec passport
userRouter.post('/user_login', __WEBPACK_IMPORTED_MODULE_1_passport___default.a.authenticate('login', {
    successRedirect: 'success_login', //route à créer
    failureRedirect: 'user_login',
    failureFlash: false
}));

//vérifier à quoi ça sert: il affiche mes users qui ont été sauvegardés dans ma base de données 
userRouter.get('/', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */].find({}, (err, users) => {
        if (err) res.send(err);
        //res.json(users) 
        res.render('display_users', { users });
    });
});



//tu t'inscris et ça mène à la page login puis tu login et ça mène à la page success login
//stocker les users après le post dans la base de données pour pvr les récup 
//password et bcrypt

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, index: true, required: true }, // l'index est utile si on a des usernames identiques
    password: { type: String, required: true },
    image: { type: String }
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', userSchema);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createHash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcrypt__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bcrypt__);


const createHash = password => {
    return __WEBPACK_IMPORTED_MODULE_0_bcrypt___default.a.hashSync(password, __WEBPACK_IMPORTED_MODULE_0_bcrypt___default.a.genSaltSync(10), null);
};



/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map