

const jwt= require('jsonwebtoken')
const UserSchema= require('../models/auth')

exports.isAuth= async (req,res, next) => {

    // key bech n7oteh fil header bech na3ref el current user 
    const token= req.header('authorization')

    try {
        
        if (!token)
        { return res.status(400).send({errors: [{msg: "you are not authorized"}]})}

        // to get the id of the exact loged in user using token 
        var decoded= jwt.verify(token, process.env.SecretOrKey)
        const user= await UserSchema.findById(decoded.id)
        req.user=user
        next()

    } catch (error) {
        res.status(500).send('error server')
        
    }
}
