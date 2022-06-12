module.exports = function (router) {
    var doanhThuController = require('../controller/doanhThu.controller');

    router.get("/dt/list", doanhThuController.get_list);

    router.get("/dt/detail/:id", doanhThuController.detail);

    router.post("/dt/add", doanhThuController.add_dt);

    router.delete("/dt/delete/:id", doanhThuController.remove_dt);

    router.put("/dt/update", doanhThuController.update_dt);
}