module.exports = function(router){
    const roleController = require('../controllers/Role.controller')

  router.get('/v2/role/get/list', roleController.get_list)
  
  router.post('/v2/role/get/byAuth', roleController.getRoleByAuth)
}