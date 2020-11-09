// -------------------------------- <> Mixin Pattern

// class Persona {
//     constructor(nombre, email) {
//         this.nombre = nombre;
//         this.email = email;
//     }
// }

// const funcionesPersona = {
//     mostrarInformacion() {
//         console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email}`);
//     }
// }


// // Añadir funcionesPersona a la clase...

// Object.assign(Persona.prototype, funcionesPersona);

// const cliente = new Persona('Juan', 'correo@correo.com');

// console.log(cliente);
// cliente.mostrarInformacion();


//------------------------

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email}`);
    }, 

    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona('Juan', 'correo@correo.com');
console.log(cliente);
cliente.mostrarInformacion();

const cliente2 = new Cliente('Cliente', 'cliente@cliente.com');
console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();



// Es como composition, pero con clases... 