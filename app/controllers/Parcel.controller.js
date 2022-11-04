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