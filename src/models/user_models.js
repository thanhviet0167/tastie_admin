require("dotenv").config();

//"user strict"

const jwt = require('jsonwebtoken');
const moment = require('moment');

//

const host = require('../../config/connectMySql')



class UserModels {

    static getUpdateAt(){
        return moment(new Date().toLocaleDateString('vi-VI'), 'DD-MM-YYYY').format('YYYY-MM-DD') + ' ' + new Date().toLocaleTimeString('vi-VI')
    }

    static async getAllUser(data){
        try {
            
            const {limit, offset, name} = data
            let sqlGetAllUser = `SELECT * FROM User;`
            var [result, _] = await host.execute(sqlGetAllUser)
            
            // if(name.length > 0){
                
            //     result = result.filter(user => {
            //         var user_name = user['first_name']+ ' ' + user['last_name']
                    
            //         console.log(user_name)
            //         console.log(name)
            //         user_name = user_name.toLowerCase()
            //         return user_name.includes(name.toLowerCase())
            //     })
            // }

            return result.slice( offset - 1  === 0 ? offset-1 : limit*(offset-1), offset*limit <= result.length ? offset*limit : offset*limit-1)
            
        } catch (error) {
            console.log(error)
            return []
        }
    }

    static async registerUser(data) {

        try {
            const {phone, password, role, email, first_name, last_name} = data
            const registered_at = this.getUpdateAt()
            let sqlStoredProcedure = `CALL AccountRegistration ('${phone}', '${password}', '${role}', 
            '${email}', '${first_name}', '${last_name}', 1, '${registered_at}', '${registered_at}')`

            await host.execute(sqlStoredProcedure);

            return true
        } catch (error) {
            
            console.log(error)
            return false
        }
        

    }

    static async setToken(phone, token){
        try {
            let sql = `UPDATE Tastie.User SET user_token = '${token}' WHERE phone = '${phone}'`
            await host.execute(sql);
        } catch (error) {
            
        }
        
        
    }

    static async removeUser(user_id){
        try {

            
            let sqlGetAllOrder = `CALL Remove_User(${user_id});`
            await host.execute(sqlGetAllOrder)

            return true

            
        } catch (error) {
            console.log(error)
            return false
        }
    }

    static async filterUserByKey(key){
        try {
            const [result, _] = await host.execute(`CALL Filter_User_Name('${key}');`)

            return result[0]
        } catch (error) {
            

            return []
        }
    }
}

module.exports = UserModels
