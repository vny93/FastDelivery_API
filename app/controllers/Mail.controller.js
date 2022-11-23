const nodemailer = require('nodemailer')
var Auth = require('../models/Auth.model')
const { generatePassword } = require('./Parcel.controller')

/*
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vunganyen2000@gmail.com',
        pass: 'utudyodqujqiumxc'
    }
})

var mailOptions = {
    from: 'vunganyen2000@gmail.com',
    to: 'vunganyen2000@gmail.com',
    subject: 'Fast Delivery gửi đến bạn mật khẩu mới',
    text: 'Mật khẩu mới của bạn là: ' + password
}

exports.sendMail1 = function (req, res) {
    generatePassword
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
            res.send({ result: err })
        }
        else {
            console.log('Email sent: ' + info.response)
            res.send({ result: info.response })
        }
    })
}
*/

exports.sendMail1 = function (req, res) {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        password = "";
    for (var i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * charset.length)
        password += charset.substring(randomNumber, randomNumber + 1)
    }
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vunganyen2000@gmail.com',
            pass: 'utudyodqujqiumxc'
        }
    })

    var mailOptions = {
        from: 'vunganyen2000@gmail.com',
        to: req.body.email,
        subject: 'Fast Delivery gửi đến bạn mật khẩu mới',
        text: 'Mật khẩu mới của bạn là: ' + password
    }

    var data = {
        matkhau: password,
        tendangnhap: req.body.tendangnhap
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Email sent: ' + info.response)
        }
    })
    res.send({ result: "Đã gửi mật khẩu mới về gmail" })
}

exports.sendMail = function (req, res) {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        password = "";
    for (var i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * charset.length)
        password += charset.substring(randomNumber, randomNumber + 1)
    }
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vunganyen2000@gmail.com',
            pass: 'utudyodqujqiumxc'
        }
    })

    var mailOptions = {
        from: 'vunganyen2000@gmail.com',
        to: req.body.email,
        subject: 'Fast Delivery gửi đến bạn mật khẩu mới',
        text: 'Mật khẩu mới của bạn là: ' + password
    }

    var data = {
        matkhau: password,
        tendangnhap: req.body.tendangnhap
    }

    Auth.updatePassword(data, function (response) {
        res.send({ result: "Đã gửi mật khẩu mới về mail" })
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
            }
            else {
                console.log('Email sent: ' + info.response)
            }
        })
    })
}