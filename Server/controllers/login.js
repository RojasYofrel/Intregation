const users = require('../utils/users');



const login = (req,res)=>{
    const { email , password } = req.query;
    const userEmail = users[0].email;
    const userPassword = users[0].password;
    const verificacion = users.find(user=> email===userEmail);

    if(verificacion){
        if(password === userPassword){
            res.status(200).json({acces:true})
        }else{
            res.status(200).json({acces:false})
        }
    }else {
        res.status(400).json({acces:true, message: 'Usuario no encontrado'})
      }
}

module.exports= login;