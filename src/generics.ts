//============================================================================

// let arr: Array<string | number> = [];

//============================================================================

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve('Done!');
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

//============================================================================

// function merge<Item1, Item2>(objA: Item1, objB: Item2) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({name: 'Alisa'}, {age: 28});

// merged.name;

//============================================================================

// type Person = {
//   name: string;
// }

// type AdditionFields = {
//   age: number;
// }

// function merge<Item1, Item2>(objA: Item1, objB: Item2) {
//   return Object.assign(objA, objB);
// }

// const merged = merge<Person, AdditionFields>({name: 'Alisa'}, {age: 28});

//============================================================================

// function merge<Item1 extends object, Item2 extends object>(objA: Item1, objB: Item2) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({name: 'Alisa'}, { age: 20 });

// merged.name;

//============================================================================

// function extractValue<Value extends object, Name extends keyof Value> (obj:Value, key:Name) {
//   return obj[key];
// }

// extractValue({name: 'Sergei'}, 'name');

//============================================================================

// class StoreClass<Item> {
//   private data: Item[] = [];

//   addItem (item:Item):void {
//     this.data.push(item);
//   }

//   getItems (): Item[] {
//     return this.data;
//   }
// }

// const store = new StoreClass<string>();

// store.addItem('test');

//============================================================================

interface IPerson {
  name: string;
  age: number;
}

function createPerson (name: string): IPerson {
  const person: Partial<IPerson> = {};

  person.name = name;
  person.age = 21;

  return person as IPerson;
}

//============================================================================

type Environment = {
  temperature: number;
}

const arr: Readonly<Environment> = {
  temperature: 27,
};

//============================================================================

interface Page {
  title: string;
  annotation: string;
  numberPage: number;
}

const pageAnnotation: Pick<Page, 'annotation' | 'numberPage'> = {
  annotation: 'Small page',
  numberPage: 1,
};

//============================================================================
//============================================================================
//============================================================================