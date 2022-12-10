const { response } = require('express')
var DetailRegister = require('../models/DetailRegister.model')

exports.get_list_areaShipper = function (req, res) {
    DetailRegister.get_list_areaShipper(req.body.mashipper, function (response) {
        res.send({ result: response })
    })
}

exports.check_register_area = function (req, res) {
    DetailRegister.check_register_area(req.body, function (response) {
        res.send({ result: response })
    })

}

exports.create = function (req, res) {
    var data = {
        mashipper : req.body.mashipper,
        makhuvuc : req.body.makhuvuc,
        trangthai : 0
    }
    DetailRegister.create(data, function (response) {
        res.send({ result: response })
    })

}

exports.delete = function (req, res) {
    DetailRegister.remove(req.body, function (response) {
        res.send({ result: response })
    })
}

exports.update_status = function (req, res) {
    DetailRegister.updateStatus(req.body, function (response) {
        res.send({ result: response })
    })

}
