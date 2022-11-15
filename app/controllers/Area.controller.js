const { response } = require('express')
var Area = require('../models/Area.model')

// get list mass
exports.get_list_area = function (req, res) {
    Area.get_list(function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}
