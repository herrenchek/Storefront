require('dotenv').config();
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  runQuery();
});

// Display all of the items available for sale.
function runQuery() {
  console.log("\nWelcome to Storefront!")
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
    // The app then prompts users with two messages.
    idPrompt(res);
  });
}

function idPrompt(inventory) {
  // The first asks them the ID of the product they would like to buy.
  inquirer
    .prompt([
      {
        name: "id",
        message: "What is the ID of the product you would like to buy? (Please enter a number.)",
        type: "input",
        validate: function (val) {
          if (isNaN(val) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function (val) {
      var productId = parseInt(val.id);
      var product = checkInventory(productId, inventory);

      if (product) {
        unitPrompt(product);
      }
      else {
        console.log("\nSorry, that product is not available.");
        runQuery();
      }
    });
  }

function unitPrompt() {
  // The second message asks how many units of the product they would like to buy.

  // Check if your store has enough inventory to meet the customer's request.

  // If not, the app log `Insufficient quantity!`, and then prevent the order from going through.
  console.log("\nSorry, that product is out of stock!")
}

// If your store does have enough of the product, fulfill the customer's order.
// And update the SQL database to reflect the remaining quantity.

// Once the update goes through, show the customer the total cost of their purchase.