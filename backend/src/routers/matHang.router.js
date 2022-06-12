module.exports = function (router) {
    var matHangController = require('../controller/matHang.controller');

    router.get("/mh/list", matHangController.get_list);

    router.get("/mh/detail/:id", matHangController.detail);

    router.post("/mh/add", matHangController.add);

    router.delete("/mh/delete/:id", matHangController.remove);

    router.put("/mh/update", matHangController.update);
}