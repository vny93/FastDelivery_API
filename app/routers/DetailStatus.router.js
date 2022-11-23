module.exports = function(router){
    const detailStatusController = require('../controllers/DetailStatus.controller')

    router.post('/v2/detailStatus/add', detailStatusController.add)

    router.post('/v2/detailStatus/count', detailStatusController.count)
}