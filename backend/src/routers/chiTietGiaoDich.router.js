module.exports = function (router) {
    var CTGDController = require('../controller/chiTietGiaoDich.controller');

    router.get("/ctdg/list", CTGDController.get_list);

    router.get("/ctdg/detail/:id", CTGDController.detail);

    router.post("/ctdg/add", CTGDController.add);

    router.delete("/ctdg/delete/:id", CTGDController.remove);

    router.put("/ctdg/update", CTGDController.update);
}