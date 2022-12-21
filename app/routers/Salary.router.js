module.exports = function(router){
    const salaryController = require('../controllers/Salary.controller')
  
  router.post('/v2/salary/shipper/get', salaryController.shipper_get_salary)

  router.post('/v2/salary/check', salaryController.check_salary)

  router.post('/v2/salary/shipper/collection', salaryController.shipper_collection)

  router.post('/v2/salary/admin/collection', salaryController.admin_collection)

  router.post('/v2/salary/add', salaryController.create)
}