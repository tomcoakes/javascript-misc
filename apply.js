const person = {
  firstName: "Alex",
  lastName: "Parkinson",
  fullName: function() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

person.fullName()
// => Alex Parkinson


const me = {
  firstName: "Tom",
  lastName: "Coakes"
}

person.fullName.apply(me);
// => Tom Coakes
