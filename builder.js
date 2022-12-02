// https://www.youtube.com/watch?v=M7Xi1yO_s8E&ab_channel=WebDevSimplified

class SomeCreationLogic {
  // creation logic can be very complex a repetitive, that is why you create it only once and the differences will be implemented in other representations
  static create(element) {
    // some loop processing ?
    element.construct(); // this will call construction logic and change object from outside
  }
}

class RepresentationList {
  constructor() {
    // basic creation
    this.list;
  }
  construct() {
    // add some more details
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = "What about Builder list";
    ul.appendChild(li);
    this.list = ul;
  }
  getRepresentation() {
    // get specific property
    return this.list;
  }
}

let element = new RepresentationList();
SomeCreationLogic.create(element);

const container = document.getElementById("builder");
container.appendChild(element.getRepresentation());

// contact card another builder approach
class ContactCard {
  constructor(options) {
    this.name = options.name;
    this.mobile = options.mobile;
    this.contactAdress = options.adress;
  }

  setContactAdress(street, town) {
    this.contactAdress = { street: street, town: town };
    return this; // always return model to possibly chain methods
  }

  setMobile(mobile) {
    this.mobile = mobile;
    return this;
  }

  setBirthday(date) {
    this.birthday = date;
    return this;
  }
}

let contactJakub = new ContactCard({ name: "Jakub Kares" });
contactJakub.setBirthday("06.10.1991").setMobile("+420721062372");
console.log(contactJakub);
