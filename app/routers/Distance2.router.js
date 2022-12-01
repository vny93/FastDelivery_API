module.exports = function(router){
    const distanceController = require('../controllers/Distance.controller')

    router.get('/v2/distance/get_list', distanceController.get_list_distance)

    router.put('/v2/distance/update', distanceController.update)

    router.post('/v2/distance/add', distanceController.create)

    router.get('/v2/distance/get/max', distanceController.get_max)

    router.post('/v2/distance/delete', distanceController.remove)
}