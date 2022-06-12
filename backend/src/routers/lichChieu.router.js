module.exports = function (router) {
    var lichChieuController = require('../controller/lichChieu.controller');

    router.get("/lc/list", lichChieuController.get_list);

    router.get("/lc/detail/:id", lichChieuController.detail);

    router.post("/lc/add", lichChieuController.add);

    router.delete("/lc/delete/:id", lichChieuController.remove);

    router.put("/lc/update", lichChieuController.update);

    router.get("/lc/getlc/:id/:rid", lichChieuController.getLCByRoomAndIdPhim);
}