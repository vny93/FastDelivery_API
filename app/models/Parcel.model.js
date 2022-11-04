const db = require('../common/connect')
class Parcel {
    constructor() {
        this.mabk = Parcel.mabk
        this.hotennguoinhan = Parcel.hotennguoinhan
        this.sdtnguoinhan = Parcel.sdtnguoinhan
        this.diachinguoinhan = Parcel.diachinguoinhan
        this.ptthanhtoan = Parcel.ptthanhtoan
        this.sotien = Parcel.sotien
        this.tinhtrangthanhtoan = Parcel.tinhtrangthanhtoan
        this.khoiluong = Parcel.khoiluong
        this.kichthuoc = Parcel.kichthuoc
        this.phigiao = Parcel.phigiao
        this.htvanchuyen = Parcel.htvanchuyen
        this.ghichu = Parcel.ghichu
        this.ngaygui = Parcel.ngaygui
        this.mach = Parcel.mach

    }

    static insert_parcel(data, result) {
        db.query("insert into buukien set ?", data, function (err, Parcel) {
            if (err)
                result(null)
            else
                result(data)
        })
    }

    //admin get parcel
    // static admin_get_parcel(data, result) {
    //     db.query("call admin_get_parcel(?,?,?)", [data.dateFrom, data.dateTo, data.trangthai], function (err, res) {
    //         if (err) {
    //             result(err)
    //             return
    //         }
    //         result(res[0])
    //     })
    // }
    //admin get parcel 
    static admin_get_parcel(data, result) {
        db.query("call admin_get_parcel2(?,?)", [data.diachi, data.trangthai], function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }
    //staff get parcel
    static staff_get_parcel(data, result) {
        db.query("call staff_get_parcel(?,?,?,?)", [data.dateFrom, data.dateTo, data.matt, data.makho], function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }

    //shipper get parcel
    static shipper_get_parcel(data, result) {
        db.query("call shipper_get_parcel(?,?,?,?)", [data.dateFrom, data.dateTo, data.matt, data.idshipper], function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }
}
module.exports = Parcel