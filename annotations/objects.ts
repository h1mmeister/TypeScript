const profile = {
  name: "Himanshu",
  age: 24,
  coords: {
    lat: 10,
    long: 25,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
