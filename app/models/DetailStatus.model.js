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
}

module.exports = DetailStatus