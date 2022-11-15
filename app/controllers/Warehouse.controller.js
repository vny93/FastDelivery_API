const { response } = require('express')
var Warehouse = require('../models/Warehouse.model')

exports.get_list = function (req, res) {
    try {
        Warehouse.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.get_parcel_warehouse = function (req, res) {
    try {
        Warehouse.get_parcel_warehouse(req.body, function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.get_detail = function (req, res) {
    try {
        Warehouse.get_detail(req.body.makho, function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.update = function (req, res) {
    Warehouse.update(req.body, function (response) {
        res.send({ result: response })
    })

}

exports.add = function (req, res) {
    Warehouse.create(req.body, function (response) {
        res.send({ result: response })
    })
}

exports.checkWHUse = function (req, res) {
    Warehouse.checkWHUse(req.body.makho, function (response) {
        res.send({ result: response })
    })
}

exports.delete = function (req, res) {
    Warehouse.remove(req.body.makho, function (response) {
        res.send({ result: response })
    })
}
