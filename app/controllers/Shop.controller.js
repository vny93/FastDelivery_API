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
