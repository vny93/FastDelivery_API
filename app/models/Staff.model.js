const db = require('../common/connect')
class Staff {
    constructor() {
        this.manv = Staff.manv
        this.cmnd = Staff.cmnd
        this.hoten = Staff.hoten
        this.gioitinh = Staff.gioitinh
        this.ngaysinh = Staff.ngaysinh
        this.sdt = Staff.sdt
        this.email = Staff.email
        this.diachi = Staff.diachi
        this.makho = Staff.makho
        this.tendangnhap = Staff.tendangnhap
    }

    //get profile
    static getProfile(id, result) {
        db.query("select * from nhanvien where tendangnhap = ?", id, function (err, Staff) {
            if (err || Staff.length == 0)
                result(null)
            else
                result(Staff[0])
        })
    }

    //add tk
    static create(data, result) {
        db.query("insert into nhanvien set ?", data, function (err, Staff) {
            if (err)
                result(null)
            else
                result(data)
        })
    }

    //get id exist
    static checkIdExist(id, result) {
        db.query("call get_staff_detail(?)", id, function (err, Staff) {
            if (err || Staff.length == 0)
                result(null)
            else
                result(Staff[0])
        })
    }

    //get list staff by role
    static getListStaff(id, result) {
        db.query("call get_list_staff(?)", id, function (err, res) {
            if (err || res[0].length == 0)
                result(res[0])
            else
                result(res[0])
        })
    }

    //get full staff
    static getFullStaff(result) {
        db.query("call get_full_staff()", function (err, res) {
            if (err || res[0].length == 0)
                result(res[0])
            else
                result(res[0])
        })
    }

    //get automatic id staff
    static automaticId(id, result) {
        db.query("call automatic_id_staff(?)", id, function (err, res) {
            if (err || res[0].length == 0)
                result(res[0])
            else
                result(res[0])
        })
    }

    //update 
    static adminUpdate(data, result) {
        db.query("update nhanvien set cmnd = ?, hoten = ?, gioitinh = ?, ngaysinh = ?," +
            "sdt = ?, email = ?, diachi = ? where manv = ?", [data.cmnd, data.hoten, data.gioitinh,
            data.ngaysinh, data.sdt, data.email, data.diachi, data.manv], function (err, Staff) {
                if (err)
                    result(null)
                else
                    result("Cập nhật thông tin thành công")
            })
    }

    //update
    static update(data, result) {
        db.query("update nhanvien set sdt = ? where manv = ?", [data.sdt, data.manv], function (err, Staff) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }

    //delete
    static remove(id, result) {
        db.query("delete from nhanvien where manv = ?", id, function (err, Staff) {
            if (err)
                result(null)
            else
                result("Xóa nhân viên " + id + " thành công")
        })
    }

    //check staff work
    static checkStaffWork(id, result) {
        db.query("call check_staff_work(?)", id, function (err, res) {
            if (err || res[0].length == 0)
                result(false)
            else
                result(true)
        })
    }

    //get by phone
    static checkPhone(sdt, result) {
        db.query("select * from nhanvien where sdt = ?", sdt, function (err, Staff) {
            if (err || Staff.length == 0)
                result(false)
            else
                result(true)
        })
    }

    //get by email
    static checkEmail(email, result) {
        db.query("select * from nhanvien where email = ?", email, function (err, Staff) {
            if (err || Staff.length == 0)
                result(false)
            else
                result(true)
        })
    }

    //get by cmnd
    static checkCmnd(cmnd, result) {
        db.query("select * from nhanvien where cmnd = ?", cmnd, function (err, Staff) {
            if (err || Staff.length == 0)
                result(false)
            else
                result(true)
        })
    }

    //get shipper area
    static get_shipper_area(data, result) {
        db.query("call get_shipper_area(?,?)", [data.tenkhuvuc,data.tentrangthai], function (err, res) {
            if (err || res.length == 0)
                result(null)
            else
                result(res[0])
        })
    }

}
module.exports = Staff