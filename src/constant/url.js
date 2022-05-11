const url_add_ecoupon = '/v1/api/tastie/admin/add-ecoupon'
const url_update_ecoupon = '/v1/api/tastie/admin/update-ecoupon'
const url_get_all_ecoupon = '/v1/api/tastie/admin/get-all-ecoupon'

// user

const url_get_all_user = '/v1/api/tastie/admin/get-all-user'
const url_add_user = '/v1/api/tastie/admin/add-user'
const url_remove_user = '/v1/api/tastie/admin/remove-user/:user_id'

// provider
const url_get_all_provider = '/v1/api/tastie/admin/get-all-provider'
const url_get_all_order = '/v1/api/tastie/admin/get-all-order'
const url_get_top_provider_by_revenue = '/v1/api/tastie/admin/get-top-provider-by-revenue'
const url_remove_provider = '/v1/api/tastie/admin/remove-provider/:provider_id'
const url_get_total_revenue__by_time = '/v1/api/tastie/admin/get-total-revenue-by-time'
const url_get_number_order__by_time = '/v1/api/tastie/admin/get-number-order-by-time'
const url_get_top_provider_by_sales = '/v1/api/tastie/admin/get-top-provider-by-sales'
const url_staticsRevenue = '/v1/api/tastie/admin/statics-of-total-revenue-in-the-last-12-month'

module.exports = {
    url_add_ecoupon,
    url_update_ecoupon,
    url_get_all_ecoupon,
    url_get_all_user,
    url_get_all_provider,
    url_get_all_order,
    url_add_user,
    url_get_top_provider_by_revenue,
    url_remove_provider,
    url_remove_user,
    url_get_total_revenue__by_time,
    url_get_number_order__by_time,
    url_get_top_provider_by_sales,
    url_staticsRevenue
}