module.exports = function(router){
    const warehouseController = require('../controllers/Warehouse.controller')

  router.get('/v2/warehouse/get/list', warehouseController.get_list)

  router.post('/v2/warehouse/get/parcel/status', warehouseController.get_parcel_warehouse)
}