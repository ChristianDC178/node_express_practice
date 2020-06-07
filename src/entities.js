class Person {

    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(this.name + " is walking");
    }

    static personFactory() {
        return new Person("");
    }

}

class Product {


    constructor(name) {
        this.name = name;
    }

}

module.exports.Person = Person;
module.exports.Product = Product;