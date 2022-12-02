// https://en.wikipedia.org/wiki/Prototype_pattern

// https://en.wikipedia.org/wiki/Factory_method_pattern

// https://stackoverflow.com/questions/5739611/what-are-the-differences-between-abstract-factory-and-factory-design-patterns/5740020#5740020

class Prototype {
  constructor() {
    // I suppose that other implementation will have property el in the instance
  }

  // you can override this method if neccessary
  static clone() {
    return new this().el;
  }
}

class Button extends Prototype {
  constructor() {
    super();
    console.log("Button");
    this.el = this.createButton();
  }

  createButton() {
    const button = document.createElement("button");
    button.innerText = "Button";
    return button;
  }
}

class List extends Prototype {
  constructor() {
    super();
    console.log("List");
    this.el = this.createList();
  }
  // you can override this method if neccessary
  createList() {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = "List";
    ul.appendChild(li);
    return ul;
  }
}

// factory pattern
class ExtendedList extends List {
  // this implementation is a part of factory pattern
  // there is a method that can be overidden
  // new class extends previous one and ovverides methods to create an element
  createList() {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = "This element was created with extended List class";
    ul.appendChild(li);
    return ul;
  }
}

// kind of abstract factory pattern
// i am sending a factory to other object
class ElementCreator {
  static create(elementClass, containerId) {
    let container = document.getElementById(containerId);
    container.appendChild(elementClass.clone());
  }
}

// prototype is specified in parameters
ElementCreator.create(ExtendedList, "container");
