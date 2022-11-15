const { response } = require('express')
var Shop = require('../models/Shop.model')

exports.get_list = function (req, res) {
    try {
        Shop.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.get_detail = function (req, res) {
    Shop.getShopById(req.body.mach, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.checkPhone = function (req, res) {
    Shop.checkPhone(req.body.sdt, function (response) {
        res.send({ result: response })
    })
}

exports.checkEmail = function (req, res) {
    Shop.checkEmail(req.body.email, function (response) {
        res.send({ result: response })
    })
}

exports.adminUpdate = function (req, res) {
    Shop.adminUpdate(req.body, function (response) {
        res.send({ result: response })
    })

}
