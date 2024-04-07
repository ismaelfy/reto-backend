class Usuario {
    constructor({ id, nombre, apellidos, correo, telefono }) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.telefono = telefono;
    }
}

module.exports = Usuario;
