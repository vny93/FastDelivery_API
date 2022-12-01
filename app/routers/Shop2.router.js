module.exports = function(router){
    const shopController = require('../controllers/Shop.controller')
    const authController = require('../controllers/Auth.controller')

router.get('/v2/shop/id/automatic', shopController.automaticId)

router.post('/v2/shop/register',shopController.add)

router.post('/v2/auth/shop/register', authController.add)

router.post('/v2/shop/checkPhone',shopController.checkPhone)

router.post('/v2/shop/checkEmail',shopController.checkEmail)

}