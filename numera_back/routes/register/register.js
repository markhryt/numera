const express = require("express");
const usercredentials = require("../../db/models/usercredentials");
const  users_info =  require("../../db/models/users_info");
const router = express.Router();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

router.use((req, res, next)=>{
    next();
})

router.post('/', async (req, res)=>{

    try {
        const { email, first_name, last_name, address, password } = req.body;
          // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
          
          // Save the new user to the database
        const id = uuidv4();
    
        const user_cred = await usercredentials.create({
            id,
            email,
            password: hashedPassword,
        });
        const user_inf = await users_info.create({
            id,
            first_name,
            last_name,
            address,
        })
        res.send(true);

      }catch (err) {
            console.log(err)
          res.send(false);
        }
})

module.exports = router;