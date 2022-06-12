var express = require("express");
const cors = require("cors");
var cookies = require("cookie-parser");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookies());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

//cac router
require("./src/routers/home.router")(app);
require("./src/routers/user.router")(app);
require("./src/routers/phim.router")(app);
require("./src/routers/thongBao.router")(app);
require("./src/routers/dienVien.router")(app);
require("./src/routers/matHang.router")(app);
require("./src/routers/lichChieu.router")(app);
require("./src/routers/doanhThu.router")(app);
require("./src/routers/giaoDich.router")(app);
require("./src/routers/maVach.router")(app);

app.listen(5000, function () {
  console.log("Server listening on http://localhost:5000");
});
