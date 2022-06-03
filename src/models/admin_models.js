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


    static async signIn(data){
        try {
            const {email, password} = data
            const [[admin_info,__],_] = await host.execute(`CALL Admin_Login('${email}', '${password}');`)
            
            return admin_info[0]['admin_id'] ? admin_info[0]['admin_id'] : -1
        } catch (error) {
            console.log(error)
            return -1
        }
    }

    static async resetPassword(data){
        try {
            const {email, old_password, new_password} = data
            const admin_id = await this.signIn({email : email, password : old_password})
            if(admin_id){
                await host.execute(`UPDATE Tastie.Admin SET password = '${new_password}' WHERE (admin_id = ${admin_id});`)
                return true
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }

    
}

module.exports = AdminModels
