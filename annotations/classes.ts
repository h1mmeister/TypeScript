class Vehicle {
  //   color: string;

  //   constructor(color: string) {
  //     this.color = color;
  //   }
  constructor(public color: string) {} // equivalent to the above code

  protected honk(): void {
    console.log("vroom");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("brrr");
  }

  public startDrive(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("red");

const car = new Car(4, "black");
car.startDrive();
