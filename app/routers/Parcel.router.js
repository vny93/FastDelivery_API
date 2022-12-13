module.exports = function(router){
    const parcelController = require('../controllers/Parcel.controller')

    router.post('/v2/parcel/add', parcelController.add)

    router.post('/v2/parcel/admin/get', parcelController.admin_get_parcel)

    router.post('/v2/parcel/staff/get', parcelController.staff_get_parcel)

    router.post('/v2/parcel/shipper/get', parcelController.shipper_get_parcel)

    router.put('/v2/parcel/update/paymentStatus', parcelController.updatePaymentStatus)

    router.post('/v2/parcel/admin/statistics1', parcelController.admin_statistics1)

    router.post('/v2/parcel/admin/statistics2', parcelController.admin_statistics2)

    router.post('/v2/parcel/admin/statistics3', parcelController.admin_statistics3)

    router.post('/v2/parcel/shipper/statistics', parcelController.shipper_statistics)

    router.post('/v2/parcel/admin/turnover', parcelController.admin_turnover)

    router.post('/v2/parcel/map', parcelController.prototype)

    router.post('/v2/parcel/generatePassword', parcelController.generatePassword)

    router.post('/v2/parcel/full/status/detail', parcelController.full_status_detail)

    router.post('/v2/parcel/get/cancelInfor', parcelController.get_cancel_infor)
}
