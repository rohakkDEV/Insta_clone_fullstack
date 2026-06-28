const jwt = require("jsonwebtoken")

async function identifyUser(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "UnAuthorized access"
        })
    }
    let decoded = null

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }
    catch (err) {
        return res.status(401).json({
            message: "Token invalid"
        })
    }

    req.user = decoded
}



module.exports = identifyUser