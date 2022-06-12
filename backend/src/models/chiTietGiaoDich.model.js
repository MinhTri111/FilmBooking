const db = require('../common/connect');
const ChiTietGiaoDich = function (CTGiaoDich) {
    this.id = CTGiaoDich.id;
    this.id_giao_dich = CTGiaoDich.id_giao_dich;
    this.id_hang = CTGiaoDich.id_hang;
    this.so_luong = CTGiaoDich.so_luong;
}

ChiTietGiaoDich.get_all = function (result) {
    db.query("select * from chi_tiet_giao_dich", function (err, h) {
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(h);
        }
    });
};

ChiTietGiaoDich.getById = function (id, result) {
    db.query("select * from chi_tiet_giao_dich where id = ?", id, function (err, h) {
        if (err || h.length == 0) {
            result(err);
        } else {
            result(h);
        }
    });
};

ChiTietGiaoDich.add = function (data, result) {
    db.query("INSERT INTO chi_tiet_giao_dich (id, id_giao_dich, id_hang, so_luong) VALUES (?,?,?,?);", [data.id, data.id_giao_dich, data.id_hang, data.so_luong], function (err, p) {
        console.log(err, data)
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
};

ChiTietGiaoDich.remove_ctdg = function (id, result) {
    db.query("delete from chi_tiet_giao_dich where id = ?", id, function (err, h) {
        if (err) {
            result(null);
        } else {
            result(h);
        }
    });
}

ChiTietGiaoDich.update = function (u, result) {
    db.query("update chi_tiet_giao_dich set id_giao_dich=?, id_hang=?, so_luong=? where id = ?", [u.id_giao_dich, u.id_hang, u.so_luong, u.id], function (err, u) {
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

module.exports = ChiTietGiaoDich;