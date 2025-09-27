const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

async function connectDB() {
  try {
    await sql.connect(config);
    console.log("✅ Conectado a SQL Server en Railway");
  } catch (err) {
    console.error("❌ Error de conexión:", err);
  }
}

module.exports = { connectDB, sql };
