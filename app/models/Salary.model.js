const db = require('../common/connect')
class Salary {
    constructor() {
        this.manv = Salary.manv
        this.ngaynhan = Salary.ngaynhan
        this.luongcoban = Salary.luongcoban
        this.tienhoahong = Salary.tienhoahong
    }

    static shipper_get_salary(data, result) {
        db.query("call shipper_get_salary(?,?,?)", [data.idshipper, data.dateFrom, data.dateTo], function (err, res) {
            if (err || res.length == 0)
                result(res[0])
            else
                result(res[0])
        })
    }

    static check_salary(data, result) {
        db.query("call check_salary(?,?)", [data.id, data.mdate], function (err, res) {
            if (err || res[0].length == 0)
                result(false)
            else
                result(true)
        })
    }

    //add 
    static create(data, result) {
        db.query("insert into luong set ?", data, function (err, res) {
            if (err)
                result(null)
            else
                result("Phát lương thành công")
        })
    }
}
module.exports = Salary