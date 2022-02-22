interface Employee {
  id: number;
}

let e1: Employee;

let e2 = { id: 123, name: "John" };

// e2 = e1; // error

e1 = e1;
