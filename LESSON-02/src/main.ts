// Basic types

/* 

Here types are categorized into two main types:

1) Primitive types
2) Reference types


Primitive types: they are immutable means that there value cannot be changed after it is created.

primitive types are as follows:

    1) number
    2) string
    3) boolean
    4) undefined
    5) null
    6) symbol
    7) bigint

Here types are denoted by using type annotations example below:

let a: number = 12 // this tells typescript that a is a number and it holds only number values. if we assing a string value typescript compiler will give an error

*/

// Examples

// 1) Number
let a: number = 12;
let PI: number = 3.14;

console.log(a, PI);

// 2) String
let userName: string = "Hitler";
console.log(userName);

// 3) Boolean
let isLoggedIn: boolean = false;
console.log(typeof isLoggedIn, isLoggedIn);

// 4) Undefined
let notDef: undefined = undefined;
console.log(notDef);

// 5) Null
let isNull: null = null;
console.log(isNull);

// 6) Symbol
let sym: symbol = Symbol();
console.log(sym);

// 7) BigInt
let big: bigint = 9007199254740991n;
console.log(big);

/* 

Reference types: they are mutable means that there value can be changed after it is created by using their reference

reference types are as follows:

    1) object :- object is a reference type
    2) array  :- array represents a collection of values of same type
    3) function :- represents block of code that performs a particular task
    4) class :- represents a blueprint for creating objects
    5) tuple : - represents an array with a fixed number of elements
    6) enum :- represents a set of named constants
*/

// Examples

// 1) Object

let Data: { user: string; age: number } = {
  user: "Charukirtic",
  age: 21,
};

console.log(Data.user, Data.age);

// 2) Array

let exArray: number[] = [1, 2, 3, 4, 5];
console.log(exArray);

// exArray.push('g') // this will give an error by saying 'g' is not of type number

// 3) Function

function sayHello(name: string) {
  console.log("Hello " + name);
}

sayHello("Charukirti");

// 4) Class

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let p: Person = new Person("Charukirti", 21);
console.log(p.name, p.age);

// 5) Tuple

let exTuple: [string, number] = ["Charukirti", 21];
console.log(exTuple[0], exTuple[1]);

// 6) Enum

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);
