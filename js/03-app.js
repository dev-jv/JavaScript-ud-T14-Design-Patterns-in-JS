// ------------------------------------------- <> Singleton



let instancia = null; // let instancia;

class Persona {
    constructor(nombre, email) {
        if(!instancia) { // Si instancia está vacía
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}


const persona = new Persona('Juan', 'correo@correo.com');
const persona2 = new Persona('Karen', 'karen@karen.com');

console.log(persona);
console.log(persona2);


  