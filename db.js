const mysql = require('mysql2/promise');
require('dotenv').config();

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

let connection;

async function connectDB() {
  try {
    connection = await mysql.createConnection(config);
    console.log("✅ Conectado a MySQL en Railway");
  } catch (err) {
    console.error("❌ Error en la conexión:", err);
  }
}

module.exports = { connectDB, connection };
