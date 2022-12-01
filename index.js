
var express = require('express') //xử lí đường link, dữ liệu, json... quản lý các router, db 
var app = express()
/**
 * Cấu hình body-parser
 */
var bodyParser = require('body-parser')
const _AuthMiddleWare = require('./app/common/_AuthMiddleWare')
const authRoute = require('./app/routers/Auth.router')
const cookieParser = require('cookie-parser')
app.use(bodyParser.urlencoded({extended: false})) //mặc định là true nhưng sử dụng json để false để tránh các lổi kí tự...
app.use(bodyParser.json())
app.use(cookieParser())
/**
 * Allow Origin
 */
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET,POST,POT,DELETE")
    next()
})


require('./app/routers/Auth2.router')(app)
require('./app/routers/Mass.router')(app)
require('./app/routers/Distance.router')(app)
require('./app/routers/Parcel.router')(app)
require('./app/routers/DetailParcel.router')(app)
require('./app/routers/Role.router')(app)
require('./app/routers/DetailStatus2.router')(app)
require('./app/routers/Mail.router')(app)
require('./app/routers/Shop2.router')(app)
app.use(_AuthMiddleWare.isAuth) // check token hợp lệ thì sẽ được chạy những routers phía dưới 
require('./app/routers/Auth.router')(app)
require('./app/routers/Staff.router')(app)
require('./app/routers/Distance2.router')(app)
require('./app/routers/Mass2.router')(app)
require('./app/routers/Warehouse.router')(app)
require('./app/routers/Shop.router')(app)
require('./app/routers/Status.router')(app)
require('./app/routers/Way.router')(app)
require('./app/routers/DetailStatus.router')(app)
require('./app/routers/DetailRegister.router')(app)
require('./app/routers/Area.router')(app)
require('./app/routers/Salary.router')(app)

app.listen(4000,function(){
    console.log("Server listening on http://localhost:4000");
})
