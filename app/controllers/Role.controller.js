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

exports.detail = function (req, res) {
    Role.getById(req.body.maquyen, function (response) {
        if(response){
            res.send({ result: response })
        }
    })
}

exports.getRoleByAuth = function (req, res) {
    Role.getRoleByAuth(req.body.tendangnhap, function (response) {
        if(response){
            res.send({ result: response })
        }
    })
}
