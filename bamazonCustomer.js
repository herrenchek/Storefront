var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  runQuery();
});

// Display all of the items available for sale.
function runQuery() {
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
        validate: function(val) {
          if (isNaN(val) === false) {
            return true;
          }
          return false;
        }
      }
      .then(function(val) {
        var productId = parseInt(val.id);
        var product = checkInventory(productId, inventory);

        if (product) {
          unitPrompt(product);
        }
        else {
          console.log("\nSorry, that product is not available.");
          runQuery();
        }
      })
    ])
}

function unitPrompt() {
  // The second message asks how many units of the product they would like to buy.

}


// Check if your store has enough inventory to meet the customer's request.

// If not, the app log `Insufficient quantity!`, and then prevent the order from going through.

// If your store does have enough of the product, fulfill the customer's order.
// And update the SQL database to reflect the remaining quantity.

// Once the update goes through, show the customer the total cost of their purchase.



// function artistSearch() {
//       inquirer
//         .prompt({
//           name: "artist",
//           type: "input",
//           message: "What artist would you like to search for?"
//         })
//         .then(function (answer) {
//           var query = "SELECT position, song, year FROM top5000 WHERE ?";
//           connection.query(query, { artist: answer.artist }, function (err, res) {
//             for (var i = 0; i < res.length; i++) {
//               console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
//             }
//             runSearch();
//           });
//         });
//     }

// function multiSearch() {
//       var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
//       connection.query(query, function (err, res) {
//         for (var i = 0; i < res.length; i++) {
//           console.log(res[i].artist);
//         }
//         runSearch();
//       });
//     }

// function rangeSearch() {
//       inquirer
//         .prompt([
//           {
//             name: "start",
//             type: "input",
//             message: "Enter starting position: ",
//             validate: function (value) {
//               if (isNaN(value) === false) {
//                 return true;
//               }
//               return false;
//             }
//           },
//           {
//             name: "end",
//             type: "input",
//             message: "Enter ending position: ",
//             validate: function (value) {
//               if (isNaN(value) === false) {
//                 return true;
//               }
//               return false;
//             }
//           }
//         ])
//         .then(function (answer) {
//           var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
//           connection.query(query, [answer.start, answer.end], function (err, res) {
//             for (var i = 0; i < res.length; i++) {
//               console.log(
//                 "Position: " +
//                 res[i].position +
//                 " || Song: " +
//                 res[i].song +
//                 " || Artist: " +
//                 res[i].artist +
//                 " || Year: " +
//                 res[i].year
//               );
//             }
//             runSearch();
//           });
//         });
//     }

// function songSearch() {
//       inquirer
//         .prompt({
//           name: "song",
//           type: "input",
//           message: "What song would you like to look for?"
//         })
//         .then(function (answer) {
//           console.log(answer.song);
//           connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function (err, res) {
//             console.log(
//               "Position: " +
//               res[0].position +
//               " || Song: " +
//               res[0].song +
//               " || Artist: " +
//               res[0].artist +
//               " || Year: " +
//               res[0].year
//             );
//             runSearch();
//           });
//         });
//     }

// function songAndAlbumSearch() {
//       inquirer
//         .prompt({
//           name: "artist",
//           type: "input",
//           message: "What artist would you like to search for?"
//         })
//         .then(function (answer) {
//           var query = "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ";
//           query += "FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ";
//           query += "= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year, top_albums.position";

//           connection.query(query, [answer.artist, answer.artist], function (err, res) {
//             console.log(res.length + " matches found!");
//             for (var i = 0; i < res.length; i++) {
//               console.log(
//                 i + 1 + ".) " +
//                 "Year: " +
//                 res[i].year +
//                 " Album Position: " +
//                 res[i].position +
//                 " || Artist: " +
//                 res[i].artist +
//                 " || Song: " +
//                 res[i].song +
//                 " || Album: " +
//                 res[i].album
//               );
//             }

//             runSearch();
//           });
//         });
//     }