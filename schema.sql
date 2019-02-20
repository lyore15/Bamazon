DROP DATABASE IF EXISTS Bamazon;

CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
    ItemID INT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

Select * FROM Products;

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("The Miseducation of Lauryn Hill", "CDs & Vinyl", 25.00, 35),
("What do you Meme?", "Games", 29.99, 9),
("Keurig", "Kitchen", 45.00, 17),
("Cards Against Humanity", "Games", 25.00, 50),
("Thriller", "CDs & Vinyl", 20.00, 15),
("Roller Skates", "Outdoors", 50.00, 20),
("Wine Rack", "Kitchen", 52.50, 40),
("Diamond Earrings", "Jewelry", 200.00, 20),
("Room For Squares", "CDs & Vinyl", 15.50, 100),
("Crock Pot ", "Kitchen", 69.99, 27),
("No Strings Attached", "CDs & Vinyl", 35.00, 77);