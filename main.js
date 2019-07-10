// // const ayudanteSanta = {
// //     raza: 'Galgo', color: 'Café',
// //     ladrar: function () {
// //     console.log('Guau');
// //     },
// //     comer: function () {
// //         console.log('Yummy yummy')
// //     }
// // }
// class Dog {
//     constructor (breed,color,name) {
//         this.color = color;
//         this.breed = breed;
//         this.name = name;
//     };
//     bark () {
//         return 'Wuff'
//     };
//     eat (food) {
//         return `${this.name} is eating ${food}`
//     };
//     getColor () {
//         return this.color;
//     };
//     setColor (newColor) {
//         this.color = newColor;
//     };
//     setPaw (pawNumber) {
//         this.paw = pawNumber;
//     };
//     getPaw () {
//         return this.paw;
//     };
// };
// const ayudanteSanta = new Dog ('Galgo','Café','Ayudante de Santa');
// console.log(ayudanteSanta);
// console.log(ayudanteSanta.getColor('Naranja'));
// console.log(ayudanteSanta.setPaw(4));
// console.log(ayudanteSanta.getPaw());

//Ejercicio 1-8
class Penguin {
    constructor (character,origin,notes) {
        this.character = character;
        this.origin = origin;
        this.notes = notes;
    };
    setCharacter (characterName) {
        this.character = characterName;
    };
    getCharacter () {
        return this.character;
    };
    setOrigin (origin) {
        this.origin = origin;
    };
    getOrigin () {
        return this.origin;
    };
    setNotes (notes) {
        this.notes = notes;
    };
    getNotes () {
        return this.origin;
    };
    putCharacter (name) {
        this.character = name;
    };
};
const myPenguin = new Penguin ('King Dedede',`Kirby's Dream Land`,`One of Kirby's bosses and friends.`);
console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.getCharacter()}`);
myPenguin.puedeVolar = false;
console.log(myPenguin);
myPenguin.graznar = function () {
    console.log('Kaww kaww');
};
myPenguin.graznar();
myPenguin.saludar = function () {
    console.log(`¡Hola, soy un pingüino y mi nombre es ${this.getCharacter()}!`);
};
myPenguin.saludar();
myPenguin.putCharacter('Sir Pingu');
myPenguin.saludar();
myPenguin.volar = function (puedeVolar) {
if (this.puedeVolar) {
    console.log('¡Puedo volar!');
} else {
    console.log('No puedo volar :(');
}
};
myPenguin.volar();
myPenguin.puedeVolar = true;
myPenguin.volar();
//Ejercicio 9
let recetaMole = {
    titulo: 'Mole',
    porciones: 2,
    ingredientes: ['Canela','Comino','Cocoa']
};
console.log(recetaMole.titulo);
console.log(`Porciones: ${recetaMole.porciones}`);
console.log(`Ingredientes: `);
for (let i = 0; i < recetaMole.ingredientes.length; i++) {
    console.log(`${recetaMole.ingredientes[i]}`); 
};
//Ejercicio 10
let libros = [
    {
        titulo: 'Cien Años de Soledad',
        autor: 'Gabriel García Márquez',
        leido: true
    },
    {
        titulo: 'Do Androids Dream of Electric Sheep',
        autor: 'Phillip K. Dick',
        leido: false
    }
];
for (let i = 0; i < libros.length; i++) {
    let libro = libros [i];
    let libroInfo = `${libro.titulo} por ${libro.autor}`;
    if (libro.leido) {
    console.log(`Ya has leido ${libroInfo}`);
    } else {
        console.log(`No has leido ${libro.titulo} por ${libro.autor}`);
    }
};
//Ejercicio 11
class Persona {
    constructor (nombre,edad,sexo,peso,altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    };
    generarRFC () {
        this.rfc = this.nombre + this.edad + this.sexo;
    };
    calcularIMC () {
        return this.peso / (this.altura * this.altura);
    };
    esMayorDeEdad () {
        if (this.edad >= 18) {
            return 'Es mayor de edad';
        } else {
            return 'No es mayor de edad';
        };
    };
};
let raymundo = new Persona ('Raymundo',21,'Masculino',110,1.7);
console.log(raymundo.esMayorDeEdad());
console.log(raymundo.rfc);
raymundo.generarRFC();
console.log(raymundo.rfc);
//Ejercicio 12
class Cuenta {
    constructor (titular,cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    };
    ingresar (cantidad) {
        if (this.cantidad + cantidad > 900) {
            return 'Superando el límite de $900. Operación cancelada';
        } else {
            this.cantidad += cantidad;
            return `Operación exitosa! Tu saldo es de  $${this.cantidad}`;
        };
    };
    retirar (cantidad) {
        if (this.cantidad - cantidad < 10) {
            return 'No tienes fondos suficientes. El mínimo es de $10';
        } else {
            this.cantidad -= cantidad;
            return `Has retirado ${cantidad}. Tu nuevo saldo es de $${this.cantidad}`;
        };
    };
};
let cuenta = new Cuenta ('Raymundo Suantz',1000);
console.log(cuenta.cantidad);
console.log(cuenta.retirar(500));
console.log(cuenta.ingresar(200));