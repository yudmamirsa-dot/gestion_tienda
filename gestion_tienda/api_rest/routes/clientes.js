const express = require("express");
const router = express.Router();
const conexion = require("../db");

// GET - Obtener todos los clientes
router.get("/", (req, res) => {
    conexion.query("SELECT * FROM clientes", (err, resultados) => {
        if (err) return res.status(500).json({ error: err });
        res.json(resultados);
    });
});

// POST - Registrar cliente
router.post("/", (req, res) => {
    const { nombre, correo, telefono } = req.body;

    conexion.query(
        "INSERT INTO clientes (nombre, correo, telefono) VALUES (?, ?, ?)",
        [nombre, correo, telefono],
        (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ mensaje: "Cliente guardado correctamente" });
        }
    );
});

// PUT - Actualizar cliente
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, correo, telefono } = req.body;

    conexion.query(
        "UPDATE clientes SET nombre=?, correo=?, telefono=? WHERE id=?",
        [nombre, correo, telefono, id],
        (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ mensaje: "Cliente actualizado correctamente" });
        }
    );
});

// DELETE - Eliminar cliente
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    conexion.query(
        "DELETE FROM clientes WHERE id=?",
        [id],
        (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ mensaje: "Cliente eliminado correctamente" });
        }
    );
});

module.exports = router;
