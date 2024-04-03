"use strict";
exports.__esModule = true;
var sqlite3_1 = require("sqlite3");
function handler(req, res) {
    if (req.method === 'POST') {
        var db_1 = new sqlite3_1["default"].Database('./workout.db');
        var _a = req.body, name_1 = _a.name, date = _a.date, duration = _a.duration;
        var sql = "INSERT INTO workouts (name, date, duration) VALUES (?, ?, ?)";
        db_1.run(sql, [name_1, date, duration], function (err) {
            db_1.close();
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.status(200).json({ id: this.lastID });
        });
    }
    else {
        res.status(405).end(); // Method Not Allowed
    }
}
exports["default"] = handler;
