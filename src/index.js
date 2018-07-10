//on importe ses dépendances 
import 'dotenv/config'
import express from "express"
import volleyball from "volleyball"
const app = express();



import mongoose from "mongoose"
const { SERVER_PORT, DBUrl } = process.env;
import { userRouter } from './routes/routes.js'

import path from "path"
import passport from "passport"
const LocalStrategy = require('passport-local').Strategy;
import bCrypt from "bcrypt"
import session from "express-session"
import flash from "connect-flash"


//initialise passport et serializing et deserializing User Instances; plus les sessions
app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret: 'mySecretKey'}));
app.use(flash());

passport.serializeUser((user, done) => {
    done(null, user._id)
})
passport.deserializeUser((user, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})



//pour se connecter à mongodb
const url = DBUrl
const options = { 
    promiseLibrary: Promise
}

mongoose.connect(url, options)
mongoose.connection.on('connected', () => {
    console.log(`[MongoDb] is running on port 27017`);
})

//pour lier pug à mes fichiers 
app.use(express.static(path.join(__dirname + "/public"))) 
app.set('views', path.join(__dirname + '/views')) 
app.set('view engine', 'pug'); 

//affichage du json et utilisation de volleyball
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(volleyball);

//ma racine -  /!\ attention /!\ il faut rediriger avant de générer du contenu sinon on a l'erreur 'Cannot set headers after they are sent to the client'
app.get('/', (req, res) => {
    res.redirect("/users")
    //res.send("welcome on board!")    
})

//ma route dans laquelle est accessible ma route /new_user
app.use("/users", userRouter)

app.listen(SERVER_PORT, () => {
    console.log(`[Express] running on port:`, SERVER_PORT);

})