require("dotenv").config();
//"user strict"

const jwt = require('jsonwebtoken');

//
const bcrypt = require('bcrypt');
const host = require('../../config/connectMySql');
const UserModels = require("../models/user_models");

class UserControllers {



    static getAllUser = async (req, res) => {
        try {
            
            const result = await UserModels.getAllUser(req.body)
           
            res.status(200).json({
                status : true,
                response : result
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                response: []
            })
        }
    }


    static registerUser = async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt);
            
            console.log( req.body.password)
            const status = await UserModels.registerUser(req.body)
            
       //     var refreshToken = jwt.sign({phone:req.body.phone}, process.env.REFRESH_TOKEN_SECRET)
       //     await UserModels.setToken(req.body.phone, refreshToken)
    

            
        
            return res.json({
               status
            })
        } catch (error) {
            return res.json({
                status : false
             })
        }
    }

    static removeUser = async (req, res) => {
        try {
            const user_id = req.params.user_id
            const status = await UserModels.removeUser(user_id)
           
            res.status(200).json({
                status
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false
            })
        }
    }

    static filterUserByKey = async (req, res) => {
        try {

            const key = req.params.key
            const result = await UserModels.filterUserByKey(key)
           
            res.status(200).json({
                status : true,
                response : result
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                response: []
            })
        }
    }
    
}

module.exports = UserControllers