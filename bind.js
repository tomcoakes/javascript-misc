const $ = require('jquery');

const user = {
  data: [
    {name: "Tiger Woods", age: 37},
    {name: "Peter Mickelson", age: 43}
  ],
  clickHandler: function(event) {
    var randomNum = ((Math.random() * 2|0) + 1) - 1;
    console.log(`${this.data[randomNum].name} ${this.data[randomNum].age}`)
  }
}

user.clickHandler();
// note: this wouldn't work if I used an arrow function

$("button").click(user.clickHandler);
// this wouldn't work because when using this in a callback function,
// the context is the function calling the callback (so no this.data)

$("button").click(user.clickHandler.bind(user));
// this binds the user context to the clickHandler callback function
// QUESTION: wouldn't .apply() also have worked?

// bind returns a function which will act like the original function but with 'this' predefined.
// It is usually used when you want to pass a function to an event handler or
// some other async callback -- like I just did on like 21!

// call and apply (very similar) will call a function immediately letting you
// specify both the value of 'this' and any arguments the function will receive

// so on line 21, it returns a version of user.clickHandler() with this predefined as
// the user context, which then gets passed into the click function as a normal callback