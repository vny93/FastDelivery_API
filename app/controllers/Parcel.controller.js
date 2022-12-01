const { response } = require('express')
var Parcel = require('../models/Parcel.model')

exports.add = function (req, res) {
    Parcel.insert_parcel(req.body, function (response) {
        res.send({ result: response })
    })
}

exports.admin_get_parcel = function (req, res) {
    try {
        Parcel.admin_get_parcel(req.body,function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.staff_get_parcel = function (req, res) {
    try {
        Parcel.staff_get_parcel(req.body,function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.shipper_get_parcel = function (req, res) {
    try {
        Parcel.shipper_get_parcel(req.body,function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.updatePaymentStatus = function (req, res) {
    Parcel.updatePaymentStatus(req.body, function (response) {
        res.send({ result: response })
    })
}

exports.admin_statistics1 = function (req, res) {
    try {
        Parcel.admin_statistics1(req.body,function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.admin_statistics2 = function (req, res) {
    try {
        Parcel.admin_statistics2(req.body,function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.admin_turnover = function (req, res) {
    try {
        Parcel.admin_turnover(req.body,function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.full_status_detail = function (req, res) {
    try {
        Parcel.full_status_detail(req.body.mabk,function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

// exports.prototype = function (req, res) {
//     console.log("vô ne")
//     try {
//         Parcel.map(req.body,function (response) {
//             res.send({ result: response })
//         })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }

exports.prototype = function (req, res) {
    // var encoded = "guv`Ac_hjS_@`UsFfBkBr@sAb@iBl@cBf@wJ`D}Bx@eErEwAdBwDfEaBjBoD~DmF{EwDmDm@o@_F|F}H`KeQ~UqQfVYPeCbDE\\wAhB_JxL_DpE_ArAwA~AuAn@yKpDcC|@iCr@kBn@mA\\uAd@uCj@iC\\gIl@wAP{Gj@_BJ{@@eUE}BGwDOqHOCSGQMMa@Sa@AYFOLORq@g@wAmA_H}EaA{@mQkMiBkAOHiFvBgHdDUFuCxAwFhCOB_Bt@_G|BgFfCKNwKbFgCzA}@b@a@b@mB|@{B~@}C|@eJfCeAHiDBuI?UKyAAEnUNDhEDBBAdCeAA@I";
    // var is3D = true
    var len = req.body.encoded.length;
    var index = 0;
    var array = [];
    var lat = 0;
    var lng = 0;
    var ele = 0;

    while (index < len) {
        var b;
        var shift = 0;
        var result = 0;
        do {
            b = req.body.encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        var deltaLat = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lat += deltaLat;

        shift = 0;
        result = 0;
        do {
            b = req.body.encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        var deltaLon = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lng += deltaLon;

        if (req.body.is3D) {
            // elevation
            shift = 0;
            result = 0;
            do {
                b = req.body.encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var deltaEle = ((result & 1) ? ~(result >> 1) : (result >> 1));
            ele += deltaEle;
            array.push([lng * 1e-5, lat * 1e-5, ele / 100]);
        } else
            array.push([lng * 1e-5, lat * 1e-5]);
    }
    // var end = new Date().getTime();
    res.send({ result: array })
    // console.log("decoded " + len + " coordinates in " + ((end - start) / 1000) + "s");
    return array;
};

exports.generatePassword = function (req,res) {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        password = "";
        for(var i = 0; i < length;i++){
            let randomNumber = Math.floor(Math.random() * charset.length)
            password += charset.substring(randomNumber,randomNumber + 1)
        }
        //     retVal = "";
    // for (var i = 0, n = charset.length; i < length; ++i) {
    //     retVal += charset.charAt(Math.floor(Math.random() * n));
    // }
    res.send({result: password})
}