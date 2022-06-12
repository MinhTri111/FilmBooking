const db = require('../common/connect');
const MatHang = function (matHang) {
    this.id_hang = matHang.id_hang;
    this.ten = matHang.ten;
    this.gia = matHang.gia;
}

MatHang.get_all = function (result) {
    db.query("select * from mat_hang", function (err, h) {
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(h);
        }
    });
};

MatHang.getById = function (id, result) {
    db.query("select * from mat_hang where id_hang = ?", id, function (err, h) {
        if (err || h.length == 0) {
            result(err);
        } else {
            result(h);
        }
    });
};

MatHang.add = function (data, result) {
    db.query("INSERT INTO mat_hang (id_hang, ten, gia) VALUES (?,?,?);", [data.id_hang, data.ten, data.gia], function (err, p) {
        console.log(err, data)
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
};

MatHang.remove_mh = function (id, result) {
    db.query("delete from mat_hang where id_hang = ?", id, function (err, h) {
        if (err) {
            result(null);
        } else {
            result(h);
        }
    });
}

MatHang.update = function (u, result) {
    db.query("update mat_hang set ten=?,gia=? where id_hang = ?", [u.ten, u.gia, u.id_hang], function (err, u) {
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

module.exports = MatHang;