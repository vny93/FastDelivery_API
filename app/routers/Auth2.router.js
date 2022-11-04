module.exports = function (router) {
    const authController = require('../controllers/Auth.controller')

    //login
    router.post('/v2/auth/login', authController.login)

    router.post('/v2/auth/findAccount', authController.finAccount)

    // //add auth for store 
    // router.post('/v2/auth/register', authController.add)

}