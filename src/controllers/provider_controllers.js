require("dotenv").config();
//"user strict"

const jwt = require('jsonwebtoken');

//
const host = require('../../config/connectMySql');
const ProviderModels = require("../models/provider_models");


class ProviderControllers {



    static getAllProvider = async (req, res) => {
        try {
            
            const result = await ProviderModels.getAllProvider(req.body)
           
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

    static getAllOrder = async (req, res) => {
        try {
            
            const result = await ProviderModels.getAllOrder(req.body)
           
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
    
    static getTopProviderByRevenue = async (req, res) => {
        try {
            
            const result = await ProviderModels.getTopProviderByRevenue(req.body)
           
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

    static getTopProviderBySales = async (req, res) => {
        try {
            
            const result = await ProviderModels.getTopProviderBySale(req.body)
           
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

    static removeProvider = async (req, res) => {
        try {
            const provider_id = req.params.provider_id
            const status = await ProviderModels.removeProvider(provider_id)
           
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

    static getTotalRevenueByTime = async (req, res) => {
        try {
            
            const result = await ProviderModels.getTotalRevenueByTime(req.body)
           
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

    static getNumberOrderByTime = async (req, res) => {
        try {
            
            const result = await ProviderModels.getNumberOrderByTime(req.body)
           
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

    static staticsTotalRevenueInTheTwentyLastMonth = async (req, res) => {
        try {
            
            const result = await ProviderModels.statisticsOfTotalRevenueInTheLastTwentyMonths()
           
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


    static filterProviderByKey = async (req, res) => {
        try {

            const key = req.params.key
            const result = await ProviderModels.filterProviderByKey(key)
           
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

    static getListRequiredProvider = async (req, res) => {
        try {
            
            const response = await ProviderModels.getListRequiredProvider()
           
            res.status(200).json({
                status : true,
                response
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                response: []
            })
        }
    }

    static responseRequestFromProvider = async (req, res) => {
        try {
            
            const status = await ProviderModels.responseRequestFromProvider(req.body)
           
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

module.exports = ProviderControllers