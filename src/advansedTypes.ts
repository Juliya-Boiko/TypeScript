// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type AdminEmployee = Admin & Employee;

// const e1: AdminEmployee = {
//   name: 'Anton',
//   privileges: ['drop-all'],
//   startDate: new Date()
// };

//============================================================================

// interface Admin  {
//   name: string;
//   privileges: string[];
// };

// interface Employee  {
//   name: string;
//   startDate: Date;
// };

// interface AdminEmployee extends Admin, Employee {};

// const e1: AdminEmployee = {
//   name: 'Anton',
//   privileges: ['drop-all'],
//   startDate: new Date()
// };

//============================================================================

// type ComplexType = string | number;

// function combine (a: ComplexType, b: ComplexType) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

//============================================================================

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type UnknownObject = Employee | Admin;

// function showFields (e1: UnknownObject) {
//   console.log(e1.name);
//   if ('privileges' in e1) {
//     console.log(e1.privileges);
//   }
//   if ('startDate' in e1) {
//     console.log(e1.startDate);
//   }
// }

//============================================================================

// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo ...' + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

//============================================================================

// const input = document.getElementById('inputEmail') as HTMLInputElement;

// input.value = 'test@test.ts';

//============================================================================

// const input = document.getElementById('inputEmail');

// if (input) {
//   (input as HTMLInputElement).value = 'test@test.ts';
// }

//============================================================================

// interface Person {
//   name: string;
//   [x: string]: string;
// }

// const user: Person = {
//   name: 'Alex',
//   gender: 'MAN',
//   country: 'Ukraine',
// }

//============================================================================

// interface Person {
//   name: string;
//   additionInfo?: {
//     someInfo: string;
//   }
// }

// const user: Person = {
//   name: 'Alex'
// }

// console.log(user?.additionInfo?.someInfo);

//============================================================================
//вернуть DEFAULT только в том случае если там реально null или undefined.
// const userInput = '';

// const store = userInput ?? 'DEFAULT';

// console.log(store);

//============================================================================

// type AdminType = {
//   type: 'admin';
//   name: string;
// }

// type UserType = {
//   type: 'user';
//   name: string;
// }

// function checkUser (name: string, type: 'admin'): AdminType;
// function checkUser (name: string, type: 'user'): UserType;
// function checkUser (name: string, type: 'admin' | 'user') {
//   if (type === 'admin') {
//     return {
//       name,
//       type: 'admin'
//     }
//   } else {
//     return {
//       name,
//       type: 'user'
//     }
//   }
// }

// const user = checkUser('Nikita', 'user');
// const admin = checkUser('Tonya', 'admin');

//============================================================================


//============================================================================
//============================================================================
