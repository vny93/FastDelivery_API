const { response } = require('express')
var Distance = require('../models/Distance.model')

// get distance price
exports.get_distance_price = function (req, res) {
    Distance.get_distance_price(req.body, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

// get list distance
exports.get_list_distance = function (req,res) {
    Distance.get_list_distance(function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.update = function (req, res) {
    Distance.checkIdExist(req.body.makc, function (response) {
        if(response){
            Distance.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.create = function (req, res) {
    Distance.create(req.body, function (response) {
        if(response){
            res.send({ result: response })
        }
    })
}

exports.get_max = function (req, res) {
    Distance.get_max(function (response) {
        if(response){
            res.send({ result: response })
        }
    })
}

exports.remove = function (req, res) {
    Distance.remove(req.body.makc,function (response) {
        if(response){
            res.send({ result: response })
        }
    })
}