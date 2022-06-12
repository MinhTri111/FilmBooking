
module.exports = function (router) {
    var phimController = require('../controller/phim.controller');

    router.get("/phim/list", phimController.get_list);

    router.get("/phim/detail/:id", phimController.detail);

    router.post("/phim/add", phimController.add_phim);

    router.delete("/phim/delete/:id", phimController.remove_phim);

    router.put("/phim/update", phimController.update_phim);
}