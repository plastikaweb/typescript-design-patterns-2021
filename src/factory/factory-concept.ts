interface Product {
  name: string;
}

abstract class ConcreteProduct implements Product {
  name!: string;
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'Concrete A';
  }
}
class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'Concrete B';
  }
}

class Creator {
  static create(someProp: string): Product | null {
    if (someProp === 'a') {
      return new ConcreteProductA();
    } else if (someProp === 'b') {
      return new ConcreteProductB();
    }
    return null;
  }
}

const product = Creator.create('b');
console.log(product);
