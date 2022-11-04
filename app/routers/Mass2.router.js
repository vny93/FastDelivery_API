module.exports = function(router){
    const massController = require('../controllers/Mass.controller')

    router.get('/v2/mass/get_list', massController.get_list_mass)

    router.put('/v2/mass/update', massController.update)
}