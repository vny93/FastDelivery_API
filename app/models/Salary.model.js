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
}
module.exports = Salary