const input = prompt("Please enter a date in the format YYYY-MM-DD: ");
const date = Date();
// setting variables for given and current date

const age = Math.ceil(
  Math.abs((Date.parse(date) - Date.parse(input)) / 31557600000)
);

// calculating difference in age and converting from milliseconds to years

console.log(`Age between current date and given date is ${age} years.`);
