const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const token = req.header('authtoken');
    if (!token) return res.status(401).send("Acess Denied")

    try {
        const verified = jwt.verify(token, "qwerty1!#%$25f6fu7^*7fudyv8ggvc")
        req.user = verified;
        next()
    } catch (err) {
        res.status(400).send("Invalid Token")
    }
}