module.exports = function(router){
    const shopController = require('../controllers/Shop.controller')

  router.get('/v2/shop/get/list', shopController.get_list)

  router.post('/v2/shop/get/detail', shopController.get_detail)

  router.post('/v2/shop/checkPhone',shopController.checkPhone)

  router.post('/v2/shop/checkEmail',shopController.checkEmail)

  router.put('/v2/shop/admin/update', shopController.adminUpdate)
}