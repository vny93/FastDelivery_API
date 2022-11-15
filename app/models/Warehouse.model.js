const db = require('../common/connect')
class Warehouse {
    constructor() {
        this.makho = Warehouse.makho
        this.tenkho = Warehouse.tenkho
        this.diachi = Warehouse.diachi
    }
    //get list 
    static get_all(result) {
        db.query("select * from kho ", function (err, Warehouse) {
            if (err) {
                result(err)
                return
            }
            result(Warehouse)
        })
    }

    //add tk
    static create(data, result) {
        db.query("insert into kho set ?", data, function (err, Warehouse) {
            if (err)
                result(null)
            else
                result(data)
        })
    }

    //get detail 
    static get_detail(id, result) {
        db.query("select * from kho where makho = ?", id, function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }

    //staff get parcel
    static get_parcel_warehouse(data, result) {
        db.query("call get_parcel_warehouse(?)", [data.trangthai], function (err, res) {
            if (err) {
                result(err)
                return
            }
            result(res[0])
        })
    }

    //update 
    static update(data, result) {
        db.query("update kho set tenkho = ?, diachi = ? where makho = ?", [data.tenkho, data.diachi, data.makho], function (err, res) {
            if (err)
                result(null)
            else
                result("Cập nhật thông tin thành công")
        })
    }

    //check wh use
    static checkWHUse(id, result) {
        db.query("call check_warehouse_use(?)", id, function (err, Warehouse) {
            if (err || Warehouse[0].length == 0)
                result(false)
            else
                result(true)
        })
    }

    //delete
    static remove(id, result) {
        db.query("delete from kho where makho = ?", id, function (err, Warehouse) {
            if (err)
                result(null)
            else
                result("Xóa thành công")
        })
    }

}
module.exports = Warehouse