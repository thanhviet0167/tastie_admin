const EcouponRouter = require("./ecoupon/ecoupon");




const routesAdmin = (app) => {
    EcouponRouter(app)

}

module.exports = routesAdmin;