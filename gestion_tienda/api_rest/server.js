const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Rutas API REST
app.use("/api/clientes", require("./routes/clientes"));
app.use("/api/usuarios", require("./routes/usuarios"));

app.listen(3000, () => {
    console.log("Servidor API ejecutándose en http://localhost:3000");
});
