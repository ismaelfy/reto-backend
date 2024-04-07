const ServicioPersona = require("../../dominio/servicios/servicioPersona");

async function listarPersonas() {
    const servicioPersona = new ServicioPersona();
    try {
        const personas = await servicioPersona.listarPersonas();
        return personas;
    } catch (error) {
        console.error("Error al listar personas:", error);
        throw new Error("Error al listar personas");
    }
}

module.exports = {
    listarPersonas
};
