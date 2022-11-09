const { response } = require('express')
var Status = require('../models/Status.model')

exports.get_list = function (req, res) {
    try {
        Status.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.get_id = function (req, res) {
    try {
        Status.get_id(req.body,function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}
