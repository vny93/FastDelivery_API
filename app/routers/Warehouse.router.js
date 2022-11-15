module.exports = function(router){
    const warehouseController = require('../controllers/Warehouse.controller')

  router.get('/v2/warehouse/get/list', warehouseController.get_list)

  router.post('/v2/warehouse/get/parcel/status', warehouseController.get_parcel_warehouse)

  router.post('/v2/warehouse/get/detail', warehouseController.get_detail)

  router.put('/v2/warehouse/update', warehouseController.update)

  router.post('/v2/warehouse/add',warehouseController.add)

  router.post('/v2/warehouse/check/use', warehouseController.checkWHUse)

  router.post('/v2/warehouse/delete', warehouseController.delete)
}