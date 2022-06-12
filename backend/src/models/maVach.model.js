const db = require("../common/connect");
const QRCode = require("qrcode");

const MaVach = function (maVach) {
  this.id_ma_vach = maVach.id_ma_vach;
  this.id_giao_dich = maVach.id_giao_dich;
};

MaVach.get_all = function (result) {
  db.query("select * from ma_vach", function (err, h) {
    if (err) {
      console.log(err);
      result(err);
    } else {
      result(h);
    }
  });
};

MaVach.getById = function (id, result) {
  db.query("select * from ma_vach where id_ma_vach = ?", id, function (err, h) {
    if (err || h.length == 0) {
      result(err);
    } else {
      result(h);
    }
  });
};

MaVach.add = function (data, result) {
  db.query(
    "INSERT INTO ma_vach (id_ma_vach, id_giao_dich) VALUES (?,?);",
    [data.id_ma_vach, data.id_giao_dich],
    function (err, p) {
      console.log(err, data);
      if (err) {
        result(null);
      } else {
        result(data);
      }
    }
  );
};

MaVach.remove_mv = function (id, result) {
  db.query("delete from ma_vach where id_ma_vach = ?", id, function (err, h) {
    if (err) {
      result(null);
    } else {
      result(h);
    }
  });
};

MaVach.update = function (u, result) {
  db.query(
    "update lich_chieu set id_giao_dich=? where id_ma_vach = ?",
    [u.id_giao_dich, u.id_ma_vach],
    function (err, u) {
      console.log(err);
      if (err) {
        console.log(err);
        result(err);
      } else {
        result(u);
      }
    }
  );
};

// MaVach.generate = function (u, result) {

// };

module.exports = MaVach;
