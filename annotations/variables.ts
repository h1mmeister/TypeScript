let velocity = 10;
let firstName: string = "Himanshu";
let hasDriverLicense: boolean = true;
let nothing: null = null;

// built in objects
let date: Date = new Date();

// Arrays
let colors: string[] = ["red", "blue"];
let myNumbers: number[] = [1, 2, 3];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
