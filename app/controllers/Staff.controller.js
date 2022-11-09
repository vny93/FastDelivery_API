const { response } = require('express')
var Staff = require('../models/Staff.model')

exports.getProfile = function (req, res) {
    Staff.getProfile(req.body.tendangnhap, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.add = function (req, res) {
    Staff.create(req.body, function (response) {
        res.send({ result: response })
    })
}

exports.getListStaff = function (req, res) {
    Staff.getListStaff(req.body.maquyen, function (response) {
        if(response){
            res.send({ result: response})
        }
        else{
            res.status(404).json("not find")
        }
    })
}

// get full staff
exports.get_full_staff = function (req, res) {
    Staff.getFullStaff(function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.checkStaffWork = function (req, res) {
    Staff.checkStaffWork(req.body.manv, function (response) {
            res.send({ result: response })
    })
}

exports.automaticId = function (req, res) {
    Staff.automaticId(req.body.maquyen, function (response) {
            res.send({ result: response })
    })
}

exports.adminUpdate = function (req, res) {
    Staff.checkIdExist(req.body.manv, function (response) {
        if(response){
            Staff.adminUpdate(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.update = function (req, res) {
    Staff.checkIdExist(req.body.manv, function (response) {
        if(response){
            Staff.update(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.delete = function (req, res) {
    Staff.checkIdExist(req.body.manv, function (response) {
        if(response){
            Staff.remove(req.body.manv, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.getDetail = function (req, res) {
    Staff.checkIdExist(req.body.manv, function (response) {
        if (response) {
            res.send({ result: response })
        }
        else {
            res.status(404).json("not find")
        }
    })
}

exports.checkPhone = function (req, res) {
    Staff.checkPhone(req.body.sdt, function (response) {
            res.send({ result: response })
    })
}

exports.checkEmail = function (req, res) {
    Staff.checkEmail(req.body.email, function (response) {
            res.send({ result: response })
    })
}

exports.checkCmnd = function (req, res) {
    Staff.checkCmnd(req.body.cmnd, function (response) {
            res.send({ result: response })
    })
}

exports.get_shipper_area = function (req, res) {
    Staff.get_shipper_area(req.body, function (response) {
            res.send({ result: response })
    })
}

