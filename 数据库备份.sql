/*
 Navicat Premium Data Transfer

 Source Server         : mysql57
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost:3306
 Source Schema         : yqt

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : 65001

 Date: 21/03/2021 00:09:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for clock
-- ----------------------------
DROP TABLE IF EXISTS `clock`;
CREATE TABLE `clock`  (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `user` bigint(40) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `place` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `temp` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `healthy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of clock
-- ----------------------------
INSERT INTO `clock` VALUES (4, 2017211043, '黄国庆', 'boy', '15736403308', '重庆市合川区移通学院', '36.5', '无异常状况', '2021-03-20');

-- ----------------------------
-- Table structure for record
-- ----------------------------
DROP TABLE IF EXISTS `record`;
CREATE TABLE `record`  (
  `rid` int(255) NOT NULL AUTO_INCREMENT,
  `user` bigint(40) NOT NULL,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `place` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `type` tinyint(10) NULL DEFAULT NULL COMMENT '0出  1入',
  PRIMARY KEY (`rid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 55 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of record
-- ----------------------------
INSERT INTO `record` VALUES (1, 2017211043, 'hgq', '西大门', '2021-03-19 20:05:15', 0);
INSERT INTO `record` VALUES (2, 2017211043, '黄国庆', 'undefined', '2021-03-19 20:27:42', 0);
INSERT INTO `record` VALUES (3, 2017211043, '黄国庆', '北大门', '2021-03-19 20:28:30', 0);
INSERT INTO `record` VALUES (4, 2017211043, '黄国庆', '北大门', '2021-03-19 20:28:59', 0);
INSERT INTO `record` VALUES (5, 2017211043, '黄国庆', '北大门', '2021-03-19 20:30:31', 0);
INSERT INTO `record` VALUES (6, 2017211043, '黄国庆', '北大门', '2021-03-19 20:31:01', 0);
INSERT INTO `record` VALUES (7, 2017211043, '黄国庆', '北大门', '2021-03-19 20:32:16', 0);
INSERT INTO `record` VALUES (8, 2017211043, '黄国庆', '北大门', '2021-03-19 20:36:42', 0);
INSERT INTO `record` VALUES (9, 2017211043, '黄国庆', '北大门', '2021-03-19 20:37:11', 0);
INSERT INTO `record` VALUES (10, 2017211043, '黄国庆', '北大门', '2021-03-19 20:37:14', 0);
INSERT INTO `record` VALUES (11, 2017211043, '黄国庆', '北大门', '2021-03-19 20:38:18', 0);
INSERT INTO `record` VALUES (12, 2017211043, '黄国庆', '北大门', '2021-03-19 20:38:37', 0);
INSERT INTO `record` VALUES (13, 2017211043, '黄国庆', '北大门', '2021-03-19 20:38:41', 0);
INSERT INTO `record` VALUES (14, 2017211043, '黄国庆', '北大门', '2021-03-19 20:39:11', 0);
INSERT INTO `record` VALUES (15, 2017211043, '黄国庆', '北大门', '2021-03-19 20:39:20', 0);
INSERT INTO `record` VALUES (16, 2017211043, '黄国庆', '北大门', '2021-03-19 20:39:52', 0);
INSERT INTO `record` VALUES (17, 2017211043, '黄国庆', '北大门', '2021-03-19 20:41:04', 1);
INSERT INTO `record` VALUES (18, 2017211043, '黄国庆', '北大门', '2021-03-19 20:49:38', 1);
INSERT INTO `record` VALUES (19, 2017123123, 'hgq', '西大门', '2021-03-19 20:53:36', 0);
INSERT INTO `record` VALUES (20, 20123123, 'hgq', '西大门', '2021-03-19 20:53:40', 0);
INSERT INTO `record` VALUES (21, 2017211043, '黄国庆', '北大门', '2021-03-19 21:29:52', 1);
INSERT INTO `record` VALUES (22, 2017211043, '黄国庆', '北大门', '2021-03-19 21:30:40', 1);
INSERT INTO `record` VALUES (23, 2017211043, '黄国庆', '北大门', '2021-03-19 21:35:34', 1);
INSERT INTO `record` VALUES (24, 2017211043, '黄国庆', '北大门', '2021-03-19 21:36:19', 1);
INSERT INTO `record` VALUES (25, 2017211043, '黄国庆', '北大门', '2021-03-19 21:49:49', 1);
INSERT INTO `record` VALUES (26, 2017211043, '黄国庆', '北大门', '2021-03-19 21:50:05', 1);
INSERT INTO `record` VALUES (27, 2017211043, '黄国庆', '北大门', '2021-03-19 22:49:19', 1);
INSERT INTO `record` VALUES (28, 2017211043, '黄国庆', '北大门', '2021-03-20 14:58:58', 1);
INSERT INTO `record` VALUES (29, 2017211043, '黄国庆', '北大门', '2021-03-20 15:26:35', 1);
INSERT INTO `record` VALUES (30, 2017211043, '黄国庆', '北大门', '2021-03-20 15:27:05', 1);
INSERT INTO `record` VALUES (31, 2017211043, '黄国庆', '北大门', '2021-03-20 15:27:31', 1);
INSERT INTO `record` VALUES (32, 2017211043, '黄国庆', '北大门', '2021-03-20 15:27:54', 1);
INSERT INTO `record` VALUES (33, 2017211043, '黄国庆', '北大门', '2021-03-20 15:28:36', 1);
INSERT INTO `record` VALUES (34, 2017211043, '黄国庆', '北大门', '2021-03-20 15:31:54', 1);
INSERT INTO `record` VALUES (35, 2017211043, '黄国庆', '北大门', '2021-03-20 15:32:19', 1);
INSERT INTO `record` VALUES (36, 2017211043, '黄国庆', '北大门', '2021-03-20 15:32:39', 1);
INSERT INTO `record` VALUES (37, 2017211043, '黄国庆', '北大门', '2021-03-20 15:33:13', 1);
INSERT INTO `record` VALUES (38, 2017211043, '黄国庆', '北大门', '2021-03-20 15:33:36', 1);
INSERT INTO `record` VALUES (39, 2017211043, '黄国庆', '北大门', '2021-03-20 15:34:34', 1);
INSERT INTO `record` VALUES (40, 2017211043, '黄国庆', '北大门', '2021-03-20 15:34:48', 1);
INSERT INTO `record` VALUES (41, 2017211043, '黄国庆', '北大门', '2021-03-20 15:47:00', 1);
INSERT INTO `record` VALUES (42, 2017211043, '黄国庆', '北大门', '2021-03-20 15:58:18', 1);
INSERT INTO `record` VALUES (43, 2017211043, '黄国庆', '北大门', '2021-03-20 16:26:47', 1);
INSERT INTO `record` VALUES (44, 2017211043, '黄国庆', '北大门', '2021-03-20 16:33:58', 1);
INSERT INTO `record` VALUES (45, 2017211043, '黄国庆', '北大门', '2021-03-20 17:02:33', 1);
INSERT INTO `record` VALUES (46, 2017211043, '黄国庆', '北大门', '2021-03-20 17:20:08', 1);
INSERT INTO `record` VALUES (47, 2017211043, '黄国庆', '北大门', '2021-03-20 17:28:37', 1);
INSERT INTO `record` VALUES (48, 2017211043, '黄国庆', '北大门', '2021-03-20 18:47:22', 1);
INSERT INTO `record` VALUES (49, 2017211043, '黄国庆', '北大门', '2021-03-20 19:22:39', 1);
INSERT INTO `record` VALUES (50, 2017211043, '黄国庆', '北大门', '2021-03-20 23:12:54', 1);
INSERT INTO `record` VALUES (51, 2017211043, '黄国庆', '北大门', '2021-03-20 23:13:16', 1);
INSERT INTO `record` VALUES (52, 2017211043, '黄国庆', '北大门', '2021-03-20 23:15:59', 1);
INSERT INTO `record` VALUES (53, 2017211043, '黄国庆', '北大门', '2021-03-20 23:20:57', 1);
INSERT INTO `record` VALUES (54, 2017211043, '黄国庆', '北大门', '2021-03-20 23:40:58', 1);

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo`  (
  `user` bigint(40) NOT NULL,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES (2017211043, '黄国庆', '123456');

SET FOREIGN_KEY_CHECKS = 1;
