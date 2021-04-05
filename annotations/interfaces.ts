interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
// };

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name is ${vehicle.name}`);
};

printVehicle(oldCivic); // the only problem is the length of type annotation that we are doing
