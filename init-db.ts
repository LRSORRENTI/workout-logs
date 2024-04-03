const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./workout.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS workouts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    duration INTEGER NOT NULL
  )`);
});

db.close();
