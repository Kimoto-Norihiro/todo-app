"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const express = require('express');
const expressListEndpoints = require('express-list-endpoints');
const app = express();
app.use(express.json());
const router = require('./routes/index');
const config = require('../config/mysql.config');
const con = mysql.createConnection({
    host: config.HOST,
    port: config.PORT,
    user: config.USERNAME,
    password: config.PASSWORD,
    database: config.DATABASE
});
con.connect((err) => {
    if (err)
        throw err;
    console.log('Connected');
});
app.use('/', router);
app.listen(8000, () => {
    console.log('Listen on port 8000.');
    console.log(expressListEndpoints(app));
});
exports.default = app;
//# sourceMappingURL=server.js.map