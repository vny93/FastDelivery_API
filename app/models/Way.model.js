const db = require('../common/connect')
class Way {
    constructor() {
        this.mabk = Way.mabk
        this.makho = Way.makho
        this.trangthai = Way.trangthai
    }
    //add 
    static create(data, result) {
        db.query("insert into duongdi set ?", data, function (err, Way) {
            if (err)
                result(null)
            else
                result("Thêm thành công")
        })
    }

    //check way exist
    static checkWayExist(data, result) {
        db.query("call check_way_exist(?,?)", [data.mabk, data.matt], function (err, res) {
            if (err || res[0].length == 0)
                result(null)
            else
                result(res[0])
        })
    }

    //update
    static update(data, result) {
        db.query("update duongdi set trangthai = ? where mabk = ? and makho = ?", [data.trangthai, data.mabk, data.makho], function (err, Staff) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }

}
module.exports = Way