
//Part 2: Expanding Functionality//

const csvString = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

const rows = csvString.split("\n");

// Declaring a variable to store the number of columns
const numColumns = rows[0].split(",").length;

// Store results in a two-dimensional array
const results = [rows[0].split(",")]; // Header row

for (let i = 1; i < rows.length; i++) {
  const cells = rows[i].split(",");
  results.push(cells);
}

console.log(results);

//Part 3:Transforming Data//

const transformedData = [];

// Start from index 1 as the first row is the header
for (let i = 1; i < results.length; i++) {
  const obj = {};
  for (let j = 0; j < results[i].length; j++) {
    obj[results[0][j].toLowerCase()] = results[i][j];
  }
  transformedData.push(obj);
}

console.log(transformedData);

//Part4:Sorting and Manipulating data//

// Remove the last element from the sorted array
transformedData.pop();

// Insert object at index 1
transformedData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add object to the end of the array
transformedData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(transformedData);

// Calculate average age
let totalAge = 0;
for (let i = 0; i < transformedData.length; i++) {
  totalAge += parseInt(transformedData[i].age);
}
const averageAge = totalAge / transformedData.length;
console.log("Average age:", averageAge);








