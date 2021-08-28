import sqlite3 from "sqlite3";

const DATABASE_FILE = process.env.DATABASE_FILE;

export const openConnection = () => {
  let db = new sqlite3.Database(DATABASE_FILE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log(`Connected to the ${DATABASE_FILE} database.`);
  });
  return db;
};

export const closeConnection = (db: sqlite3.Database) => {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Close the database connection.");
  });
};

export const createTable = () => {
  let db = openConnection();
  db.run(
    "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name text NOT NULL, qtItems int NOT NULL, vlUnit float NOT NULL)"
  );
  closeConnection(db);
};

export const dbQuery = (query: string, params?: any[]) => {
  let db = openConnection();
  return new Promise<any[]>((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err.message);
      else resolve(rows);
    });
  }).finally(() => closeConnection(db));
};

export const createProduct = (query: string, params?: any[]) => {
  let db = openConnection();
  return new Promise<any>((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) reject(err.message);
      else resolve(this.lastID);
    });
  }).finally(() => closeConnection(db));
};

export const updateOrDeleteProduct = (query: string, params?: any[]) => {
  let db = openConnection();
  return new Promise<any>((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) reject(err.message);
      else resolve(this.changes);
    });
  }).finally(() => closeConnection(db));
};
