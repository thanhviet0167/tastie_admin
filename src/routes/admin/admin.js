const {url_admin_login, url_admin_reset_password} = require("../../constant/url");

const AdminControllers = require('../../controllers/admin_controllers')




const AdminRouter = app => {

    app.post(url_admin_login, AdminControllers.signIn)
    app.post(url_admin_reset_password, AdminControllers.resetPassword)
    

}



module.exports = AdminRouter;