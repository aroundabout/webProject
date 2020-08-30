-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1:3306
-- 生成日期： 2020-08-30 04:43:06
-- 服务器版本： 8.0.21
-- PHP 版本： 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `shoppingweb`
--
CREATE DATABASE IF NOT EXISTS `shoppingweb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `shoppingweb`;

-- --------------------------------------------------------

--
-- 表的结构 `cartlist`
--

DROP TABLE IF EXISTS `cartlist`;
CREATE TABLE IF NOT EXISTS `cartlist` (
  `user` varchar(20) NOT NULL,
  `productid` int NOT NULL,
  PRIMARY KEY (`user`,`productid`),
  KEY `pidlimit` (`productid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `cartlist`
--

INSERT INTO `cartlist` (`user`, `productid`) VALUES
('Xenon123', 1),
('Xenon123', 3),
('Xenon123', 4),
('KKKKKK', 6),
('Xenon123', 6),
('KKKKKK', 7);

-- --------------------------------------------------------

--
-- 表的结构 `orderlist`
--

DROP TABLE IF EXISTS `orderlist`;
CREATE TABLE IF NOT EXISTS `orderlist` (
  `user` varchar(20) NOT NULL,
  `productid` int NOT NULL,
  PRIMARY KEY (`user`,`productid`),
  KEY `pidlimit2` (`productid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `orderlist`
--

INSERT INTO `orderlist` (`user`, `productid`) VALUES
('Xenon123', 5),
('KKKKKK', 7),
('Xenon123', 8);

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `productid` int NOT NULL,
  `name` varchar(20) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`productid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`productid`, `name`, `price`) VALUES
(1, 'xps13', 9999),
(2, 'surfacepro', 8999),
(3, '长嘴烧水壶', 199),
(4, '三星显示器', 3999),
(5, '麻辣牛肉', 19),
(6, '水杯', 99),
(7, '抹茶大福', 39),
(8, '头戴式耳机', 2999);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `address` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`user`, `password`, `address`, `phone`) VALUES
('KKKKKK', '4869baiyexing', '上海', '18017946905'),
('Xenon123', '4869baiyexing', '上海', '18017946905');

--
-- 限制导出的表
--

--
-- 限制表 `cartlist`
--
ALTER TABLE `cartlist`
  ADD CONSTRAINT `pidlimit` FOREIGN KEY (`productid`) REFERENCES `product` (`productid`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `userlimit` FOREIGN KEY (`user`) REFERENCES `user` (`user`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- 限制表 `orderlist`
--
ALTER TABLE `orderlist`
  ADD CONSTRAINT `pidlimit2` FOREIGN KEY (`productid`) REFERENCES `product` (`productid`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `userlimit2` FOREIGN KEY (`user`) REFERENCES `user` (`user`) ON DELETE CASCADE ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
