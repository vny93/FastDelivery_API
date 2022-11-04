const { response } = require('express')
var Mass = require('../models/Mass.model')

//get doanh thu
exports.get_mass_price = function (req, res) {
    Mass.get_mass_price(req.body, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

// get list mass
exports.get_list_mass = function (req, res) {
    Mass.get_list_mass(function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.update = function (req, res) {
    Mass.checkIdExist(req.body.makl, function (response) {
        if(response){
            Mass.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}