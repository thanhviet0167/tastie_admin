require("dotenv").config();

//"user strict"

const jwt = require('jsonwebtoken');


//

const host = require('../../config/connectMySql')



class AdminModels {

    static async AddEcoupon(data){
        try {

            const {ecoupon_code, ecoupon_name, ecoupon_value, ecoupon_description, min_order_value, max_discount_value,
                start_date, expire_date, payment_method_id, limited_offer, weekly_usage_limit_per_user, delivery_mode} = data

                let sqlAddEcoupon = `CALL Add_Ecoupon('E_${ecoupon_code}', '${ecoupon_name}', ${ecoupon_value}, 
                '${ecoupon_description}', ${min_order_value}, ${max_discount_value}, '${start_date}', '${expire_date}', 
                ${payment_method_id}, ${limited_offer}, ${weekly_usage_limit_per_user}, ${delivery_mode})`
                await host.execute(sqlAddEcoupon)

                return true

           
        } catch (error) {
            console.log(error)
            return false
        }
    }

    static async UpdateEcoupon(data){
        try {

            const {ecoupon_id, ecoupon_code, ecoupon_name, ecoupon_value, ecoupon_description, min_order_value, max_discount_value,
                start_date, expire_date, payment_method_id, limited_offer, weekly_usage_limit_per_user, delivery_mode, update_at} = data

                let sqlUpdateEcoupon = `CALL Update_Ecoupon(${ecoupon_id},'${ecoupon_code}', '${ecoupon_name}', ${ecoupon_value}, 
                '${ecoupon_description}', ${min_order_value}, ${max_discount_value}, '${start_date}', '${expire_date}', 
                ${payment_method_id}, ${limited_offer}, ${weekly_usage_limit_per_user}, ${delivery_mode}, '${update_at}')`
                await host.execute(sqlUpdateEcoupon)

                return true

            
        } catch (error) {
            console.log(error)
            return false
        }
    }

    static async getAllEcoupon(data){
        try {

            const {limit, offset} = data
            let sqlGetAllEcoupon = `SELECT * FROM Ecoupon;`
            const [result, _] = await host.execute(sqlGetAllEcoupon)

            return result.slice( offset - 1  === 0 ? offset-1 : limit*(offset-1), offset*limit <= result.length ? offset*limit : offset*limit-1)
            
            
        } catch (error) {
            console.log(error)
            return []
        }
    }

    
}

module.exports = AdminModels
