import { DB } from 'https://deno.land/x/sqlite@v2.0.0/mod.ts'

// Open a database
const db = new DB('test.db')
const createTableQuery = `
CREATE TABLE IF NOT EXISTS people (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT
)`

db.query(createTableQuery)

const names = ['Peter Parker', 'Clark Kent', 'Bruce Wayne']

// Run a simple query
for (const name of names)
  db.query('INSERT INTO people (name) VALUES (?)', [name])

// Print just name from data in table
for (const [name] of db.query('SELECT name FROM people')) {
  console.log(name)
}
// Print all data in table
for (const row of db.query('SELECT * FROM people')) {
  console.log(row)
}

// Close connection
db.close()
