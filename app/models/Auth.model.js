const db = require('../common/connect')
class Auth {
    constructor() {
        this.tendangnhap = Auth.tendangnhap
        this.matkhau = Auth.matkhau
        this.trangthai = Auth.trangthai
        this.maquyen = Auth.maquyen
    }

    //get list tk
    static get_all(result) {
        db.query("select * from taikhoan ", function (err, Auth) {
            if (err) {
                result(err)
                return
            }
            result(Auth)
        })
    }
    //check id Exist
    static checkIdExist(tendangnhap, result) {
        db.query("select * from Taikhoan where tendangnhap = ?", tendangnhap, function (err, Auth) {
            if (err || Auth.length == 0)
                result(null)
            else
                result(Auth[0]) //sql trả về dữ liệu vào biến taikhoan trong function sau khi tìm ra 
        })
    }

    //get status by username
    static getStatusById(tendangnhap, result) {
        db.query("select * from Taikhoan where tendangnhap = ?", tendangnhap, function (err, Auth) {
            if (err || Auth.length == 0)
                result(null)
            else
                result(Auth[0])
        })
    }

    //check
    static check(data, result) {
        db.query("select * from Taikhoan where tendangnhap = ? and matkhau = ?", [data.tendangnhap, data.matkhau], function (err, Auth) {
            if (err || Auth.length == 0)
                result(false)
            else
                result(true)
        })
    }

    //find account
    static findAccount(tendangnhap, result) {
        db.query("select * from Taikhoan where tendangnhap = ?", tendangnhap, function (err, Auth) {
            if (err || Auth.length == 0)
                result(false)
            else
                result(true) //sql trả về dữ liệu vào biến taikhoan trong function sau khi tìm ra 
        })
    }

    //add tk
    static create(data, result) {
        db.query("insert into taikhoan set ?", data, function (err, Auth) {
            if (err)
                result(null)
            else {
                result({
                    tendangnhap: data.tendangnhap,
                    trangthai: 0,
                    maquyen: data.maquyen
                }) //trả về data để hiển thị postman cái mình insert vô, còn taikhoan ở hàm function lúc này sql kh trả về dl sau khi insert
            }
        })
    }
    //update password
    static updatePassword(data, result) {
        db.query("update taikhoan set matkhau = ? where tendangnhap = ?", [data.matkhau, data.tendangnhap], function (err, Auth) {
            if (err)
                result(null)
            else
                result("Cập nhật mật khẩu thành công")
        })
    }
    //update status account
    static updateStatus(data, result) {
        db.query("update taikhoan set trangthai = ? where tendangnhap = ?", [data.trangthai, data.tendangnhap], function (err, Auth) {
            if (err)
                result(null)
            else
                result("Cập nhật trạng thái tài khoản thành công")
        })
    }

    //xóa tk (test thêm thoi chứ k có xóa đi tk)
    static removeTK(data, result) {
        db.query("delete from taikhoan where tendangnhap = ?", data, function (err, Auth) {
            if (err)
                result(null)
            else
                result("Xóa tài khoản " + data + " thành công")
        })
    }
    //check login trả về token
    static check_login(data, result) {
        db.query("select * from taikhoan where tendangnhap = ? and matkhau = ?", [data.tendangnhap, data.matkhau], function (err, Auth) {
            if (err || Auth.length == 0 || Auth[0].trangthai == 1) {
                result(null)
            }
            else {
                result(Auth[0])
            }
        })
    }
}


module.exports = Auth