export class NumbersCollection {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  // get keyword is used to call length as an attribute not as a function
  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx] > this.data[rightIdx];
  }

  swap(leftIdx: number, rightIdx: number): void {
    const temp = this.data[leftIdx];
    this.data[leftIdx] = this.data[rightIdx];
    this.data[rightIdx] = temp;
  }
}
