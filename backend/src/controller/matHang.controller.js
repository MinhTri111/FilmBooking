const { response } = require('express');
const matHang = require('../models/matHang.model');

exports.get_list = function (req, res) {
    matHang.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    matHang.getById(req.params.id, function (response) {
        res.send({ result: response });
    });
}

//body-parser
exports.add = function (req, res) {
    var data = req.body;
    console.log(req.body);
    matHang.add(data, function (respnse) {
        res.send({ result: respnse });
    });
}

exports.remove = function (req, res) {
    var id = req.params.id;
    matHang.remove_mh(id, function (response) {
        res.send({ result: response });
    })
}

exports.update = function (req, res) {
    var data = req.body;
    matHang.update(data, function (response) {
        res.send({ result: response });
    });
}


