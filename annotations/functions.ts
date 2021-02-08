const add = (a: number, b: number): number => {
  // we are adding type annotations for the parameters
  return a + b; // typescript will only work for type checking, will not check anything about what the function is doing
};

// we have to always use annotation with parameters but can skip the return value but will do it anyways

function subtract(a: number, b: number): number {
  // same when we use function keyword
  return a - b;
}

const logger = (message: string): void => {
  // void to signify that we will not return anything
  console.log(message);
};

const throwError = (message: string): never => {
  // never means we will never reach the end of the function
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  // so, we need to make sure that when we are destructuring, we need to destructure first and then annotate the attributes
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
};
