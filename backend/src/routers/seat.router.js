
module.exports = function (router) {
    var seatController = require('../controller/seat.controller');

    router.get("/seat/list", seatController.get_seat);

    router.put("/seat/update/:id", seatController.update);
}