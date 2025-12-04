const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los usuarios
router.get('/', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Crear usuario
router.post('/', (req, res) => {
    const { username, password, fullname, role } = req.body;
    db.query(
        'INSERT INTO usuarios (username, password, fullname, role) VALUES (?, ?, ?, ?)',
        [username, password, fullname, role],
        (err) => {
            if (err) throw err;
            res.json({ message: "Usuario creado" });
        }
    );
});

module.exports = router;
