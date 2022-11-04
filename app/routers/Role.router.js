module.exports = function(router){
    const roleController = require('../controllers/Role.controller')

  router.get('/v2/role/get/list', roleController.get_list)
}