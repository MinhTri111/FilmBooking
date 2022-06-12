const db = require('../common/connect');
const DoanhThu = function (doanhThu) {
    this.id = doanhThu.id;
    this.ngay = doanhThu.ngay;
    this.doanh_thu = doanhThu.doanh_thu;
}

DoanhThu.get_all = function (result) {
    db.query("select * from doanh_thu", function (err, tB) {
        if (err) {
            result(err);
        } else {
            result(tB);
        }
    });
};

DoanhThu.getById = function (id, result) {
    db.query("select * from doanh_thu where id = ?", id, function (err, tB) {
        if (err || tB.length == 0) {
            result(err);
        } else {
            result(tB);
        }
    });
};

DoanhThu.add = function (data, result) {
    db.query("INSERT INTO doanh_thu (id, ngay, doanh_thu) VALUES (?,?,?);", [data.id, data.ngay, data.doanh_thu], function (err, tB) {
        console.log(err, data)
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
};

DoanhThu.remove = function (id, result) {
    db.query("delete from doanh_thu where id = ?", id, function (err, tB) {
        if (err) {
            result(null);
        } else {
            result(tB);
        }
    });
}

DoanhThu.update = function (u, result) {
    db.query("update doanh_thu set ngay=?,doanh_thu=? where id = ?", [u.ngay, u.doanh_thu, u.id], function (err, u) {
        console.log(err)
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(u);
        }
    })
};

module.exports = DoanhThu;