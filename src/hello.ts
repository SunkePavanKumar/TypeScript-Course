let id: number = 1234;

let companyName: string = "abc";

let isPublished: boolean = true;

let x: any = false;

let ids: number[] = [1, 2, 3];

let ids2: Array<number> = [1, 2, 3, 4];

let arr: any = [1, "pavan", false];

let person: [number, string, boolean] = [1, "Brad", true]; // tuple

// tuple array

let per: [number, string][] = [[1, "pavan"]];

// Another way for above

// enum

enum Direction {
  Up,
  down,
  Left,
  Right,
}

console.log(
  id,
  companyName,
  isPublished,
  x,
  ids,
  ids2,
  arr,
  person,
  per,
  Direction
);
