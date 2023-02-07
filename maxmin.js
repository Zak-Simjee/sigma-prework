let array = [];
// define empty array.

function pushToArray() {
  let input = prompt(
    'Please input a number to add to the array or type "done": '
  );
  if (parseInt(input)) {
    array.push(parseInt(input));
    console.log(`Current Array: ${array}\n`);
  } else if (!input) {
    console.log("Please enter a valid number");
  } else if (input === "done" || input === "Done") {
    return true;
  }
}

// function designed to add user inputted numbers into an empty array and returns true when "done" is inputted.

while (!pushToArray());
// while loop designed to loop while pushToArray() is falsy. Will only stop when "done" is inputted as that returns true which is truthy.

let newArray = [];
// define new empty array

for (let i = 0; i < array.length; i++) {
  if (
    array.every((element) => element <= array[i]) ||
    array.every((element) => element >= array[i])
  ) {
    newArray.push(array[i]);
  }
}
// for loop designed to loop over user inputted array and check if an element is greater or lower than all other elements and then adding it to newArray if true.

console.log(newArray);
