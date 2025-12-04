const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestion_tienda'
});

db.connect((err) => {
    if (err) {
        console.log("Error conectando a MySQL:", err);
        return;
    }
    console.log("Conexión a MySQL exitosa");
});

module.exports = db;
