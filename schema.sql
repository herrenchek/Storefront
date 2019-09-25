DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT,
product_name VARCHAR(45) NOT NULL,
department_name VARCHAR(45) NOT NULL,
price INT,
stock_quantity INT
);

-- CREATE TABLE products (
--   id INT NOT NULL AUTO_INCREMENT,
--   flavor VARCHAR(45) NULL,
--   price DECIMAL(10,2) NULL,
--   quantity INT NULL,
--   PRIMARY KEY (id)
-- );

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("chocolate", 3.10, 120);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("strawberry", 3.25, 75);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);