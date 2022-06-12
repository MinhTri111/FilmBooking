const { response } = require('express');
const Seat = require('../models/seat.model');

exports.get_seat = function (req, res) {
    Seat.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.update = function (req, res) {
    var data = req.body;
    Seat.updateStatus(data, function (response) {
        res.send({ result: response });
    });
}




