/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost:3306
 Source Schema         : Bubei

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 13/02/2022 01:06:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for BackgroundImage
-- ----------------------------
DROP TABLE IF EXISTS `BackgroundImage`;
CREATE TABLE `BackgroundImage` (
  `backgroundImageID` int(11) NOT NULL,
  `standby1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `createUser` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateUser` varchar(0) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `base64` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`backgroundImageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for Sentences
-- ----------------------------
DROP TABLE IF EXISTS `Sentences`;
CREATE TABLE `Sentences` (
  `sentenceID` int(11) NOT NULL,
  `japaneseMeans` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `chineseMeans` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `englishMeans` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `kind` int(255) DEFAULT NULL,
  `standby1` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby2` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby3` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `createUser` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateUser` varchar(0) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`sentenceID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for SentencesRelaction
-- ----------------------------
DROP TABLE IF EXISTS `SentencesRelaction`;
CREATE TABLE `SentencesRelaction` (
  `sentencesRelactionID` int(11) NOT NULL,
  `sentenceID` int(11) DEFAULT NULL,
  `wordID` int(11) DEFAULT NULL,
  `standby1` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby2` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby3` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createUser` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateUser` datetime DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for UersStudyRecord
-- ----------------------------
DROP TABLE IF EXISTS `UersStudyRecord`;
CREATE TABLE `UersStudyRecord` (
  `userStudyWordRecordID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `wordID` int(11) NOT NULL,
  `studyWordCount` int(255) DEFAULT NULL,
  `studyTime` datetime DEFAULT NULL,
  `standby1` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby2` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby3` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `createUser` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateUser` datetime DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`userStudyWordRecordID`,`userID`,`wordID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `userID` int(32) NOT NULL,
  `managerID` int(11) NOT NULL,
  `memberID` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `score` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `wordBookID` int(11) DEFAULT NULL,
  `standby1` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby2` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby3` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `createUser` varchar(64) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateUser` varchar(64) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`userID`,`managerID`,`memberID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for UserNotStudyWordRecord
-- ----------------------------
DROP TABLE IF EXISTS `UserNotStudyWordRecord`;
CREATE TABLE `UserNotStudyWordRecord` (
  `userNotStudyWordRecordID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `wordID` int(11) NOT NULL,
  `isStudy` int(255) DEFAULT NULL,
  `standby1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `createUser` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateUser` varchar(0) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`userNotStudyWordRecordID`,`userID`,`wordID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for UserStudyHistory
-- ----------------------------
DROP TABLE IF EXISTS `UserStudyHistory`;
CREATE TABLE `UserStudyHistory` (
  `userStudyHistoryID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `wordID` int(11) NOT NULL,
  `wordBookID` int(11) DEFAULT NULL,
  `studyCount` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby1` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby2` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby3` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `createUser` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateUser` varchar(0) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`userStudyHistoryID`,`userID`,`wordID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for WordBook
-- ----------------------------
DROP TABLE IF EXISTS `WordBook`;
CREATE TABLE `WordBook` (
  `wordBookID` int(11) NOT NULL,
  `wordBookName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `wordBookKind` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `wordBookLabel` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `createUser` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateUser` varchar(0) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`wordBookID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for WordBookRelation
-- ----------------------------
DROP TABLE IF EXISTS `WordBookRelation`;
CREATE TABLE `WordBookRelation` (
  `wordBookRelationID` int(11) NOT NULL,
  `wordBookID` int(11) NOT NULL,
  `wordID` int(11) NOT NULL,
  `standby1` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby2` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby3` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `createUser` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateUser` varchar(0) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`wordBookRelationID`,`wordBookID`,`wordID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for Words
-- ----------------------------
DROP TABLE IF EXISTS `Words`;
CREATE TABLE `Words` (
  `wordID` int(11) NOT NULL,
  `japaneseMeans` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `falseName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `chineseMeans` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `englishMeans` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `voice` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `voiceUrl` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `sentenceID` int(11) DEFAULT NULL,
  `phraseID` int(11) DEFAULT NULL,
  `kindID` int(11) DEFAULT NULL,
  `standby1` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby2` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `standby3` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `createUser` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateUser` varchar(0) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`wordID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

SET FOREIGN_KEY_CHECKS = 1;
