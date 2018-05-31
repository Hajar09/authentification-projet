import bCrypt from "bcrypt"

const createHash = (password) => {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
}

export { createHash }