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

exports.getProfile = function (req, res) {
    Shop.getProfile(req.body.tendangnhap, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
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

exports.add = function (req, res) {
    Shop.create(req.body, function (response) {
        res.send({ result: response })
    })
}

exports.automaticId = function (req, res) {
    Shop.automaticId(function (response) {
        res.send({ result: response })
    })
}

exports.update = function (req, res) {
    Shop.update(req.body, function (response) {
        res.send({ result: response })
    })
}

exports.shop_get_parcel = function (req, res) {
    Shop.shop_get_parcel(req.body, function (response) {
        res.send({ result: response })
    })
}
