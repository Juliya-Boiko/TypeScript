// const input1 = document.getElementById('input1') ! as HTMLInputElement;
// const input2 = document.getElementById('input2') ! as HTMLInputElement;
// const addBtn = document.getElementById('addBtn') ! as HTMLButtonElement;

// function addValues (a: number, b: number) {
//   return a + b;
// };

// addBtn.addEventListener('click', function() {
//   console.log(addValues(+input1.value, +input2.value));
// })

let age: number = 50;
let userName: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: Function = (a: number) => { return 100 + a };

let anything: any = -20;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
  str = some;
}

let person: [string, number] = ['Max', 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
enum Status { LOADING, READY }

// Сделайте переменную, которая может принимать или строку или число.
let union: string | number;

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let literal: 'enable' | 'disable';

function showMessage(message): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type PageData = {
  title: string,
  likes: number,
  accounts: string[],
  status: string,
  details?: {
    createAt: string,
    updateAt: string
  }
}

const page1: PageData = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: PageData = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}