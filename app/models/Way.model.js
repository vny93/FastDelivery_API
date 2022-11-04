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

}
module.exports = Way