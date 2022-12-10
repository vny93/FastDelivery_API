const db = require('../common/connect')
class DetailRegister {
    constructor() {
        this.mashipper = DetailRegister.mashipper
        this.makhuvuc = DetailRegister.makhuvuc
        this.trangthai = DetailRegister.trangthai
    }

    //add tk
    static create(data, result) {
        db.query("insert into chitietdangky set ?", data, function (err, DetailRegister) {
            if (err)
                result(null)
            else
                result(data)
        })
    }

    static get_list_areaShipper(id, result) {
        db.query("call get_list_areaShipper(?)", id, function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }

    //check wh use
    static check_register_area(data, result) {
        db.query("call check_register_area(?,?)", [data.mashipper, data.makhuvuc], function (err, DetailRegister) {
            if (err || DetailRegister[0].length == 0)
                result(false)
            else
                result(true)
        })
    }

    //delete
    static remove(data, result) {
        db.query("delete from chitietdangky where mashipper = ? and makhuvuc = ?", [data.mashipper, data.makhuvuc], function (err, DetailRegister) {
            if (err)
                result(null)
            else
                result("Xóa thành công")
        })
    }

    //update 
    static updateStatus(data, result) {
        db.query("update chitietdangky set trangthai = ? where mashipper = ?"+
        "and makhuvuc = ?", [data.trangthai, data.mashipper, data.makhuvuc], function (err, User) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }

}
module.exports = DetailRegister