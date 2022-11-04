const db = require('../common/connect')
class DetailParcel {
    constructor() {
        this.mabk = DetailParcel.mabk
        this.masp = DetailParcel.masp
        this.tensp = DetailParcel.tensp
        this.soluong = DetailParcel.soluong
        this.giatien = DetailParcel.giatien
    }

    static insert_DetailParcel(data, result) {
        db.query("insert into chitietbuukien set ?", data, function (err, DetailParcel) {
            if (err)
                result(null)
            else
                result(data)
        })
    }
}
module.exports = DetailParcel