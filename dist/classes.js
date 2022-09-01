"use strict";
class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
    }
    ;
    showType() {
        console.log(this.type);
    }
    ;
    showAddress() {
        console.log(this.street);
    }
    ;
    addTenant(value) {
        this.tenants.push(value);
    }
    ;
    showTenants() {
        console.log(this.tenants);
    }
    ;
}
;
class StoneHouse extends House {
    constructor(value, general) {
        super('stone', value);
        this.chargeHouse = general;
    }
    ;
    showCharge() {
        console.log(this.chargeHouse);
    }
    ;
}
;
const myHouse = new House('stone', 'Kulika street');
;
const foo = (a, b) => {
    return a + b;
};
//# sourceMappingURL=classes.js.map