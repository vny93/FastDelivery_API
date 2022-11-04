const { response } = require('express')
var Role = require('../models/Role.model')

exports.get_list = function (req, res) {
    try {
        Role.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}
