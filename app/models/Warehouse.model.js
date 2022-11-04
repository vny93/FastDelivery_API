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

}
module.exports = Warehouse