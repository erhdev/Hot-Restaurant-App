DROP DATABASE IF EXISTS hotRestaurantApp;

CREATE DATABASE hotRestaurantApp;

USE hotRestaurantApp;

CREATE TABLE reservations
(
    res_id INT NOT NULL
    AUTO_INCREMENT,
    res_name VARCHAR
    (45) NULL,
    email VARCHAR
    (45) NULL,
    phone INT NULL,
    customer_id VARCHAR
    (45) NULL,
    PRIMARY KEY
    (res_id)
);
