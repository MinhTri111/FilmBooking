const db = require('../common/connect');
const DienVien = function (dienVien) {
    this.id_dien_vien = dienVien.id_dien_vien;
    this.ten_dien_vien = dienVien.ten_dien_vien;
    this.avatar = dienVien.avatar;
    this.ngay_sinh = dienVien.ngay_sinh;
    this.quoc_tich = dienVien.quoc_tich;
    this.id_phim = dienVien.id_phim;
}

DienVien.get_all = function (result) {
    db.query("select * from dien_vien", function (err, dv) {
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(dv);
        }
    });
};

DienVien.getById = function (id, result) {
    db.query("select * from dien_vien where id_dien_vien = ?", id, function (err, dv) {
        if (err || dv.length == 0) {
            result(err);
        } else {
            result(dv);
        }
    });
};

DienVien.getByIdPhim = function (id, result) {
    db.query("select * from dien_vien where id_phim = ?", id, function (err, dv) {
        if (err || dv.length == 0) {
            result(err);
        } else {
            result(dv);
        }
    });
};

DienVien.add = function (data, result) {
    db.query("INSERT INTO dien_vien (id_dien_vien, ten_dien_vien, avatar,ngay_sinh,quoc_tich,id_phim) VALUES (?,?,?,?,?,?);", [data.id_dien_vien, data.ten_dien_vien, data.avatar, data.ngay_sinh, data.quoc_tich, data.id_phim], function (err, p) {
        console.log(err, data)
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
};

DienVien.remove_dv = function (id, result) {
    db.query("delete from dien_vien where id_dien_vien = ?", id, function (err, dv) {
        if (err) {
            result(null);
        } else {
            result(dv);
        }
    });
}

DienVien.remove_dv_byIdPhim = function (id, result) {
    db.query("delete from dien_vien where id_phim = ?", id, function (err, dv) {
        if (err) {
            result(null);
        } else {
            result(dv);
        }
    });
}

DienVien.update = function (u, result) {
    db.query("update dien_vien set ten_dien_vien=?,avartar=?,ngay_sinh=?,quoc_tich=?,id_phim=? where id_dien_vien = ?", [u.ten_dien_vien, u.avartar, u.ngay_sinh, u.quoc_tich, u.id_phim, u.id_dien_vien], function (err, u) {
        console.log(err)
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(u);
        }
    })
};

module.exports = DienVien;