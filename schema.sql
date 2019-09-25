DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(45) NOT NULL,
department_name VARCHAR(45) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(10) NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("House of Sand and Fog", "Books", 14.95, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Martian", "Books", 13.95, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sekiro: Shadows Die Twice", "Video Games", 59.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vitamix Blender", "Home & Kitchen", 499.95, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 11", "Electronics", 699.00, 999);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Death Note", "Anime", 40.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fancy Feast", "Pet Food", 14.72, 38);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Neon Genesis Evangelion", "Anime", 199.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("In Rainbows", "CDs & Vinyl", 22.45, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Demon's Souls", "Video Games", 25.00, 80);