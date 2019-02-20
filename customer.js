//require mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

//create connection to database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "Bamazon"
})

function start() {
    connection.query('SELECT * FROM Products', function (err, res) {
        if (err) throw err;
        console.log("Welcome to Bamazon!");

        var table = new Table({
            head: ["Item ID", "Product Name", "Department", "Price", "Stock Quantity"],
            style: {
                head: ["yellow"],
                colWidths: [200, 200, 200, 200, 200],
            }
        });

        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].ItemID, res[i].ProductName, res[i].DepartmentName, res[i].Price, res[i].StockQuantity]
            );
        }
    console.log(table.toString());
    });
}

start();
    // Inquirer 
// }function startPrompt() {

//     inquirer.prompt([{

//         type: "name",
//         name: "Bamazon",
//         message: "Welcome to Bamazon!"
//     }]);

//     connection.query('SELECT * FROM Products', function (err, res) {
//         if (err) {
//             console.log(err);
//         }

//         for (var i = 0; i < res.length; i++) {
//             console.log("\nID: " + res[i].ItemID + " | " + "Product: " + res[i].ProductName + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: " + res[i].Price + " | " + "QTY: " + res[i].StockQuantity);
//             console.log("-------------------------------------------------------------------------")
//         }
//     })
//     console.log(table.toString());

//     // Prompt user to select a product and enter desired quantity
//     function buyPrompt() {
//         inquirer.prompt([{
//             name: "itemId",
//             type: "input",
//             message: "Enter the id of the product you'd like to buy."
//         }, {
//             name: "quantity",
//             type: "input",
//             message: "How many would you like to purchase?"
//         }]).then(function (answer) {
//             for (var i = 0; i < res.length; i++) {
//                 if (res[i].ItemId === parseInt(answer.ItemId)) {
//                     // If order quantity is too high, notify user of insufficient stock
//                     if (res[i].StockQuantity < parseInt(answer.Quantity)) {
//                         console.log("Insufficient stock!");
//                         buyPrompt();
//                     } else {
//                         // Calculate order total and remaining stock
//                         var total = parseFloat(answer.Quantity * res[i].Price).toFixed(2);
//                         var newStock = res[i].StockQuantity - answer.Quantity;

//                         // Construct query to update stock
//                         var updateStock = 'UPDATE `products` SET `stock_quantity` = ' + newStock + ' WHERE `item_id` = ' + answer.ItemId
//                         connection.query(updateStock, function (err, res) {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(res.affectedRows + " product updated");
//                             }
//                         });

//                         // Notify user of successful purchase
//                         console.log("You have purchased " + answer.Quantity + " " + res[i].ProductName);
//                         console.log("Your order total is " + total);
//                     }
//                 }
//             }
//         });
//     }
// }
