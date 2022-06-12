exports.home = function (req, res) {
    res.sendFile(__dirname.replace('src\\controller', '') + "/index.html")
}

exports.about = function (req, res) {
    res.send("about")
}