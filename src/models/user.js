import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, index: true, required: true}, // l'index est utile si on a des usernames identiques
    password: {type: String, required: true},
    image: {type:String},
})

const User = mongoose.model('User', userSchema)
export { User }