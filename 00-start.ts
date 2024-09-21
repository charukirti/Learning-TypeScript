// This is a comment in TypeScript, anything after the "//" symbol is ignored by the compiler

// Define a variable "name" with the type "string"
let userName: string = 'John Doe'; // Assign the value 'John Doe' to the variable "name"

// Define a function "greeter" that takes a "name" parameter of type "string"
function greeter(userName: string) {
  // Use template literals to create a greeting message
  let message: string = `Hello, ${userName}!`; // The "${name}" is a placeholder for the "name" variable

  // Return the greeting message
  return message;
}

// Call the "greeter" function with the "name" variable as an argument
let result: string = greeter(userName);

// Use the "console.log" function to print the result to the console
console.log(result); // Output: "Hello, John Doe!"