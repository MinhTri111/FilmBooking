const { response } = require('express');
const DienVien = require('../models/dienVien.model');

exports.get_list = function (req, res) {
    DienVien.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    DienVien.getById(req.params.id, function (response) {
        res.send({ result: response });
    });
}

exports.getByIdPhim = function (req, res) {
    DienVien.getByIdPhim(req.params.id, function (response) {
        res.send({ result: response });
    });
}

//body-parser
exports.add = function (req, res) {
    var data = req.body;
    console.log(req.body);
    DienVien.add(data, function (respnse) {
        res.send({ result: respnse });
    });
}

exports.remove = function (req, res) {
    var id = req.params.id;
    DienVien.remove_dv(id, function (response) {
        res.send({ result: response });
    })
}

exports.removeByIdPhim = function (req, res) {
    var id = req.params.id;
    DienVien.remove_dv_byIdPhim(id, function (response) {
        res.send({ result: response });
    })
}

exports.update = function (req, res) {
    var data = req.body;
    DienVien.update(data, function (response) {
        res.send({ result: response });
    });
}


