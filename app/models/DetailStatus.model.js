const db = require('../common/connect')
class DetailStatus {
    constructor() {
        this.mabk = DetailStatus.makl
        this.tgcapnhattrangthai = DetailStatus.tgcapnhattrangthai
        this.matt = DetailStatus.matt
        this.manv = DetailStatus.manv
        this.mashipper = DetailStatus.mashipper
    }

    //user update cart 
    static AddDetailStatus(data, result) {
        db.query("insert into chitiettrangthaibk set ?", data, function (err, DetailStatus) {
            if (err)
                result(null)
            else
                result("Thêm thành công")
        })
    }

    //count delivered fail
    static count(mabk, result) {
        db.query("call count_delivery_failed(?)", mabk, function (err, res) {
            if (err || res[0].length == 0)
                result(null)
            else
                result(res[0])
        })
    }
}

module.exports = DetailStatus