// class House {
//   public tenants: string[] = [];

//   constructor(private type: string, private street: string ) {
//   };

//   public showType(this: House): void {
//     console.log(this.type);
//   };

//   public showAddress(this: House): void {
//     console.log(this.street);
//   };

//   public addTenant(value: string): void {
//     this.tenants.push(value);
//   };

//   public showTenants(this: House): void {
//     console.log(this.tenants);
//   };
// };

// class StoneHouse extends House { 
//   private chargeHouse: string;

//   constructor(value: string, general: string) {
//     super('stone', value);

//     this.chargeHouse = general
//   };

//   showCharge(): void {
//     console.log(this.chargeHouse);
//   };

// };

// const myHouse = new House('stone', 'Kulika street');
// house1.showAddress(); 

// house1.addTenant('Polly');
// house1.showTenants();
// house1.addTenant('Mango');
// house1.showTenants();

//==========================

// class UseClass {
//   private static count: number = 0;

//   constructor() {
//     UseClass.count += 1;
//   }

//   public showCount () {
//     console.log(UseClass.count);
//   } 
// }

// const newClass = new UseClass();
// newClass.showCount();

//==========================

// abstract class Plane {
//   protected pilotInCabin: boolean = false;

//   public sitInCabin(): void {
//     this.pilotInCabin = true;
//   };

//   public abstract startEngine(): string;
// };

// class Maize extends Plane {
//   public startEngine() {
//     return 'Ra-ta-ta';
//   }
// };

// class Boeing extends Plane {
//   public startEngine() {
//     return 'Vruuuum';
//   }
// };

// const maize = new Maize();
// const boeing = new Boeing();


//==========================

// interface IPerson {
//   readonly name: string,
//   age: number,
//   greeting(value: string): void,
// };

// let user: IPerson;

// user = {
//   name: 'Polly',
//   age: 33,
//   greeting() {
//     return `Hello ${this.name}`;
//   };
// }

//==========================
// type IPerson = {
//   name: string,
//   age: number
//   greeting: (value: string) => void,
// }

// let user: IPerson;

// user = {
//   name: 'Mango',
//   age: 11,
//   greeting() {
//     return `Welcome ${this.name}`;
//   },
// };

//==========================

// interface IPerson {
//   readonly name: string,
//   age: number,
//   greeting(value: string): void,
// };

// interface IPilot {
//   pylotMessage(): void;
// };

// class Pilot implements IPerson, IPilot {
//   constructor(
//     public readonly name: string,
//     public age: number) {
//       this.checkAge();
//     };
  
//   private checkAge() {
//     if (this.age < 28) {
//       throw new Error('Pilot to young');
//     }
//   }

//   public greeting(): void {
//     console.log(`Lets fly ${this.name}`);
//   };

//   public pylotMessage(): void {
//     console.log(`Lets fly away`);
//   };
// }

// abstract class Plane {
//   protected pilot?: IPilot;

//   public sitInCabin(value: IPilot): void {
//     this.pilot = value;
//   };

//   public abstract startEngine(): boolean;
// };

// class Boeing extends Plane {
//   public startEngine() {
//     if (!this.pilot) {
//       throw new Error('No pilot in cabin');
//     };
//     this.pilot.pylotMessage();
//     return true;
//   };
// };

// const pilot = new Pilot('Max', 32);
// const boeing = new Boeing();
// boeing.sitInCabin(pilot);
// boeing.startEngine();

//==========================

// type AddFunc = (item1: number, item2: number) => number;
// const foo: AddFunc = (a: number, b: number) => {
//   return a + b;
// };

// interface AddFunc {
//   (item1: number, item2: number): number;
// };
// const foo: AddFunc = (a: number, b: number) => {
//   return a + b;
// };

//========================== PRACTICE

// class Key {
//   signature: number;

//   constructor() {
//     this.signature = Math.random();
//   };

//   getSignature(): number {
//     return this.signature;
//   }
// };

// class Person {
//   constructor (private key: Key) {}

//   getKey(): Key {
//     return this.key;
//   }
// };

// abstract class House {
//   protected door: boolean = false;
//   private tenants: Person[] = [];

//   constructor(protected key: Key) {};

//   comeIn(person: Person):void {
//     if (!this.door) {
//       throw new Error('Door is closed');
//     }
//     this.tenants.push(person);
//     console.log('Person inside');
//   };

//   abstract openDoor(key: Key): boolean;
// };

// class MyHouse extends House {
//   openDoor(key: Key) {
//     if (key.getSignature() !== this.key.getSignature()) {
//       throw new Error('Key to another door');
//     }
//     return this.door = true;
//   }
// }

// const key = new Key();
// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

