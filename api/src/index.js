"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var routes_1 = require("./routes");
dotenv.config();
var PASSWORD_DB = process.env.PASSWORD_DB;
var USER_DB = process.env.USER_DB;
var NAME_DB = process.env.NAME_DB;
var PORT = process.env.PORT;
mongoose_1["default"].set('strictQuery', false);
mongoose_1["default"].connect("mongodb+srv://".concat(USER_DB, ":").concat(PASSWORD_DB, "@").concat(NAME_DB, "/test"))
    .then(function () {
    console.log('mongodb as conected!');
    var app = (0, express_1["default"])();
    app.use(express_1["default"].json());
    app.use(routes_1.routes);
    app.listen(PORT, function () {
        console.log("Server is running in http://localhost/".concat(PORT));
    });
})["catch"](function (err) { return console.error(err); });
