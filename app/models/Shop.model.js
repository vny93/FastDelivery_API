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

    //get by id
    static getShopById(id, result) {
        db.query("select * from cuahang where mach = ?", id, function (err, Shop) {
            if (err || Shop.length == 0)
                result(null)
            else
                result(Shop[0])
        })
    }

}
module.exports = Shop