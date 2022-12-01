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
        db.query("call staff_get_parcel2(?,?,?)", [data.makho, data.diachi, data.trangthai], function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }

    //shipper get parcel
    static shipper_get_parcel(data, result) {
        db.query("call shipper_get_parcel2(?,?,?)", [data.idshipper, data.diachi, data.trangthai], function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }

    //update
    static updatePaymentStatus(data, result) {
        db.query("update buukien set tinhtrangthanhtoan = ? where mabk = ?", [data.trangthaitt, data.mabk], function (err, res) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }

    static admin_statistics1(data, result) {
        db.query("call admin_statistics1(?,?)", [data.dateFrom, data.dateTo], function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }

    static admin_statistics2(data, result) {
        db.query("call admin_statistics2(?,?,?)", [data.dateFrom, data.dateTo, data.trangthai], function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }

    static admin_turnover(data, result) {
        db.query("call admin_turnover(?,?)", [data.dateFrom, data.dateTo], function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }

    //admin get parcel 
    static full_status_detail(id, result) {
        db.query("call full_status_detail(?)", id, function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }

    static map(data, result) {
        console.log("vô 2")
        var len = data.encoded.length;
        console.log(len)
        var index = 0;
        var array = [];
        var lat = 0;
        var lng = 0;
        var ele = 0;

        while (index < len) {
            var b;
            var shift = 0;
            var result = 0;
            do {
                b = data.encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var deltaLat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += deltaLat;

            shift = 0;
            result = 0;
            do {
                b = data.encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var deltaLon = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += deltaLon;

            if (data.is3D) {
                // elevation
                shift = 0;
                result = 0;
                do {
                    b = data.encoded.charCodeAt(index++) - 63;
                    result |= (b & 0x1f) << shift;
                    shift += 5;
                } while (b >= 0x20);
                var deltaEle = ((result & 1) ? ~(result >> 1) : (result >> 1));
                ele += deltaEle;
                array.push([lng * 1e-5, lat * 1e-5, ele / 100]);
            } else
                array.push([lng * 1e-5, lat * 1e-5]);
        }
        // var end = new Date().getTime();
        // console.log("decoded " + len + " coordinates in " + ((end - start) / 1000) + "s");
        result(array[0])
    }
}
module.exports = Parcel