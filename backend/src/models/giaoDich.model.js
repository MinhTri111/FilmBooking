const db = require('../common/connect');
const GiaoDich = function (giaoDich) {
    this.id = giaoDich.id_hang;
    this.ngay = giaoDich.ten;
    this.id_user = giaoDich.gia;
    this.so_tien = giaoDich.gia;
}

GiaoDich.get_all = function (result) {
    db.query("select * from giao_dich", function (err, h) {
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(h);
        }
    });
};

GiaoDich.getById = function (id, result) {
    db.query("select * from giao_dich where id = ?", id, function (err, h) {
        if (err || h.length == 0) {
            result(err);
        } else {
            result(h);
        }
    });
};

GiaoDich.add = function (data, result) {
    db.query("INSERT INTO giao_dich (id, ngay, id_user, so_tien) VALUES (?,?,?,?);", [data.id, data.ngay, data.id_user, data.so_tien], function (err, p) {
        console.log(err, data)
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
};

GiaoDich.remove_dg = function (id, result) {
    db.query("delete from giao_dich where id = ?", id, function (err, h) {
        if (err) {
            result(null);
        } else {
            result(h);
        }
    });
}

GiaoDich.update = function (u, result) {
    db.query("update giao_dich set ngay=?, id_user=?, so_tien=? where id = ?", [u.ngay, u.id_user, u.so_tien, u.id], function (err, u) {
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

module.exports = GiaoDich;