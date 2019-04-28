-- Create the database burgers_db and use it.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers
CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(150) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

