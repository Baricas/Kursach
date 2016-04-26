-- MySQL Script generated by MySQL Workbench
-- Tue 26 Apr 2016 14:54:56 MSK
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`library`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`library` (
  `id` INT UNSIGNED NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `adress` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`repository`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`repository` (
  `id` INT UNSIGNED NULL AUTO_INCREMENT,
  `library_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_repository_library_idx` (`library_id` ASC),
  CONSTRAINT `fk_repository_library`
    FOREIGN KEY (`library_id`)
    REFERENCES `mydb`.`library` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`client` (
  `id` INT UNSIGNED NULL AUTO_INCREMENT,
  `full_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`reading_room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`reading_room` (
  `id` INT UNSIGNED NULL AUTO_INCREMENT,
  `library_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reading_room_library1_idx` (`library_id` ASC),
  CONSTRAINT `fk_reading_room_library1`
    FOREIGN KEY (`library_id`)
    REFERENCES `mydb`.`library` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`book` (
  `id` INT UNSIGNED NULL AUTO_INCREMENT,
  `book_title` VARCHAR(45) NULL,
  `author` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`subscription`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`subscription` (
  `client_id` INT UNSIGNED NOT NULL,
  `book_id` INT UNSIGNED NOT NULL,
  `days` INT NULL,
  PRIMARY KEY (`client_id`, `book_id`),
  INDEX `fk_client_has_book_book1_idx` (`book_id` ASC),
  INDEX `fk_client_has_book_client1_idx` (`client_id` ASC),
  CONSTRAINT `fk_client_has_book_client1`
    FOREIGN KEY (`client_id`)
    REFERENCES `mydb`.`client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_client_has_book_book1`
    FOREIGN KEY (`book_id`)
    REFERENCES `mydb`.`book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`book_has_repository`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`book_has_repository` (
  `book_id` INT UNSIGNED NOT NULL,
  `repository_id` INT UNSIGNED NOT NULL,
  `issued` VARCHAR(45) NULL,
  PRIMARY KEY (`book_id`, `repository_id`),
  INDEX `fk_book_has_repository_repository1_idx` (`repository_id` ASC),
  INDEX `fk_book_has_repository_book1_idx` (`book_id` ASC),
  CONSTRAINT `fk_book_has_repository_book1`
    FOREIGN KEY (`book_id`)
    REFERENCES `mydb`.`book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book_has_repository_repository1`
    FOREIGN KEY (`repository_id`)
    REFERENCES `mydb`.`repository` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`workers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`workers` (
  `id` INT UNSIGNED NULL AUTO_INCREMENT,
  `full_name` VARCHAR(45) NULL,
  `reading_room_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `reading_room_id`),
  INDEX `fk_workers_reading_room1_idx` (`reading_room_id` ASC),
  CONSTRAINT `fk_workers_reading_room1`
    FOREIGN KEY (`reading_room_id`)
    REFERENCES `mydb`.`reading_room` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;