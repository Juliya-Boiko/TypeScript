// const input1 = document.getElementById('input1') ! as HTMLInputElement;
// const input2 = document.getElementById('input2') ! as HTMLInputElement;
// const addBtn = document.getElementById('addBtn') ! as HTMLButtonElement;
// function addValues (a: number, b: number) {
//   return a + b;
// };
// addBtn.addEventListener('click', function() {
//   console.log(addValues(+input1.value, +input2.value));
// })
var age = 50;
var userName = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) { return 100 + a; };
var anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person = ['Max', 21];
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
// Сделайте переменную, которая может принимать или строку или число.
var union;
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
var literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
