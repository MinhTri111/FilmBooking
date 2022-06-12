module.exports = function (router) {
    var dienVienController = require('../controller/dienVien.controller');

    router.get("/dv/list", dienVienController.get_list);

    router.get("/dv/detail/:id", dienVienController.detail);

    router.post("/dv/add", dienVienController.add);

    router.delete("/dv/delete/:id", dienVienController.remove);

    router.put("/dv/update", dienVienController.update);

    router.get("/dv/getByIdPhim/:id", dienVienController.getByIdPhim);

    router.delete("/dv/deleteByIdPhim/:id", dienVienController.removeByIdPhim);
}