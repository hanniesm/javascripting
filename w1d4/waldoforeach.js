// The second argument/parameter is expected to be a function

function findWaldo(arr) {
  arr.forEach(function(element, i) {
    if (element === "Waldo") {
      console.log("Found Waldo at index", i);
    }
  });
}

// function actionWhenFound(index) {
//   console.log("Found Waldo at index");
// }

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);
