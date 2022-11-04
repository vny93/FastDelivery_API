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