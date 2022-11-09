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

    static get_id(data,result) {
        db.query("select matrangthai from trangthai where tentrangthai = ? ",data.tentrangthai, function (err, Status) {
            if (err) {
                result(err)
                return
            }
            result(Status)
        })
    }

}
module.exports = Status