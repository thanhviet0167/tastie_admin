require("dotenv").config();

//"user strict"

const jwt = require('jsonwebtoken');


//

const host = require('../../config/connectMySql')



class ProviderModels {
    static async getAllProvider(data){
        try {

            const {limit, offset} = data
                let sqlGetAllProvider = `SELECT * FROM Provider;`
                const [result, _] = await host.execute(sqlGetAllProvider)

                return result.slice( offset - 1  === 0 ? offset-1 : limit*(offset-1), offset*limit <= result.length ? offset*limit : offset*limit-1)

            
        } catch (error) {
            console.log(error)
            return []
        }
    }

    static async getAllOrder(data){
        try {

            const {limit, offset, provider_id} = data
                let sqlGetAllOrder = `CALL Get_List_Order_By_Provider(${provider_id});`
                const [result, _] = await host.execute(sqlGetAllOrder)

                return result.slice( offset - 1  === 0 ? offset-1 : limit*(offset-1), offset*limit <= result.length ? offset*limit : offset*limit-1)

            
        } catch (error) {
            console.log(error)
            return []
        }
    }

    static async getTopProviderByRevenue(data){
        try {

            const {start_month, end_month, year, limit} = data
                let sqlGetTopProviderByRevenue = `CALL Get_Top_Providers_By_Revenue(${start_month}, ${end_month}, ${year}, ${limit});`
                const [result, _] = await host.execute(sqlGetTopProviderByRevenue)

                return result[0] // index 0 là kq trả về từ stored, 1 là trạng thái gửi về

            
        } catch (error) {
            console.log(error)
            return []
        }
    }

    static async getTopProviderBySale(data){
        try {

            const {start_month, end_month, year, limit} = data
                let sqlTopProviderBySales = `CALL Get_Top_Providers_By_Sales(${start_month}, ${end_month}, ${year}, ${limit});`
                const [result, _] = await host.execute(sqlTopProviderBySales)

                return result[0] // index 0 là kq trả về từ stored, 1 là trạng thái gửi về

            
        } catch (error) {
            console.log(error)
            return []
        }
    }

    static async removeProvider(provider_id){
        try {

            
            let sqlGetAllOrder = `CALL Remove_Provider(${provider_id});`
            await host.execute(sqlGetAllOrder)

            return true

            
        } catch (error) {
            console.log(error)
            return false
        }
    }

    static async getTotalRevenueByTime(data){
        try {
            const {start_month, end_month, year} = data
            let sqlGetTotalRevenueByTime = `CALL Get_Total_Revenue_By_Time(${start_month <= end_month ? start_month : end_month}, ${end_month >= start_month ? end_month : start_month}, ${year});`
            const [reponse, _] = await host.execute(sqlGetTotalRevenueByTime)
            return reponse[0]
        } catch (error) {
            console.log(error)
            return -1
        }
    }

    static async getNumberOrderByTime(data){
        try {
            const {start_month, end_month, year} = data
            let sqlGetNumberOrderByTime = `CALL Get_Num_Orders_By_Time(${start_month <= end_month ? start_month : end_month}, ${end_month >= start_month ? end_month : start_month}, ${year});`
            const [reponse, _] = await host.execute(sqlGetNumberOrderByTime)
            return reponse[0]
        } catch (error) {
            console.log(error)
            return -1
        }
    }

    static  getTwentyMonth(){
        try {
            var TMonth = []
            let currentMonth = new Date().getMonth() + 1
            let currentYear =  new Date().getFullYear()
            console.log(currentMonth)
            TMonth.push({
                start_month : currentMonth,
                end_month : currentMonth,
                year : currentYear
            })
            for(var i = 0; i < 11; i++)
            {
                if(currentMonth === 1){
                    currentMonth = 12
                    currentYear -= 1
                }
                else if(currentMonth > 1 && currentMonth <= 12){
                    currentMonth -= 1
                }
                TMonth.push({
                    start_month : currentMonth,
                    end_month : currentMonth,
                    year : currentYear
                })
            }
            return TMonth
        } catch (error) {
            return []
        }
    }

    static async statisticsOfTotalRevenueInTheLastTwentyMonths(){
        try {
            var listMonth = this.getTwentyMonth()
            var listTotalRevenueByTime = await host.execute(`SELECT * FROM Get_Total_Revenue_By_Time_Table;`)
            var listNumberOrderByTime = await host.execute(`SELECT * FROM Get_Num_Orders_By_Time_Table;`)
            var response = []
            for(var i = 0; i < listMonth.length; i++){
                var a = []
                let indexTotalRevenue = listTotalRevenueByTime[0].findIndex(total_revenue => {
                    return (listMonth[i]['start_month'] === total_revenue['month'] && listMonth[i]['year'] === total_revenue['year'])
                })

                let indexNumberOrder = listNumberOrderByTime[0].findIndex(number_order => {
                    return (listMonth[i]['start_month'] === number_order['month'] && listMonth[i]['year'] === number_order['year'])
                })
                response.push({
                    month : listMonth[i]['start_month'],
                    year : listMonth[i]['year'],
                    totalRevenue : listTotalRevenueByTime[0][indexTotalRevenue]['total_revenue'],
                    numberOrder : listNumberOrderByTime[0][indexNumberOrder]['total_num_orders'],
                })
            }
            return response

        } catch (error) {
            return []   
        }
    }


    static async filterProviderByKey(key){
        try {
            const [result, _] = await host.execute(`CALL Filter_Provider_By_Name('${key}');`)

            return result[0]
        } catch (error) {
            

            return []
        }
    }
}

module.exports = ProviderModels
