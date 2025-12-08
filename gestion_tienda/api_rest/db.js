const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: "localhost",
    port: 3307,       // ← ESTE ES EL PROBLEMA PRINCIPAL
    user: "apiuser",
    password: "",
    database: "gestion_tienda"
});

conexion.connect((err) => {
    if (err) {
        console.error("Error conectando a MySQL:", err);
        return;
    }
    console.log("Conexión a MySQL exitosa");
});

module.exports = conexion;
