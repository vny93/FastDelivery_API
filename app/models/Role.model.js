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

    //get by id
    static getById(maquyen, result) {
        db.query("select * from quyen where maquyen = ?", maquyen, function (err, Role) {
            if (err || Role.length == 0)
                result(null)
            else
                result(Role[0])
        })
    }

    //get status by username
    static getRoleByAuth(tendangnhap, result) {
        db.query("call get_role_by_auth(?)", tendangnhap, function (err, Role) {
            if (err || Role.length == 0)
                result(null)
            else
                result(Role[0])
        })
    }

}
module.exports = Role