var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./workout.db');
db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS workouts (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT NOT NULL,\n    date TEXT NOT NULL,\n    duration INTEGER NOT NULL\n  )");
});
db.close();
