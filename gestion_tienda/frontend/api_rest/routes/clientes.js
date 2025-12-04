const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los clientes
router.get('/', (req, res) => {
    db.query('SELECT * FROM clientes', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Crear cliente
router.post('/', (req, res) => {
    const { nombre, correo, telefono } = req.body;
    db.query(
        'INSERT INTO clientes (nombre, correo, telefono) VALUES (?, ?, ?)',
        [nombre, correo, telefono],
        (err) => {
            if (err) throw err;
            res.json({ message: "Cliente registrado" });
        }
    );
});

module.exports = router;
