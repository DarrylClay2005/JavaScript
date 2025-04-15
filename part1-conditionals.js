// let score = 82;
// Print A, B, C, D, or F based on score
function calculateGrade(score) {
    if (score >= 82) {
      return 'A';
    } else if (score >= 78) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

// Print Warning If Quantity > 10

let quantity = 8;
if (quantity > 10) {
    console.log(warning)
} else console.log(quantity);

// Login Simulator
// Need to make a login simulator (a fake psuedo simulator)
let password = prompt("Password:");
let rightPassword = "letmein";
if (password === rightpassword) {
    console.log("Access Grnated");
} else console.log("Access denied");