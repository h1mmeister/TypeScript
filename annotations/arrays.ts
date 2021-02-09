const carMakers = ["ford", "toyota"]; // here we have type inference

// but we need to add the type annoatation when we are declaring empty array
const fruits: string[] = ["apple", "banana"];

// to mention 2D array, we say string[][]

// help with map, filter, reduce and forEach
carMakers.map((car: string): string => {
  return car;
});

// flexible types
const importantDates = [new Date(), "2020-10-10"]; // for type annotation, we say (Date | string)[]
