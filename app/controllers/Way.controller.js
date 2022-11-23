const { response } = require('express')
var Way = require('../models/Way.model')

exports.add = function (req, res) {
    var stt = req.body.stt
    // kho đầu tiên được thấy bưu kiện trước
    var data = {
        mabk: req.body.mabk,
        makho: req.body.makho,
        trangthai: 0,
    }
    if(stt == 0){
        data.trangthai = 1
    }
    Way.create(data, function (response) {
        res.send({ result: response })
    })
}


exports.checkWayExist = function (req, res) {
    Way.checkWayExist(req.body, function (response) {
        if(response){
            res.send({ result: response })
        }
        else{
            res.status(404).json("not find")
        }
    })
}

exports.update = function (req, res) {
    Way.update(req.body, function (response) {
        res.send({ result: response })
    })
}
