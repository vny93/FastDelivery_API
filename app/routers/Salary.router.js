module.exports = function(router){
    const salaryController = require('../controllers/Salary.controller')
  
  router.post('/v2/salary/shipper/get', salaryController.shipper_get_salary)
}