const { response } = require('express');
const MaVach = require('../models/maVach.model');

exports.get_list = function (req, res) {
    MaVach.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    MaVach.getById(req.params.id, function (response) {
        res.send({ result: response });
    });
}

//body-parser
exports.add = function (req, res) {
    var data = req.body;
    console.log(req.body);
    MaVach.add(data, function (respnse) {
        res.send({ result: respnse });
    });
}

exports.remove = function (req, res) {
    var id = req.params.id;
    MaVach.remove_mv(id, function (response) {
        res.send({ result: response });
    })
}

exports.update = function (req, res) {
    var data = req.body;
    MaVach.update(data, function (response) {
        res.send({ result: response });
    });
}

// exports.generate = function (req, res) {
 
// }


