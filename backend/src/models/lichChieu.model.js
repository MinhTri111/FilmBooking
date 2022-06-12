const db = require('../common/connect');
const LichChieu = function (lichChieu) {
    this.id = lichChieu.id;
    this.id_phim = lichChieu.id_phim;
    this.thoi_gian_chieu = lichChieu.thoi_gian_chieu;
    this.room_id = lichChieu.room_id;
}

LichChieu.get_all = function (result) {
    db.query("select * from lich_chieu", function (err, h) {
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(h);
        }
    });
};

LichChieu.getById = function (id, rid, result) {
    db.query("select * from lich_chieu where id = ?", id, function (err, h) {
        if (err || h.length == 0) {
            result(err);
        } else {
            result(h);
        }
    });
};

LichChieu.getByIdPhimVsRoomId = function (id, rid, result) {
    db.query("select * from lich_chieu where id_phim = ? and room_id = ?", [id, rid], function (err, h) {
        console.log(err);
        if (err || h.length == 0) {
            result(err);
        } else {
            result(h);
        }
    });
};

LichChieu.add = function (data, result) {
    db.query("INSERT INTO lich_chieu (id, id_phim, thoi_gian_chieu, room_id) VALUES (?,?,?,?);", [data.id, data.id_phim, data.thoi_gian_chieu, data.room_id], function (err, p) {
        console.log(err, data)
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
};

LichChieu.remove_lc = function (id, result) {
    db.query("delete from lich_chieu where id = ?", id, function (err, h) {
        if (err) {
            result(null);
        } else {
            result(h);
        }
    });
}

LichChieu.update = function (u, result) {
    db.query("update lich_chieu set id_phim=?,thoi_gian_chieu=?,room_id=? where id = ?", [u.id_phim, u.thoi_gian_chieu, u.room_id, u.id], function (err, u) {
        console.log(err)
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(u);
        }
    })
};
``

module.exports = LichChieu;