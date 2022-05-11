const EcouponRouter = require("./ecoupon/ecoupon");
const ProviderRouter = require("./provider/provider");
const UserRouter = require("./user/user");




const routesAdmin = (app) => {
    EcouponRouter(app)
    UserRouter(app)
    ProviderRouter(app)
}

module.exports = routesAdmin;