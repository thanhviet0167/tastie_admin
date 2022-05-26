const {url_get_all_user, url_add_user, url_remove_user, url_filter_user_by_key_search} = require("../../constant/url");

const UserControllers = require('../../controllers/user_controllers')




const UserRouter = app => {


    app.post(url_get_all_user, UserControllers.getAllUser)
    app.post(url_add_user, UserControllers.registerUser)
    app.put(url_remove_user, UserControllers.removeUser)
    app.get(url_filter_user_by_key_search, UserControllers.filterUserByKey)
}



module.exports = UserRouter;