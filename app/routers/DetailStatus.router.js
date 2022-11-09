module.exports = function(router){
    const detailStatusController = require('../controllers/DetailStatus.controller')

    router.post('/v2/detailStatus/add', detailStatusController.add)

}