const { response } = require('express');
const DoanhThu = require('../models/thongBao.model');


exports.get_list = function (req, res) {
    DoanhThu.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    DoanhThu.getById(req.params.id, function (response) {
        res.send({ result: response });
    });
}

//body-parser
exports.add_dt = function (req, res) {
    var data = req.body;
    console.log(req.body);
    DoanhThu.add(data, function (respnse) {
        res.send({ result: respnse });
    });
}

exports.remove_dt = function (req, res) {
    var id = req.params.id;
    DoanhThu.remove(id, function (response) {
        res.send({ result: response });
    })
}

exports.update_dt = function (req, res) {
    var data = req.body;
    DoanhThu.update(data, function (response) {
        res.send({ result: response });
    });
}


