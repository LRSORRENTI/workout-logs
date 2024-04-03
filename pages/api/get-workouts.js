"use strict";
exports.__esModule = true;
var sqlite3_1 = require("sqlite3");
function handler(req, res) {
    if (req.method === 'GET') {
        var db_1 = new sqlite3_1["default"].Database('./workout.db');
        var sql = "SELECT * FROM workouts WHERE name = 'Chest/Tri/Shoulders'";
        db_1.all(sql, [], function (err, rows) {
            db_1.close();
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.status(200).json(rows);
        });
    }
    else {
        res.status(405).end(); // Method Not Allowed
    }
}
exports["default"] = handler;
