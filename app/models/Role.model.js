const db = require('../common/connect')
class Role {
    constructor() {
        this.maquyen = Role.maquyen
        this.tenquyen = Role.tenquyen
    }

    //get list 
    static get_all(result) {
        db.query("select * from quyen ", function (err, Role) {
            if (err) {
                result(err)
                return
            }
            result(Role)
        })
    }

}
module.exports = Role