require("dotenv").config();
//"user strict"

const jwt = require('jsonwebtoken');

//
const host = require('../../config/connectMySql');
const AdminModels = require("../models/admin_models");

class AdminControllers {

    static AddEcoupon = async (req, res) => {
        try {
            
            const result = await AdminModels.AddEcoupon(req.body)
        
            res.status(200).json({
                status : result
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false
            })
        }
    }
    static UpdateEcoupon = async (req, res) => {
        try {
            
            const result = await AdminModels.UpdateEcoupon(req.body)
           
            res.status(200).json({
                status : result
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false
            })
        }
    }

    static getAllEcoupon = async (req, res) => {
        try {
            
            const result = await AdminModels.getAllEcoupon(req.body)
           
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


    static signIn = async (req, res) => {
        try {
            
            const admin_id = await AdminModels.signIn(req.body)
           
            res.status(200).json({
                status : admin_id > 0 ? true : false
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false
            })
        }
    }

    static resetPassword = async (req, res) => {
        try {
            
            const status = await AdminModels.resetPassword(req.body)
           
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

    
}

module.exports = AdminControllers