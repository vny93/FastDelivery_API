module.exports = function(router){
    const statusController = require('../controllers/Status.controller')

  router.get('/v2/status/get/list', statusController.get_list)
}