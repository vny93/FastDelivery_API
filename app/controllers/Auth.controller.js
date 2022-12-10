const { response } = require('express')
var Auth = require('../models/Auth.model')
const jwt = require("jsonwebtoken")
const _APP = require("../common/_APP")
var JWT = require("../common/_JWT")
const brcypt = require('bcrypt') //mã hóa password
const _AuthMiddleWare = require('../common/_AuthMiddleWare')


//get list tk
exports.get_list = function (req, res) {
    try {
        Auth.get_all(function (response) {
            res.send({ result: response })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

//get tk by id
exports.detail = function (req, res) {
    Auth.getById(req.body.tendangnhap, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

//get status 
exports.get_status = function (req, res) {
    Auth.getStatusById(req.body.tendangnhap, function (response) {
        if(response){
            res.send({ result: response.trangthai })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

//get role 
exports.get_role = function (req, res) {
    Auth.getStatusById(req.body.tendangnhap, function (response) {
        if(response){
            res.send({ result: response.maquyen })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

//check
exports.check = function (req, res) {
    Auth.check(req.body, function (response) {
        res.send({ result: response })
    })
}

//find account
exports.finAccount = function (req, res) {
    Auth.findAccount(req.body.tendangnhap, function (response) {
            res.send({ result: response })
    })
}

//add tk
exports.add = function (req, res) {
    var data = {
        tendangnhap : req.body.tendangnhap,
        matkhau : req.body.matkhau,
        trangthai : 0,
        maquyen : req.body.maquyen 
     }
    Auth.create(data, function (response) {
        res.send({ result: response })
    })
}

//update password
exports.update_password = function (req, res) {
    Auth.checkIdExist(req.body.tendangnhap, function (response) {
        if(response){
            Auth.updatePassword(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

//check login
exports.login = function (req, res) {
    Auth.checkIdExist(req.body.tendangnhap, function (response) {
        if (response) {
            Auth.check_login(req.body, async function (response) {
                if (response) {
                    if(response == 1){
                        res.send({ accessToken: "", maquyen : 0})
                    }
                    else{
                    const accessToken = await JWT.make(response)
                    res.send({ accessToken: accessToken, maquyen : response.maquyen})
                    }
                }
                else {
                    return res.status(401).json("Not find")
                }

            })
        }
        else return res.status(401).json("Not find")
    })

}

//update status
exports.update_statusAccount = function (req, res) {
    Auth.checkIdExist(req.body.tendangnhap, function (response) {
        if(response){
            Auth.updateStatus(req.body, function (response) {
                res.send({ result: response })
            })
        }
        else{
            res.status(404).json("not find")
        }
    })
}


exports.cookie = function (req, res) {
    var cookie = req.cookies.accessToken
    var _token = req.headers.authorization
    return res.send({ result: cookie, token: _token })
}

