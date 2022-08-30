var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var addBtn = document.getElementById('addBtn');
function addValues(a, b) {
    return a + b;
}
;
addBtn.addEventListener('click', function () {
    console.log(addValues(+input1.value, +input2.value));
});
