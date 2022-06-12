const { response } = require('express');
const chiTietGiaoDich = require('../models/chiTietGiaoDich.model');

exports.get_list = function (req, res) {
    chiTietGiaoDich.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    chiTietGiaoDich.getById(req.params.id, function (response) {
        res.send({ result: response });
    });
}

//body-parser
exports.add = function (req, res) {
    var data = req.body;
    console.log(req.body);
    chiTietGiaoDich.add(data, function (respnse) {
        res.send({ result: respnse });
    });
}

exports.remove = function (req, res) {
    var id = req.params.id;
    chiTietGiaoDich.remove_ctdg(id, function (response) {
        res.send({ result: response });
    })
}

exports.update = function (req, res) {
    var data = req.body;
    chiTietGiaoDich.update(data, function (response) {
        res.send({ result: response });
    });
}


