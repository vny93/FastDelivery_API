module.exports = function(router){
    const massController = require('../controllers/Mass.controller')

    router.post('/v2/mass/get_price', massController.get_mass_price)

}