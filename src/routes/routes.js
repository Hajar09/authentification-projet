import express from 'express'
import passport from 'passport'
import { User } from '../models/user'
const userRouter = express.Router()
import { createHash } from '../passport/crypt_hash'
const LocalStrategy = require('passport-local').Strategy;
import bCrypt from "bcrypt"
import flash from "connect-flash"
const app = express();

app.use(flash());



const isValidPassword =  (user, password) => {
     return bCrypt.compareSync(password, user.password)
}


//va me permettre d'accéder sur cette route à mon html(qui est sur pug)
userRouter.get('/new_user', (req,res) => {
    res.render("user_add")
})



//création et sauvegarde dans ma base d'un user via mon Schema
userRouter.post('/new_user', (req, res) => {
    
    let newUser = new User(req.body)//ce qu'on envoie depuis notre formulaire
    
    newUser.password = createHash(req.body.password)
    
    //save user
    newUser.save((err, user) => {
        if(err) res.send(err)
        //res.json(user)
         res.render('display_user', { user })//template pour transmettre les infos de user

    })
})

//afficher la page login
userRouter.get('/user_login', (req, res) => {
    res.render("login_user")
})


userRouter.get('/success_login', (req, res) => {
    res.render("success_login")
})

//passport: strategy login
passport.use("login", new LocalStrategy(
    function (username, password, done) {
        User.findOne({
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
    }
));

//connextion d'un utilisateur: pb avec passport
userRouter.post('/user_login', passport.authenticate('login', {
    successRedirect: 'success_login',//route à créer
    failureRedirect: 'user_login',
    failureFlash: false 
}))

//logout route 
userRouter.get('/log_out', function (req, res) {
    req.logout();
    res.redirect('/users/user_login');
});

//vérifier à quoi ça sert: il affiche mes users qui ont été sauvegardés dans ma base de données 
userRouter.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if(err) res.send(err)
        //res.json(users) 
        res.render('display_users', { users })
    }) 
})


export { userRouter }

//tu t'inscris et ça mène à la page login puis tu login et ça mène à la page success login
//stocker les users après le post dans la base de données pour pvr les récup 
//password et bcrypt