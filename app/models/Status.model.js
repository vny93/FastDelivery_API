const db = require('../common/connect')
class Status {
    constructor() {
        this.matt = Status.matt
        this.tentrangthai = Status.tentrangthai
    }
    //get list 
    static get_all(result) {
        db.query("select * from trangthai ", function (err, Status) {
            if (err) {
                result(err)
                return
            }
            result(Status)
        })
    }

}
module.exports = Status