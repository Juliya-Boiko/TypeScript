"use strict";
const promise = new Promise((resolve) => {
    setInterval(() => {
        resolve('Done!');
    }, 1000);
});
promise.then((data) => {
    console.log(data);
});
function createPerson(name) {
    const person = {};
    person.name = name;
    person.age = 21;
    return person;
}
const arr = {
    temperature: 27,
};
const pageAnnotation = {
    annotation: 'Small page',
    numberPage: 1,
};
//# sourceMappingURL=generics.js.map