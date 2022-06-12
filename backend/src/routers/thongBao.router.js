module.exports = function (router) {
    var tBController = require('../controller/thongBao.controller');

    router.get("/tb/list", tBController.get_list);

    router.get("/tb/detail/:id", tBController.detail);

    router.post("/tb/add", tBController.add_tb);

    router.delete("/tb/delete/:id", tBController.remove_tb);

    router.put("/tb/update", tBController.update_tb);
}