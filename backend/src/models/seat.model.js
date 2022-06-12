const db = require('../common/connect');
const Seat = function (seat) {
    this.room_id = seat.room_id;
    this.row_no = seat.row_no; 
    this.seat_no = seat.seat_no;
    this.status = seat.status; 
}

Seat.get_all = function (result) {
    db.query("SELECT room.Room_Id, seat.Row_No, seat_no.Seat_No, seat_no.Status FROM room, seat, seat_no WHERE (room.Room_Id = seat.Room_Id) = seat_no.Seat_Id", function (err, phim) {
        if (err) {
            result(err);
        } else {
            result(phim);
        }
    });
};

Seat.updateStatus = function (u, result) {

};



module.exports = Seat;