const jwt = require('jsonwebtoken')
const SECRET_KEY = "NOTESAPI";


const auth =((req,res,next) => {
    try {
        console.log("rewqqqqqqqq",req)
        let token = req.headers.authorization;
        console.log(token)
        if(token){
            token = token.split(" ")[1];
            console.log(req)
            console.log(token)
            let user = jwt.verify(token, SECRET_KEY);
            console.log(user,"userrrrrrrrr");
            req.userId = user.id;
            console.log(user.id,"auth");
    }
    else {
        res.status(401).json({message:"Unauthorized user"})
    }
    
    next();
 } catch (error) {
        console.log(error);
        res.status(401).json({message:"error"})
    }
})

module.exports = auth;