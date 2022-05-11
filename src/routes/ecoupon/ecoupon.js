const {url_add_ecoupon, url_update_ecoupon} = require("../../constant/url");

const AdminControllers = require('../../controllers/admin_controllers')




const EcouponRouter = app => {

    app.post(url_add_ecoupon, AdminControllers.AddEcoupon)
    app.post(url_update_ecoupon, AdminControllers.UpdateEcoupon)


}



module.exports = EcouponRouter;