module.exports = function(router){
    const massController = require('../controllers/Mass.controller')

    router.get('/v2/mass/get_list', massController.get_list_mass)

    router.put('/v2/mass/update', massController.update)

    router.post('/v2/mass/add', massController.create)

    router.get('/v2/mass/get/max', massController.get_max)

    router.post('/v2/mass/delete', massController.remove)
}