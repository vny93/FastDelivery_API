module.exports = function(router){
    const detailRegisterController = require('../controllers/DetailRegister.controller')

  router.post('/v2/detailRegister/get/list/areaShipper', detailRegisterController.get_list_areaShipper)

  router.post('/v2/detailRegister/check/exist', detailRegisterController.check_register_area)

  router.post('/v2/detailRegister/add',detailRegisterController.create)

  router.post('/v2/detailRegister/delete', detailRegisterController.delete)
}