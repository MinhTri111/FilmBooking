const { response } = require('express');
const Phim = require('../models/phim.model');

exports.get_list = function (req, res) {
    Phim.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    Phim.getById(req.params.id, function (response) {
        res.send({ result: response });
    });
}

//body-parser

exports.add_phim = function (req, res) {
    var data = req.body;
    Phim.add(data, function (respnse) {
        res.send({result: respnse})
    });
}

exports.remove_phim = function (req, res) {
    var id = req.params.id;
    Phim.remove_phim(id, function (response) {
        res.send({ result: response });
    })
}

exports.update_phim = function(req, res) {
    var data = req.body;
    Phim.update(data, function(response){
        res.send({ result: response});
    });
 }


