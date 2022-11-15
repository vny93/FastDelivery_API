const db = require('../common/connect')
class Area {
    constructor() {
        this.makhuvuc = Area.makhuvuc
        this.tenkhuvuc = Area.tenkhuvuc
    }
    //add 
    static get_list(result) {
        db.query("select * from khuvuc", function (err, Area) {
            if (err) {
                result(err)
                return
            }
            result(Area)
        })
    }

}
module.exports = Area