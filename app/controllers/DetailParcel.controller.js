const { response } = require('express')
var DetailParcel = require('../models/DetailParcel.model')

exports.add = function (req, res) {
    DetailParcel.insert_DetailParcel(req.body, function (response) {
        res.send({ result: response })
    })
}

exports.get = function (req, res) {
    DetailParcel.get_DetailParcel(req.body.mabk, function (response) {
        res.send({ result: response })
    })
}