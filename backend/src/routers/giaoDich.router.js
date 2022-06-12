module.exports = function (router) {
    var giaoDichController = require('../controller/giaoDich.controller');

    router.get("/dg/list", giaoDichController.get_list);

    router.get("/dg/detail/:id", giaoDichController.detail);

    router.post("/dg/add", giaoDichController.add);

    router.delete("/dg/delete/:id", giaoDichController.remove);

    router.put("/dg/update", giaoDichController.update);
}