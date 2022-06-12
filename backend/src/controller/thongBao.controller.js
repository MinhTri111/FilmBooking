const { response } = require('express');
const ThongBao = require('../models/thongBao.model');


exports.get_list = function (req, res) {
    ThongBao.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    ThongBao.getById(req.params.id, function (response) {
        res.send({ result: response });
    });
}

//body-parser
exports.add_tb = function (req, res) {
    var data = req.body;
    console.log(req.body);
    ThongBao.add(data, function (respnse) {
        res.send({ result: respnse });
    });
}

exports.remove_tb = function (req, res) {
    var id = req.params.id;
    ThongBao.remove(id, function (response) {
        res.send({ result: response });
    })
}

exports.update_tb = function (req, res) {
    var data = req.body;
    ThongBao.update(data, function (response) {
        res.send({ result: response });
    });
}


