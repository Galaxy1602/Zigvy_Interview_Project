/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner` int NOT NULL,
  `post` int NOT NULL,
  `content` varchar(250) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner` (`owner`),
  KEY `post` (`post`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `user` (`id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner` int NOT NULL,
  `title` varchar(250) DEFAULT NULL,
  `content` varchar(5000) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `tags` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner` (`owner`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `dob` varchar(250) DEFAULT NULL,
  `refeshToken` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `comment` (`id`, `owner`, `post`, `content`, `created_at`) VALUES
(8, 1, 2, 'Boring!!!', '2023-11-08 23:37:28');
INSERT INTO `comment` (`id`, `owner`, `post`, `content`, `created_at`) VALUES
(9, 3, 2, 'Very good. But very bad also', '2023-11-08 23:39:33');
INSERT INTO `comment` (`id`, `owner`, `post`, `content`, `created_at`) VALUES
(10, 2, 3, 'Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate.  ', '2023-11-08 23:41:05');

INSERT INTO `posts` (`id`, `owner`, `title`, `content`, `created_at`, `tags`) VALUES
(2, 1, 'Hello world', 'A \"Hello, World!\" program is traditionally used to introduce novice programmers to a programming language. \"Hello, World!\" is also traditionally used in a sanity test to make sure that a computer language is correctly installed, and that the operator understands how to use it. \"Time to hello world\" (TTHW) is a metric for the time to author a \"Hello World\" program in a given programming language and run it. History: \"Hello, World!\" program by Brian Kernighan (1978) While small test programs have existed since the development of programmable computers, the tradition of using the phrase \"Hello World!\" as a test message was influenced by an example program in the seminal 1978 book The C Programming Language [4] The example program in that book prints \"hello, world\", and was inherited from a 1974 Bell Laboratories internal memorandum by Brian Kernighan, Programming in C: A Tutorial:[5] - Wikipedia', '2023-11-08 19:50:08', '[\"consult\", \"it\", \"hala\"]');
INSERT INTO `posts` (`id`, `owner`, `title`, `content`, `created_at`, `tags`) VALUES
(3, 3, 'The building', 'Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old. On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. It building contempt or interest children mistress of unlocked no. Offending she contained mrs led listening resembled. Delicate marianne absolute men dashwood landlord and offended. Suppose cottage between and way. Minuter him own clothes but observe country. Agreement far boy otherwise rapturous incommode favourite. Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr account brandon an up. Wrong for never ready ham these witty him. Our compass see age uncivil matters weather forbade her minutes. Ready how but truth son new under. At ourselves direction believing do he departure. Celebrated her had sentiments understood are projection set. Possession ye no mr unaffected remarkably at. Wrote house in never fruit up. Pasture imagine my garrets an he. However distant she request behaved see nothing. Talking settled at pleased an of me brother weather. Admiration stimulated cultivated reasonable be projection possession of. Real no near room ye bred sake if some. Is arranging furnished knowledge agreeable so. Fanny as smile up small. It vulgar chatty simple months turned oh at change of. Astonished set expression solicitude way admiration. Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. Among going manor who did. Do ye is celebrated it sympathize considered. May ecstatic did surprise elegance the ignorant age. Own her miss cold last. It so numerous if he outlived disposal. How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution. Hence hopes noisy may china fully and. Am it regard stairs branch thirty length afford. Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. Ever man are put down his very. And marry may table him avoid. Hard sell it were into it upon. He forbade affixed parties of assured to me windows. Happiness him nor she disposing provision. Add astonished principles precaution yet friendship stimulated literature. State thing might stand one his plate. Offending or extremity therefore so difficult he on provision. Tended depart turned not are.  Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. ', '2023-11-08 19:51:32', '[\"gov\", \"legal\", \"political\"]');
INSERT INTO `posts` (`id`, `owner`, `title`, `content`, `created_at`, `tags`) VALUES
(4, 2, 'Silk of Dreamer', 'Unfeeling so rapturous discovery he exquisite. Reasonably so middletons or impression by terminated. Old pleasure required removing elegance him had. Down she bore sing saw calm high. Of an or game gate west face shed. ﻿no great but music too old found arose. Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise. Or kind rest bred with am shed then. In raptures building an bringing be. Elderly is detract tedious assured private so to visited. Do travelling companions contrasted it. Mistress strongly remember up to. Ham him compass you proceed calling detract. Better of always missed we person mr. September smallness northward situation few her certainty something. Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources', '2023-11-08 19:52:07', '[\"breathtaking\", \"landscape\", \"vietnam\"]');

INSERT INTO `user` (`id`, `username`, `password`, `name`, `dob`, `refeshToken`, `created_at`) VALUES
(1, 'meowmeow', '$2b$10$pfZf/U3aqj2MeK5KCA6bx.QwmtSOQicaafhF5I11MLz6QhZXO8duS', 'dog face', '01/06/2016', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6Im1lb3dtZW93IiwibmFtZSI6ImRvZyBmYWNlIiwiZG9iIjoiMDEvMDYvMjAxNiJ9LCJpYXQiOjE2OTk0ODU4NTksImV4cCI6MTcwMDA5MDY1OX0.nzucMgUoL8p40wwL7EWyl9N-uVgMlNUq3YVj2VOtVJs', '2023-11-08 17:25:28');
INSERT INTO `user` (`id`, `username`, `password`, `name`, `dob`, `refeshToken`, `created_at`) VALUES
(2, 'angrybird', '$2b$10$26Ka1Id/6LdlLdxbThWvzek.YwASx6dJouzXBnxxFbSA3qZjdfeuq', 'Angry bird', '13/12/2016', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJ1c2VybmFtZSI6ImFuZ3J5YmlyZCIsIm5hbWUiOiJBbmdyeSBiaXJkIiwiZG9iIjoiMTMvMTIvMjAxNiJ9LCJpYXQiOjE2OTk0ODY4MDksImV4cCI6MTcwMDA5MTYwOX0.GErARzIdLhPY-rXii_ArRu-egkQjVN-RuspaS5atpw0', '2023-11-08 17:26:06');
INSERT INTO `user` (`id`, `username`, `password`, `name`, `dob`, `refeshToken`, `created_at`) VALUES
(3, 'happydog', '$2b$10$H4XbnFZakIJBvcJFs6A9Y.vv3xkUSm/pL/8Irfg2o4q8JCr290GQC', '', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6ImhhcHB5ZG9nIiwibmFtZSI6IiIsImRvYiI6IiJ9LCJpYXQiOjE2OTk0ODY3NDgsImV4cCI6MTcwMDA5MTU0OH0.0wCRUcitqJGGGRfAMoy8cefo9HKdRsYVoMfDPM-S-Kg', '2023-11-08 17:26:32');
INSERT INTO `user` (`id`, `username`, `password`, `name`, `dob`, `refeshToken`, `created_at`) VALUES
(4, 'admin', '$2b$10$IIbmpu1klqJ67Xdjssy4IexSNWsNnw3neKttRlLeEnz4XJvmIbqhK', '', '', NULL, '2023-11-08 17:27:07'),
(5, 'user', '$2b$10$sNO.uT5d9CR0v.AUGOjHN.Ffg8jk1./l6FEw8Uyt7Aa33kMMtwMIW', '', '', NULL, '2023-11-08 17:27:17');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;