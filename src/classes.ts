// class Zhiguli_8 {
//   private needRepair = false;
//   private maxEngineLoad = 3;

//   private checkEngine () {
//     if (this.needRepair) {
//       console.log('Engine not work');
//     }

//     const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
//     if (this.maxEngineLoad === engineLoad) {
//       this.needRepair = true;
//       console.log('Engine broken again');
//     }
//   }

//   public startEngine () {
//     this.checkEngine();
//     console.log('Ta-ta-ta-ta');
//   }

//   public repairEngine () {
//     this.needRepair = false;
//     console.log('Engine rebuilt');
//   }
// }

// const myZhiguli = new Zhiguli_8();

// =========================================================================

// class House {
//   street: string;

//   constructor(value: string) {
//     this.street = value;
//   }

//   showAddress() {
//     console.log(this.street);
//   }
// };

// const house = new House('Medova');
// house.showAddress();

// house.street = 'Kulika'
// house.showAddress();

// =========================================================================
// --- public - это как все свойства и методы в js можно вызывать где угодно
// --- private - нельзя вызвать извне экземпляра не наследуется
// --- protected - нельзя вызвать извне экземпляра но наследуется

// class C {
//   protected someProperty = 'str';
// }

// class D extends C {
//   showProperty () {
//     console.log(this.someProperty);
//   }
// }

// const a = new A();
// const b = new B();
// const c = new C();
// const d = new D();

// d.showProperty();

// =========================================================================

// class House {
//   private type: string;
//   private street: string;
//   private tenants: string[] = [];

//   constructor(type: string, value: string) {
//     this.type = type;
//     this.street = value;
//   }

//   public showType(this: House) {
//     console.log(this.type);
//   }

//   public showAddress (this: House) {
//     console.log(this.street);
//   }

//   public addTenant (value: string) {
//     this.tenants.push(value);
//   }

//   public showTenants () {
//     console.log(this.tenants);
//   }
// }

// const house = new House('stone', 'Medova');
// house.addTenant('polly')
// house.addTenant('mango')

// console.log(house)

// =========================================================================

// class House {
//   private tenants:string[] = [];

//   constructor (private readonly type: string, private street: string) {}

//   public showAddress (this: House) {
//     console.log(this.street);
//   }

//   public showType (this: House) {
//     console.log(this.type);
//   }

//   public addTenant (tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants () {
//     console.log(this.tenants);
//   }
// }

// class StoneHouse extends House  {
//   private chargeOfTheHouse: string;

//   constructor (street: string, generalTenant: string) {
//     super('stone', street); // Вызов родительского конструктора
//     // Добавляем владельца квартиры
//     this.chargeOfTheHouse = generalTenant;
//     this.addTenant(generalTenant);
//   }

//   public showTenants () {
//     console.log('General: ' + this.chargeOfTheHouse);
//     super.showTenants();
//   }
// }

// const stoneHouse = new StoneHouse('Stone-world', 'Max');

// stoneHouse.addTenant('Anton');
// stoneHouse.addTenant('Nikita');

// stoneHouse.showTenants();
// stoneHouse.showType();
// stoneHouse.showAddress();

// =========================================================================

// type PersonInformation = {
//   firstName?: string;
//   lastName?:  string;
// }

// class Person {
//   private personInfo: PersonInformation = {};

//   set firstName (value: string) {
//     console.log('firstName added');
//     this.personInfo.firstName = value;
//   }

//   set lastName (value: string) {
//     console.log('lastName added');
//     this.personInfo.lastName = value;
//   }

//   get getInfo () {
//     return this.personInfo;
//   }
// }

// const newPerson = new Person();
// console.log(newPerson);
// newPerson.firstName = 'polly'
// newPerson.lastName = 'polieva';
// console.log(newPerson.getInfo);

// =========================================================================

// class UseStatic {
//   private static count = 0;

//   constructor () {
//     UseStatic.count += 1;
//   }

//   public static itStaticMethod () {
//     console.log('Run static method');
//   }

//   public showCount () {
//     console.log(UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.itStaticMethod();

// =========================================================================
// сам по себе он никогда не будет создавать экземпляры, 
//только его дочерние классы
// abstract class Plane {
//   protected pilotInCabin: boolean = false;

//   public sitInPlane () {
//     this.pilotInCabin = true;
//   }

//   public abstract startEngine(): boolean;
// }

// class Maize extends Plane {
//   public startEngine () {
//     return true;
//   }
// }

// class Boeing extends Plane {
//   public startEngine () {
//     return true;
//   }
// }

// =========================================================================

// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//   name: 'Anthony',
//   age: 21,

//   greet(phrase) {
//     console.log(phrase + ' ' + this.name );
//   }
// };

// user.greet('Всем привет я');

//====

// type IPerson = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//   name: 'Anthony',
//   age: 21,

//   greet(phrase) {
//     console.log(phrase + ' ' + this.name );
//   },
// };

// =========================================================================
// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor (public name: string, public age: number) {
//     if (this.age < 28) {
//       throw new Error('Pilot to young');
//     }
//   }

//   greet(phrase: string): void {
//     console.log(phrase + ' ' + this.name );
//   };

//   flyMessage(): void {
//     console.log('Самолет набрал высоту, всем приятного полета!');
//   };
// }

// const pilot = new Pilot('Anthony', 32);

// pilot.greet('Вас приветствует капитан корабля');
// pilot.flyMessage();

// =========================================================================

// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor (public name: string, public age: number) {
//     if (this.age < 28) {
//       throw new Error('Pilot too young');
//     }
//   }

//   greet(phrase: string): void {
//     console.log(phrase + ' ' + this.name );
//   };

//   flyMessage(): void {
//     console.log('Самолет набрал высоту, всем приятного полета!');
//   };
// }

// abstract class Plane {
//   protected pilot?:IPilot;

//   public sitInPlane (pilot: IPilot):void {
//     this.pilot = pilot;
//   }

//   public abstract startEngine(): boolean;
// }

// class Boeing extends Plane {
//   public startEngine (): boolean {
//     if (!this.pilot) {
//       throw new Error('No pilot in cabin');
//     }
//     // Разогреваем реактивные турбины
//     console.log('Запуск турбин');

//     this.pilot.flyMessage();
//     return true;
//   }
// }

// =========================================================================

// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot extends IPerson {
//   flyMessage(): void;
// }

// =========================================================================
// type AddFunc = (n1: number, n2: number) => number;

// let add: AddFunc;

// add = (n1:number, n2: number) => {
//   return n1 + n2;
// }

// =========================================================================
// interface AddFunc {
//   (n1: number, n2: number): number;
// }

// let add: AddFunc;

// add = (n1:number, n2: number) => {
//   return n1 + n2;
// }

// =========================================================================
// class Key {
//   protected signature: number;

//   constructor() {
//     this.signature = Math.random();
//   }

//   getSignature(): number {
//     return this.signature;
//   }
// }
// const key = new Key();
// //console.log();

// class Person {
//   protected key: Key;

//   constructor(value: Key) {
//     this.key = value;
//   }

//   getKey(): Key {
//     return this.key;
//   }
// }
// const newPerson = new Person(key);
// //console.log(newPerson.getKey());

// abstract class House {
//   protected door: boolean = false;
//   protected key: Key;
//   protected tenants: Person[] = [];

//   constructor(key: Key) {
//     this.key = key;
//   }
  
//   comeIn(person: Person) {
//     if (this.door) {
//       this.tenants.push(person);
//     }
//   }

//   public abstract openDoor(value: Key): void; 
// }

// class MyHouse extends House {
//   public openDoor(value: Key) {
//     if (value.getSignature() === this.key.getSignature()) {
//       this.door = true;
//     }
//   }
// }