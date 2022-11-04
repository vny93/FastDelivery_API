module.exports = function(router){
    const distanceController = require('../controllers/Distance.controller')

    router.post('/v2/distance/get_price', distanceController.get_distance_price)

}