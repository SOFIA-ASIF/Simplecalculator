#! /usr/bin/env node
// Above code is called "Shabang" SH from # and bang is another name of !

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "what is your first number?", type: "number", name: "firstName" },
  {
    message: "what is your second number?",
    type: "number",
    name: "secondName",
  },
  {
    message: "Enter a operator to perform the action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log("Your answer is " + (answer.firstName + answer.secondName));
}
else if (answer.operator === "Subtraction") {
  console.log("Your answer is " + (answer.firstName - answer.secondName));
}
else if (answer.operator === "Multiplication") {
  console.log("Your answer is " + (answer.firstName * answer.secondName));
}
else if (answer.operator === "Division") {
  console.log("Your answer is " + (answer.firstName / answer.secondName));
}
else {
  console.log("Invalid operator");
}
