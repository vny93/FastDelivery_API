const db = require('../common/connect')
class Distance {
    constructor() {
        this.makc = Distance.makc
        this.kcbatdau = Distance.kcbatdau
        this.kcketthuc = Distance.kcketthuc
        this.giatien = Distance.giatien
    }

    //get distance
    static get_distance_price(data, result) {
        db.query("call get_distance_price(?)", [data.kc], function (err, res) {
            if (err || res.length == 0)
                result(res[0])
            else
                result(res[0])
        })
    }

    //get list
    static get_list_distance(result) {
        db.query("select * from khoangcach", function (err, Distance) {
            if (err) {
                result(err)
                return
            }
            result(Distance)
        })
    }

    //get by id
    static checkIdExist(id, result) {
        db.query("select * from khoangcach where makc = ?", id, function (err, Distance) {
            if (err || Distance.length == 0)
                result(null)
            else
                result(Distance[0])
        })
    }

    //update 
    static update(data, result) {
        db.query("update khoangcach set giatien = ? where makc = ?", [data.giatien, data.makc], function (err, User) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }
}
module.exports = Distance