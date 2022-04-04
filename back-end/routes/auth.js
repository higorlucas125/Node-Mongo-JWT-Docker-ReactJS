const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const ENC = require("crypto-js/enc-utf8");

//REGISTER
router.post("/register", async (req, res) => {
    try {
    if (!!req.body.username && !!req.body.password) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASSSEC
            ).toString(),
        });

        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    }else {
        throw "Erro talvez você não enviou corretamente o usuario ou password";
    }
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//LOGIN
router.post('/login', async (req, res) => {
    
    try {
        const user = await User.findOne(
            {
                username: req.body.user_name
            }
        );

        if(!user) { 
            return res.status(401).json("Wrong User Name");
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASSSEC
        );
        
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        
        const inputPassword = req.body.password;

        if(originalPassword != inputPassword){
            return res.status(401).json("Wrong Password");
        } 

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWTSEC,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;
        res.status(200).json({
            ...others, accessToken
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});


module.exports = router;