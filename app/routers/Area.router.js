module.exports = function(router){
    const areaController = require('../controllers/Area.controller')

    router.get('/v2/area/get/list', areaController.get_list_area)

}