import express from 'express'
import { User } from '../models/user'
const userRouter = express.Router()

//va me permettre d'accéder sur cette route à mon html(qui est sur pug)
userRouter.get('/new_user', (req,res) => {
    res.render("user_add")
})

//afficher la page login
userRouter.get('/user_login', (req, res) => {
    res.render("login_user")
})

//création et sauvegarde dans ma base d'un user via mon Schema
userRouter.post('/new_user', (req, res) => {
    
    let newUser = new User(req.body)//ce qu'on envoie depuis notre formulaire

    newUser.save((err, user) => {
        if(err) res.send(err)
        //res.json(user)
        res.render('display_user', { user })//template pour transmettre les infos de user

    })
})

//connextion d'un utilisateur
userRouter.post('//user_login', (req.res) => {
    User.find({}, (err,users) => {
        if(err) res.send(err)
        res.render('')
    })
})

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