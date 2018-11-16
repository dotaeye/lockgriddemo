-- MySQL dump 10.13  Distrib 8.0.13, for macos10.14 (x86_64)
--
-- Host: localhost    Database: lockgriddemo
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `GridInfo`
--

DROP TABLE IF EXISTS `GridInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8 ;
CREATE TABLE `GridInfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` varchar(128) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `gnumber` int(11) DEFAULT NULL,
  `lockedtime` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `weight` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GridInfo`
--

LOCK TABLES `GridInfo` WRITE;
/*!40000 ALTER TABLE `GridInfo` DISABLE KEYS */;
INSERT INTO `GridInfo` VALUES (1,'2',1,0,'2018-11-15 20:54:09','2018-11-13 22:27:24','2018-11-16 08:39:09',1.32,300),(2,'2',1,1,'2018-11-13 22:44:36','2018-11-13 22:27:44','2018-11-14 10:29:36',2.32,300),(3,'2',1,2,'2018-11-13 22:44:39','2018-11-14 11:04:06','2018-11-14 10:29:39',1.32,1300),(4,'2',1,3,'2018-11-15 20:54:10','2018-11-14 11:04:06','2018-11-16 08:39:10',9.32,300),(5,'2',2,4,NULL,'2018-11-14 11:04:06','2018-11-14 08:15:48',1.32,400),(6,'2',2,5,NULL,'2018-11-14 11:04:06','2018-11-14 08:15:48',31.32,300),(7,'2',2,6,NULL,'2018-11-14 11:04:06','2018-11-14 08:15:48',1.32,300),(8,'2',1,7,'2018-11-15 20:54:11','2018-11-14 11:04:06','2018-11-16 08:39:11',11.32,300),(9,'2',2,8,NULL,'2018-11-14 11:04:06','2018-11-14 09:05:43',1.32,300),(10,'2',2,9,NULL,'2018-11-14 11:04:06','2018-11-14 08:15:48',1.34,200),(11,'2',2,10,NULL,'2018-11-14 11:04:06','2018-11-14 08:15:48',1.32,300),(12,'2',2,11,NULL,'2018-11-14 11:04:06','2018-11-14 09:05:43',1.32,700),(13,'2',1,12,'2018-11-15 20:54:10','2018-11-14 11:04:06','2018-11-16 08:39:10',17.32,300),(14,'2',1,13,'2018-11-15 20:54:13','2018-11-14 11:04:06','2018-11-16 08:39:13',1.32,300),(15,'2',2,14,NULL,'2018-11-14 11:04:06','2018-11-14 09:05:43',21.32,300),(16,'2',2,15,NULL,'2018-11-14 11:04:06','2018-11-14 09:05:43',1.32,300);
/*!40000 ALTER TABLE `GridInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrderInfo`
--

DROP TABLE IF EXISTS `OrderInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8 ;
CREATE TABLE `OrderInfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `oid` varchar(128) DEFAULT NULL,
  `gnumber` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderInfo`
--

LOCK TABLES `OrderInfo` WRITE;
/*!40000 ALTER TABLE `OrderInfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `OrderInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8 ;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20181113140845-create-initial-database.js'),('20181113140847-order-info.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-16 17:36:22
