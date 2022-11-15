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
    static checkWayExist(mabk, result) {
        db.query("call check_way_exist(?)", mabk, function (err, res) {
            if (err || res[0].length == 0)
                result(false)
            else
                result(true)
        })
    }

}
module.exports = Way