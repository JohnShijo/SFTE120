// //1. Basic Function Example (Function Definition & Invocation)
// //This simple example demonstrates how to define and invoke a function.

// // Function to greet a user
// function greet(firstName, lastName) {
//     return `Hello, ${firstName} ${lastName}!`;
// }

// // Function call
// console.log(greet("Alice", "Smith"));
// console.log(greet("Bob"));

// //2. Function Arguments and Default Parameters
// //Demonstrates how functions accept arguments and how default values work.

// function multiply(a, b = 2) { 
//     return a * b; 
// }

// console.log(multiply(5, 3));  
// console.log(multiply(4));     

// //3. Function Scope (Local vs Global Variables)
// //This example helps students understand variable scope.

// let globalVar = "I'm a global variable";

// function showScope() {
//     let localVar = "I'm a local variable";
//     console.log(globalVar); // Accessible
//     console.log(localVar);  // Accessible
// }

// showScope();
// console.log(globalVar); // Accessible
// // console.log(localVar);  // Error: localVar is not defined

// //4. Recursive Function (Factorial Calculation)
// //A recursive function to compute factorials.

// function factorial(n) {
//     if (n === 0) {
//         return 1;  // Base case
//     }
//     return n * factorial(n - 1);  // Recursive case
// }

// console.log(factorial(5)); // Output: 120
// console.log(factorial(3)); // Output: 6

// function countDown(n) {
//     if (n === 0) {
//         return;
//     }
//     console.log(n);
//     countDown(n--);
// }
// countDown(5);
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter the desired password length: ", function(length){
//     length = parseInt(length);

//     if (isNaN(length) || length < 4) {
//         console.log("Invalid input. Please enter a number greater than or equal to 4.");
//         rl.close();
//         return;
//     }

//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?";
//     let password = "";

//     for (let i = 0; i < length; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         password += characters[randomIndex];
//     }

//     console.log(`Generated Password: ${password}`);
//     rl.close();
// });


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the amount in USD: ", function(amount) {
    amount = parseFloat(amount);

    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount. Please enter a valid number greater than 0.");
        rl.close();
        return;
    }

    rl.question("Enter the target currency (Costa Rica, Spain, Brazil, India): ", function(country) {
        let convertedAmount;
        let currencySymbol;
        
        switch (country.toLowerCase()) {
            case "costa rica":
                convertedAmount = amount * 533.62; // USD to Costa Rican Colón (CRC)
                currencySymbol = "CRC";
                break;
            case "spain":
                convertedAmount = amount * 0.93; // USD to Euro (EUR)
                currencySymbol = "€";
                break;
            case "brazil":
                convertedAmount = amount * 4.95; // USD to Brazilian Real (BRL)
                currencySymbol = "R$";
                break;
            case "india":
                convertedAmount = amount * 83.00; // USD to Indian Rupee (INR)
                currencySymbol = "₹";
                break;
            default:
                console.log("Invalid country. Please enter Costa Rica, Spain, Brazil, or India.");
                rl.close();
                return;
        }

        console.log(`Converted Amount: ${currencySymbol}${convertedAmount.toFixed(2)}`);
        rl.close();
    });
});
