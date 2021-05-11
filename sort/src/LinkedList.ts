import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  // To add the node at the end of the LinkedList
  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  // To get the length of LinkedList
  get length(): number {
    if (!this.head) {
      return 0;
    }

    let lenght = 1;
    let node = this.head;

    while (node.next) {
      lenght++;
      node = node.next;
    }
    return lenght;
  }

  // To find out the node at a particular index
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of Bounds");
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of Bounds");
  }

  // Comparing logic for LinkedList
  compare(leftIdx: number, rightIdx: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIdx).data > this.at(rightIdx).data;
  }

  // Swapping logic for LinkedList
  swap(leftIdx: number, rightIdx: number): void {
    const leftNode = this.at(leftIdx);
    const rigthNode = this.at(rightIdx);

    const temp = leftNode.data;
    leftNode.data = rigthNode.data;
    rigthNode.data = temp;
  }

  // Print the values of LinkedList
  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
