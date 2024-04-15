CREATE TABLE `notedb`.`account` (
  `accountID` INT NOT NULL AUTO_INCREMENT,
  `userID` INT NOT NULL,
  `balance` INT NULL,
  UNIQUE INDEX `accountID_UNIQUE` (`accountID` ASC) VISIBLE,
  PRIMARY KEY (`accountID`),
  UNIQUE INDEX `userID_UNIQUE` (`userID` ASC) VISIBLE,
  CONSTRAINT `userID`
    FOREIGN KEY (`userID`)
    REFERENCES `notedb`.`users` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);