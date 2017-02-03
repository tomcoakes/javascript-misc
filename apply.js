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

// use apply when you want to assign a 'this' context to a function AND immediately invoke the function
// because it will call the function straight away, you can also pass arguments to the apply method which are then
// passed to the function on which you're calling the apply method.


const gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null,
  players: [
    {name: "Tom", playerId: 987, age: 27},
    {name: "Priscilla", playerId: 1083, age: 28}
  ]
};

const appController = {
  scores: [900, 845, 809, 950],
  avgScore: null,
  avg: function() {
    const sumOfScores = this.scores.reduce(function(prev, curr, index, array) {
      return prev + curr;
    });

    return this.avgScore = sumOfScores / this.scores.length;
  }
}

console.log(appController.avg());

gameController.avgScore = appController.avg();
console.log("gameController.avgScore is: ", gameController.avgScore);
// because we've just borrowed the avg() function directly from the appController, it's still go the appController's context

console.log(gameController.avgScore = appController.avg.apply(gameController));
// by passing the gameController context to the avg() function using apply, 'this' is now the gameController's own context
