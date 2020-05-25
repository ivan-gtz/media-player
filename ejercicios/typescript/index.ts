// //bolean
// let muted: boolean = true;
// muted = false;

// //Numeros
// let numerador: number = 42;
// let denominador: number= 5;
// let resultado = numerador / denominador;

// //String
// let nombre: string = 'Ivan'
// let saludo = `Me llamo ${nombre}`;

// //Arreglos

// let people: string[] = [];
// people = ["Helen", "Raul", "Fernando"];
// people.push("999")

// let peopleAndNumbers: Array<string | number> = [];

// //  Enum

// enum Color {
//   Rojo = 'Rojo',

//   Verde = 'Verde',

//   Azul = 'Azul',
// }
// let colorFavorito: Color = Color.Rojo;
// console.log(`Mi color favorito es ${colorFavorito}`)

// //any

// let comodin: any = "joker";
// comodin = {type: "Wildcard"};

// //Object

// let someObject: object = {type: "Wildcard"};

// //funciones

// function add(a: number, b: number): number {
//   return a + b;
// }

// const sum = add(4, 8);

// function createAdder (a: number): (number) => number{
//   return function(b: number) {
//     return b + a;
//   }
// }

// const addFour = createAdder(4);
// const fourPlus6 = addFour(6);


// function fullName(firstName: string, lastName: string='Guti'): string{
//   return `${firstName} ${lastName}`;
// }

// const ivan = fullName("Ivan");

// console.log(ivan);

enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
}

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);

console.log(areaRect)

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());




























