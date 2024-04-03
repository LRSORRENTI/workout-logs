import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';

interface Workout {
  id: number;
  name: string;
  date: string;
  duration: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Workout[] | { error: string }>
) {
  if (req.method === 'GET') {
    const db = new sqlite3.Database('./workout.db');

    const sql = `SELECT * FROM workouts WHERE name = 'Chest/Tri/Shoulders'`;

    db.all(sql, [], (err, rows: Workout[]) => {
      db.close();
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.status(200).json(rows);
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
