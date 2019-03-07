// The second argument/parameter is expected to be a function

function findWaldo(arr, fct) {
  arr.forEach(function(element, i) {
    if (element === "Waldo") {
      fct(i)
      // console.log("Found Waldo at index", i);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
