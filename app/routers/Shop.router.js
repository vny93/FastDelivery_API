module.exports = function(router){
    const shopController = require('../controllers/Shop.controller')

  router.get('/v2/shop/get/list', shopController.get_list)

  router.post('/v2/shop/get/profile', shopController.getProfile)

  router.post('/v2/shop/get/detail', shopController.get_detail)

  router.put('/v2/shop/admin/update', shopController.adminUpdate)

  router.put('/v2/shop/update', shopController.update)

  router.post('/v2/shop/get/parcel', shopController.shop_get_parcel)
}