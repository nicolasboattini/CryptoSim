-- -----------------------------------------------------
-- Creación de la DATABASE
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `cryptosim`;
USE `cryptosim` ;

-- -----------------------------------------------------
-- Tabla Usuario
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cryptosim`.`Usuario` ;
CREATE TABLE IF NOT EXISTS `cryptosim`.`Usuario` (
    `idUsuario` INT NOT NULL AUTO_INCREMENT,
    `nickname` VARCHAR(45) NOT NULL,
    `clave` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`idUsuario`)
)  ENGINE=INNODB;


-- -----------------------------------------------------
-- Tabla Tarjeta_Grafica
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cryptosim`.`Tarjeta_Grafica` ;
CREATE TABLE IF NOT EXISTS `cryptosim`.`Tarjeta_Grafica` (
  `idTarjeta_Grafica` INT NOT NULL AUTO_INCREMENT,
  `modelo` VARCHAR(45) NOT NULL,
  `serie` VARCHAR(45) NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `consumo` DOUBLE UNSIGNED NOT NULL,
  `frecuencia_de_hasheo` DOUBLE UNSIGNED NOT NULL,
  `precio` DOUBLE UNSIGNED NOT NULL,
  PRIMARY KEY (`idTarjeta_Grafica`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Tabla Rig
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cryptosim`.`Rig` ;

CREATE TABLE IF NOT EXISTS `cryptosim`.`Rig` (
  `idRig` INT NOT NULL AUTO_INCREMENT,
  `Tarjeta_Grafica_idTarjeta_Grafica` INT NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idRig`),
  CONSTRAINT `fk_Rig_Tarjeta_Grafica1`
    FOREIGN KEY (`Tarjeta_Grafica_idTarjeta_Grafica`)
    REFERENCES `cryptosim`.`Tarjeta_Grafica` (`idTarjeta_Grafica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Rig_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `cryptosim`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


--INSERT MODELS
-- INSERT INTO cryptosim.tarjeta_grafica
--`idTarjeta_Grafica`, `modelo`  `serie` `marca`  `consumo`  `frecuencia_de_hasheo`  `precio`


INSERT INTO cryptosim.tarjeta_grafica VALUES(0,'NVIDIA','GeForce RTX','3090 Ti', 108.56,128,2000);
INSERT INTO cryptosim.tarjeta_grafica VALUES(1, 'NVIDIA','GeForce RTX','3090', 108.56,119.0,1800);
INSERT INTO cryptosim.tarjeta_grafica VALUES(2, 'NVIDIA','Quadro RTX','A5000', 108.56,117.0,2500);
INSERT INTO cryptosim.tarjeta_grafica VALUES(3, 'AMD','Radeon RX','6800 XT', 108.56,62.0,850);
INSERT INTO cryptosim.tarjeta_grafica VALUES(4, 'AMD','RX','6900XT', 108.56,62.0,200);