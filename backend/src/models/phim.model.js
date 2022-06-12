const db = require('../common/connect');
const Phim = function (phim) {
    this.id_phim  = phim.id_phim;
    this.ten_phim = phim.ten_phim;
    this.noi_dung = phim.noi_dung;
    this.thoi_luong = phim.thoi_luong;
    this.so_sao = phim.so_sao;
    this.nha_san_xuat  = phim.nha_san_xuat;
    this.dao_dien = phim.dao_dien;
    this.the_loai = phim.the_loai;
    this.trailer = phim.trailer;
    this.poster = phim.poster;
    this.so_ve = phim.so_ve;
}

Phim.get_all = function (result) {
    db.query("select * from phim", function (err, phim) {
        if (err) {
            result(err);
        } else {
            result(phim);
        }
    });
};

Phim.getById = function (id, result) {
    db.query("select * from phim where Id_Phim = ?", id, function (err, user) {
        if (err || user.length == 0) {
            result(err);
        } else {
            result(user);
        }
    });
};

Phim.add = function (data, result) {
    db.query("INSERT INTO phim (id_phim, ten_phim, noi_dung,thoi_luong,so_sao,nha_san_xuat, dao_dien, the_loai,trailer,poster, so_ve) VALUES (?,?,?,?,?,?,?,?,?,?,?);", [data.id_phim,data.ten_phim,data.noi_dung,data.thoi_luong,data.so_sao,data.nha_san_xuat,data.dao_dien,data.the_loai,data.trailer,data.poster,data.so_ve], function(err, phim){
        console.log(err, data)
        if (err) {
            result(null);
         } else {
            result(data);
         }
     });
};

// Phim.add = function (data, result) {

// };

Phim.remove_phim = function (id, result) {
    db.query("delete from phim where Id_Phim = ?", id, function (err, phim) {
        if (err) {
            result(null);
        } else {
            result(phim);
        }
    });
}

Phim.update = function (u, result) {
    db.query("update phim set ten_phim=?,noi_dung=?,thoi_luong=?,so_sao=?,nha_san_xuat=?,dao_dien=?,the_loai=?,trailer=?,poster=?,so_ve=? where id_phim = ?", [u.ten_phim,u.noi_dung,u.thoi_luong,u.so_sao,u.nha_san_xuat,u.dao_dien,u.the_loai,u.trailer,u.poster,u.so_ve,u.id_phim], function(err, u){
        console.log(err)
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(u);
        }
    })
};

module.exports = Phim;