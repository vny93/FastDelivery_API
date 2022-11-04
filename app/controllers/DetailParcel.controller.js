const { response } = require('express')
var DetailParcel = require('../models/DetailParcel.model')

exports.add = function (req, res) {
    DetailParcel.insert_DetailParcel(req.body, function (response) {
        res.send({ result: response })
    })
}