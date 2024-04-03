import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';

interface Workout {
  name: string;
  date: string;
  duration: number;
}

interface ErrorResponse {
  error: string;
}

interface SuccessResponse {
  id: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method === 'POST') {
    const db = new sqlite3.Database('./workout.db');
    const { name, date, duration } = req.body as Workout;

    const sql = `INSERT INTO workouts (name, date, duration) VALUES (?, ?, ?)`;

    db.run(sql, [name, date, duration], function (this: sqlite3.RunResult, err: Error | null) {
      db.close();
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.status(200).json({ id: this.lastID });
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
