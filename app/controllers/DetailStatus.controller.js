const { response } = require('express')
const dateFormat = require('date-and-time')
var DetailStatus = require('../models/DetailStatus.model')

exports.add = function (req, res) {
    const now = new Date()
    var date = dateFormat.format(now, 'YYYY-MM-DD HH:mm:ss')
    var m_manv = null
    var m_mashipper = null
    if(req.body.manv){
        m_manv = req.body.manv 
    }
    if(req.body.mashipper){
        m_mashipper = req.body.mashipper
    }
    var data = {
        mabk: req.body.mabk,
        tgcapnhattrangthai: date,
        matt: req.body.matt,
        manv: m_manv,
        mashipper: m_mashipper
    }
    DetailStatus.AddDetailStatus(data, function (response) {
        res.send({ result: response })
    })
}

exports.count = function (req, res) {
    DetailStatus.count(req.body.mabk, function (response) {
        res.send({ result: response })
    })
}