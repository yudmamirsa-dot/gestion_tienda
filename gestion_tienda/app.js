function mostrarSeccion(id) {
    document.querySelectorAll(".seccion").forEach(sec => sec.classList.add("oculto"));
    document.getElementById(id).classList.remove("oculto");
}

function mostrarModal(msg) {
    document.getElementById("modalMensaje").innerText = msg;
    document.getElementById("modal").classList.remove("oculto");
}

function cerrarModal() {
    document.getElementById("modal").classList.add("oculto");
}

/* -------------------------
   INTEGRACIÓN CON API REST
--------------------------- */

// REGISTRAR CLIENTE
async function guardarCliente(e) {
    e.preventDefault();

    const nombre = document.getElementById("clienteNombre").value;
    const telefono = document.getElementById("clienteTelefono").value;

    const cliente = { nombre, telefono };

    const res = await fetch("http://localhost:3000/api/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente)
    });

    if (res.ok) mostrarModal("Cliente guardado en la base de datos");
    else mostrarModal("Error guardando cliente");
}


// REGISTRAR USUARIO
async function guardarUsuario(e) {
    e.preventDefault();

    const nombre = document.getElementById("userName").value;
    const correo = document.getElementById("userEmail").value;

    const usuario = { nombre, correo };

    const res = await fetch("http://localhost:3000/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
    });

    if (res.ok) mostrarModal("Usuario guardado correctamente");
    else mostrarModal("Error guardando usuario");
}
