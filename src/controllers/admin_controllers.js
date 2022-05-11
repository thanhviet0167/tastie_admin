require("dotenv").config();
"user strict"

const jwt = require('jsonwebtoken');

//
const host = require('../../config/connectMySql')

class AdminControllers {

    static AddEcoupon = async (req, res) => {
        try {
            
            const result = await OrderModel.AddEcoupon(req.body)
        
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
            
            const result = await OrderModel.UpdateEcoupon(req.body)
           
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
}

module.exports = AdminControllers