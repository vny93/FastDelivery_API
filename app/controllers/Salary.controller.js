const { response } = require('express')
var Salary = require('../models/Salary.model')

exports.shipper_get_salary = function (req, res) {
    Salary.shipper_get_salary(req.body, function (response) {
        res.send({ result: response })
    })
}

exports.check_salary = function (req, res) {
    Salary.check_salary(req.body, function (response) {
        res.send({ result: response })
    })
}

exports.create = function (req, res) {
    Salary.create(req.body, function (response) {
        res.send({ result: response })
    })
}