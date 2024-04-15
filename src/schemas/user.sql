USE noteDB;

CREATE TABLE users(
    ID INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW()
)