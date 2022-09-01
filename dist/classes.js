"use strict";
const randomNumber = () => {
    const random = Math.random();
    return random;
};
class Key {
    constructor() {
        this.signature = randomNumber();
    }
    getSignature() {
        return this.signature;
    }
}
;
const key = new Key();
const customKey = key.getSignature();
class Person {
    constructor(value) {
        this.key = value;
    }
    getKey() {
        return this.key;
    }
}
;
const man = new Person(customKey);
const access = man.getKey();
class House {
    constructor(value) {
        this.door = false;
        this.tenants = [];
        this.key = value;
    }
    ;
    comeIn(person) {
        this.tenants.push(person);
    }
    ;
}
;
class MyHouse extends House {
    openDoor(value) {
        if (value === this.key) {
            this.door === true;
        }
    }
}
//# sourceMappingURL=classes.js.map