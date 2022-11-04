module.exports = function(router){
    const wayController = require('../controllers/Way.controller')

  router.post('/v2/way/add', wayController.add)
}