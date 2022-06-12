module.exports = function (router) {
    var mVController = require('../controller/maVach.controller');

    router.get("/mv/list", mVController.get_list);

    router.get("/mv/detail/:id", mVController.detail);

    router.post("/mv/add", mVController.add);

    router.delete("/mv/delete/:id", mVController.remove);

    router.put("/mv/update", mVController.update);

    // router.get("/mv/generate", mVController.generate);
}