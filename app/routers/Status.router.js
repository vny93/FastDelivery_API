module.exports = function(router){
    const statusController = require('../controllers/Status.controller')

  router.get('/v2/status/get/list', statusController.get_list)

  router.post('/v2/status/get/id', statusController.get_id)
}