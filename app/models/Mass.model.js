const db = require('../common/connect')
class Mass {
    constructor() {
        this.makl = Mass.makl
        this.klbatdau = Mass.klbatdau
        this.klketthuc = Mass.klketthuc
        this.giatien = Mass.giatien
    }

    //get mass
    static get_mass_price(data, result) {
        db.query("call get_mass_price(?)", [data.kl], function (err, res) {
            if (err || res.length == 0)
                result(res[0])
            else
                result(res[0])
        })
    }

    //get list
    static get_list_mass(result) {
        db.query("select * from khoiluong", function (err, Mass) {
            if (err) {
                result(err)
                return
            }
            result(Mass)
        })
    }

    //get by id
    static checkIdExist(id, result) {
        db.query("select * from khoiluong where makl = ?", id, function (err, Mass) {
            if (err || Mass.length == 0)
                result(null)
            else
                result(Mass[0])
        })
    }

    //update 
    static update(data, result) {
        db.query("update khoiluong set giatien = ? where makl = ?", [data.giatien, data.makl], function (err, User) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }
}
module.exports = Mass