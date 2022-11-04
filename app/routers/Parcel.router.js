module.exports = function(router){
    const parcelController = require('../controllers/Parcel.controller')

    router.post('/v2/parcel/add', parcelController.add)

    router.post('/v2/parcel/admin/get', parcelController.admin_get_parcel)

    router.post('/v2/parcel/staff/get', parcelController.staff_get_parcel)

    router.post('/v2/parcel/shipper/get', parcelController.shipper_get_parcel)
}