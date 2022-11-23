module.exports = function(router){
    const mailController = require('../controllers/Mail.controller')

    router.post('/v2/mail/send', mailController.sendMail)

}