const db = require('../common/connect')
class Shop {
    constructor() {
        this.mach = Shop.mach
        this.tench = Shop.tench
        this.sdt = Shop.sdt
        this.email = Shop.email
        this.diachi = Shop.diachi
        this.tendangnhap = Shop.tendangnhap
    }
    //get list 
    static get_all(result) {
        db.query("select * from cuahang ", function (err, Shop) {
            if (err) {
                result(err)
                return
            }
            result(Shop)
        })
    }


    //get profile
    static getProfile(id, result) {
        db.query("select * from cuahang where tendangnhap = ?", id, function (err, Shop) {
            if (err || Shop.length == 0)
                result(null)
            else
                result(Shop[0])
        })
    }

    //get by id
    static getShopById(id, result) {
        db.query("select * from cuahang where mach = ?", id, function (err, Shop) {
            if (err || Shop.length == 0)
                result(null)
            else
                result(Shop[0])
        })
    }

    //get by phone
    static checkPhone(sdt, result) {
        db.query("select * from cuahang where sdt = ?", sdt, function (err, Shop) {
            if (err || Shop.length == 0)
                result(false)
            else
                result(true)
        })
    }

    //get by email
    static checkEmail(email, result) {
        db.query("select * from cuahang where email = ?", email, function (err, Shop) {
            if (err || Shop.length == 0)
                result(false)
            else
                result(true)
        })
    }

    //update 
    static adminUpdate(data, result) {
        db.query("update cuahang set tench = ?, sdt = ?, email = ?, diachi = ?" +
            " where mach = ?", [data.tench, data.sdt, data.email, data.diachi, data.mach], function (err, Shop) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //add tk
    static create(data, result) {
        db.query("insert into cuahang set ?", data, function (err, Shop) {
            if (err)
                result(null)
            else
                result("Thêm cửa hàng thành công")
        })
    }


    //get automatic id staff
    static automaticId(result) {
        db.query("call automatic_id_shop()", function (err, res) {
            if (err || res[0].length == 0)
                result(res[0])
            else
                result(res[0])
        })
    }

    //get automatic id staff
    static shop_get_parcel(data,result) {
        db.query("call shop_get_parcel(?,?,?)",[data.mach,data.diachi,data.trangthai], function (err, res) {
            if (err || res[0].length == 0)
                result(res[0])
            else
                result(res[0])
        })
    }

    //update
    static update(data, result) {
        db.query("update cuahang set sdt = ? where mach = ?", [data.sdt, data.mach], function (err, Staff) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }

}
module.exports = Shop