const toLowerCaseChar = char => char.toLowerCase();

const toLowerCaseArray = arr => arr.map(word => word.toLowerCase());

const inputArray = ["MA", "SA", "I", "SCH", "OOL"];

const resultArray = toLowerCaseArray(inputArray);

console.log(resultArray); // Output: ["ma", "sa", "i", "sch", "ool"]
