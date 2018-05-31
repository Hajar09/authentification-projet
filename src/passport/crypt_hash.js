const createHash = (password) => {
    bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
}