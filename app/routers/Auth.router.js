module.exports = function (router) {
  const authController = require('../controllers/Auth.controller')

  //get list tk
  router.get('/v2/auth/list', authController.get_list)

  //update tk
  router.put('/v2/auth/update/password', authController.update_password)

  //update status account
  router.put('/v2/auth/update/status', authController.update_statusAccount)

  //add tk
  router.post('/v2/auth/admin/register', authController.add)
}
