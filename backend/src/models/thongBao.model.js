const db = require('../common/connect');
const ThongBao = function (thongBao) {
    this.id = thongBao.id;
    this.ngay = thongBao.ngay;
    this.noi_dung = thongBao.noi_dung;
}

ThongBao.get_all = function (result) {
    db.query("select * from thong_bao", function (err, tB) {
        if (err) {
            result(err);
        } else {
            result(tB);
        }
    });
};

ThongBao.getById = function (id, result) {
    db.query("select * from thong_bao where id = ?", id, function (err, tB) {
        if (err || tB.length == 0) {
            result(err);
        } else {
            result(tB);
        }
    });
};

ThongBao.add = function (data, result) {
    db.query("INSERT INTO thong_bao (id, ngay, noi_dung) VALUES (?,?,?);", [data.id, data.ngay, data.noi_dung], function (err, tB) {
        console.log(err, data)
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
};

ThongBao.remove = function (id, result) {
    db.query("delete from thong_bao where id = ?", id, function (err, tB) {
        if (err) {
            result(null);
        } else {
            result(tB);
        }
    });
}

ThongBao.update = function (u, result) {
    db.query("update thong_bao set ngay=?,noi_dung=? where id = ?", [u.ngay, u.noi_dung, u.id], function (err, u) {
        console.log(err)
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(u);
        }
    })
};

module.exports = ThongBao;