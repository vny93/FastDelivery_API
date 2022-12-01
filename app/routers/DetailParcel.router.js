module.exports = function(router){
    const detailParcelController = require('../controllers/DetailParcel.controller')

    router.post('/v2/detailParcel/add', detailParcelController.add)

    router.post('/v2/detailParcel/get', detailParcelController.get)
}