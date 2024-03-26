const Database = require('better-sqlite3');
const db = new Database('./data.sqlite');
db.prepare('DELETE FROM bs3;').run();
db.prepare('DELETE FROM SIGMA;').run();