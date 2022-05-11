const {url_staticsRevenue, url_get_top_provider_by_sales, url_get_all_provider, url_get_all_order, url_get_top_provider_by_revenue, url_remove_provider, url_get_total_revenue__by_time, url_get_number_order__by_time} = require("../../constant/url");

const ProviderControllers = require('../../controllers/provider_controllers')




const ProviderRouter = app => {


    app.post(url_get_all_provider, ProviderControllers.getAllProvider)
    app.post(url_get_all_order, ProviderControllers.getAllOrder)
    app.post(url_get_top_provider_by_revenue, ProviderControllers.getTopProviderByRevenue)
    app.post(url_get_top_provider_by_sales, ProviderControllers.getTopProviderBySales)
    app.put(url_remove_provider, ProviderControllers.removeProvider)
    app.post(url_get_total_revenue__by_time, ProviderControllers.getTotalRevenueByTime)
    app.post(url_get_number_order__by_time, ProviderControllers.getNumberOrderByTime)
    app.get(url_staticsRevenue, ProviderControllers.staticsTotalRevenueInTheTwentyLastMonth)

}



module.exports = ProviderRouter;