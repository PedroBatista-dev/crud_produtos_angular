import sqlite3 from "sqlite3";

const DATABASE_FILE = process.env.DATABASE_FILE;

export const openConnection = () => {
  let db = new sqlite3.Database(DATABASE_FILE);
  return db;
};

export const createTable = () => {
  let db = new sqlite3.Database(DATABASE_FILE);
  db.run(
    "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name text NOT NULL, qtItems int NOT NULL, vlUnit float NOT NULL)"
  );
  db.close();
};

export const dbQuery = (query: string, params?: any[]) => {
  let db = openConnection();
  return new Promise<any[]>((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).finally(() => db.close());
};
