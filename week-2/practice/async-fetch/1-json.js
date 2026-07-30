// Convert Object -> JSON
//JSON.stringify

const user = {
  name: "Areeba",
  age: 24,
  internship: "DevGate"
};

const jsonData = JSON.stringify(user);

console.log("JSON String:");
console.log(jsonData);

// Convert JSON -> Object
//JSON.parse

const objectData = JSON.parse(jsonData);

console.log("\nJavaScript Object:");
console.log(objectData);