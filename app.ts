const input1 = document.getElementById('input1') ! as HTMLInputElement;
const input2 = document.getElementById('input2') ! as HTMLInputElement;
const addBtn = document.getElementById('addBtn') ! as HTMLButtonElement;

function addValues (a: number, b: number) {
  return a + b;
};

addBtn.addEventListener('click', function() {
  console.log(addValues(+input1.value, +input2.value));
})