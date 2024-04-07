class Persona {
    constructor(nombre, altura, peso, colorCabello, colorPiel, colorOjos, anioNacimiento, genero) {
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
        this.colorCabello = colorCabello;
        this.colorPiel = colorPiel;
        this.colorOjos = colorOjos;
        this.anioNacimiento = anioNacimiento;
        this.genero = genero;
    }

    static fromJson(json) {
        const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = json;
        return new Persona(name, height, mass, hair_color, skin_color, eye_color, birth_year, gender);
    }

    toJson() {
        return {
            nombre: this.nombre,
            altura: this.altura,
            peso: this.peso,
            colorCabello: this.colorCabello,
            colorPiel: this.colorPiel,
            colorOjos: this.colorOjos,
            anioNacimiento: this.anioNacimiento,
            genero: this.genero
        };
    }
}

module.exports = Persona;
