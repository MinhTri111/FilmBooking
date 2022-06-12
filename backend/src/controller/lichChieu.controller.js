const { response } = require('express');
const LichChieu = require('../models/LichChieu.model');

exports.get_list = function (req, res) {
    LichChieu.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    LichChieu.getById(req.params.id, function (response) {
        res.send({ result: response });
    });
}

exports.getLCByRoomAndIdPhim = function (req, res) {
    LichChieu.getByIdPhimVsRoomId(req.params.id, req.params.rid,  function (response) {
        res.send({ result: response });
    });
}

//body-parser
exports.add = function (req, res) {
    var data = req.body;
    console.log(req.body);
    LichChieu.add(data, function (respnse) {
        res.send({ result: respnse });
    });
}

exports.remove = function (req, res) {
    var id = req.params.id;
    LichChieu.remove_lc(id, function (response) {
        res.send({ result: response });
    })
}

exports.update = function (req, res) {
    var data = req.body;
    LichChieu.update(data, function (response) {
        res.send({ result: response });
    });
}


