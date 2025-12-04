const express = require('express');
const cors = require('cors');

const usuariosRoutes = require('./routes/usuarios');
const clientesRoutes = require('./routes/clientes');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/clientes', clientesRoutes);

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor API ejecutándose en http://localhost:${PORT}`);
});
