const url_add_ecoupon = '/v1/api/tastie/admin/add-ecoupon'
const url_update_ecoupon = '/v1/api/tastie/admin/update-ecoupon'
const url_get_all_ecoupon = '/v1/api/tastie/admin/get-all-ecoupon'
const url_admin_login = '/v1/api/tastie/admin/sign-in'
const url_admin_reset_password = '/v1/api/tastie/admin/reset-password'

// user

const url_get_all_user = '/v1/api/tastie/admin/get-all-user'
const url_add_user = '/v1/api/tastie/admin/add-user'
const url_remove_user = '/v1/api/tastie/admin/remove-user/:user_id'
const url_filter_user_by_key_search = '/v1/api/tastie/admin/filter-user-by-keyword/:key'

// provider
const url_get_all_provider = '/v1/api/tastie/admin/get-all-provider'
const url_get_all_order = '/v1/api/tastie/admin/get-all-order'
const url_get_top_provider_by_revenue = '/v1/api/tastie/admin/get-top-provider-by-revenue'
const url_remove_provider = '/v1/api/tastie/admin/remove-provider/:provider_id'
const url_get_total_revenue__by_time = '/v1/api/tastie/admin/get-total-revenue-by-time'
const url_get_number_order__by_time = '/v1/api/tastie/admin/get-number-order-by-time'
const url_get_top_provider_by_sales = '/v1/api/tastie/admin/get-top-provider-by-sales'
const url_staticsRevenue = '/v1/api/tastie/admin/statics-of-total-revenue-in-the-last-12-month'

const url_filter_provider_by_key_search = '/v1/api/tastie/admin/filter-provider-by-keyword/:key'

const url_get_list_required_provider = '/v1/api/tastie/admin/get-list-required-provider'
const url_response_request_provider = '/v1/api/tastie/admin/respond-to-requests-from-provider'

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
    url_staticsRevenue,
    url_admin_login,
    url_admin_reset_password,
    url_filter_user_by_key_search,
    url_filter_provider_by_key_search,
    url_get_list_required_provider,
    url_response_request_provider
}