module.exports = function(router){
    const staffController = require('../controllers/Staff.controller')

    router.post('/v2/staff/get/profile', staffController.getProfile)

    router.post('/v2/staff/register',staffController.add)

    router.post('/v2/staff/get/list', staffController.getListStaff)

    router.get('/v2/staff/get/full', staffController.get_full_staff)

    router.put('/v2/staff/admin/update', staffController.adminUpdate)

    router.put('/v2/staff/update', staffController.update)
  
    router.post('/v2/staff/delete', staffController.delete)

    router.post('/v2/staff/check/work', staffController.checkStaffWork)

    router.post('/v2/staff/id/automatic', staffController.automaticId)

    router.post('/v2/staff/get/detail', staffController.getDetail)

    router.post('/v2/staff/checkPhone',staffController.checkPhone)

    router.post('/v2/staff/checkEmail',staffController.checkEmail)

    router.post('/v2/staff/checkCmnd',staffController.checkCmnd)

    router.post('/v2/staff/get/shipper/area',staffController.get_shipper_area)

    router.post('/v2/staff/get/shipper/area2',staffController.get_shipper_area2)

    router.post('/v2/staff/get/list/cancel',staffController.get_list_cancel)

}