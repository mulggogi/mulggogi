-- MySQL dump 10.13  Distrib 5.5.27, for Win64 (x86)
--
-- Host: localhost    Database: afreecatv
-- ------------------------------------------------------
-- Server version	5.5.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `files2`
--

DROP TABLE IF EXISTS `files2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files2` (
  `fino` varchar(20) NOT NULL,
  `ino` int(10) NOT NULL,
  `fiday` varchar(200) NOT NULL,
  `fititle` varchar(100) NOT NULL,
  `fititleimg` varchar(150) NOT NULL,
  `ffile` varchar(1500) NOT NULL,
  PRIMARY KEY (`fino`,`ino`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files2`
--

LOCK TABLES `files2` WRITE;
/*!40000 ALTER TABLE `files2` DISABLE KEYS */;
INSERT INTO `files2` VALUES ('23081547',1,'20170626','[생]신입여캠 가디건 한장만 *_*','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170626_1FC4DDA8_193550134_2_r','/vod/20170626/134/7D22F158_193550134_1.mp4'),('23081547',2,'20170626','[생]신입여캠 가디건 한장만 *_*','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170626_1FC4DDA8_193550134_2_r','/vod/20170626/134/1FC4DDA8_193550134_2.mp4'),('23081547',3,'20170626','[생]신입여캠 가디건 한장만 *_*','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170626_1FC4DDA8_193550134_2_r','/vod/20170626/134/AC72F2A1_193550134_3.mp4'),('23253784',1,'20170701','[생]신입여캠 오늘 라됴 *_*','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170701_7812B9BB_193703798_3_r','/vod/20170701/798/F802B283_193703798_1.mp4'),('23253784',2,'20170701','[생]신입여캠 오늘 라됴 *_*','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170701_7812B9BB_193703798_3_r','/vod/20170701/798/6504A913_193703798_2.mp4'),('23253784',3,'20170701','[생]신입여캠 오늘 라됴 *_*','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170701_7812B9BB_193703798_3_r','/vod/20170701/798/7812B9BB_193703798_3.mp4'),('23253784',4,'20170701','[생]신입여캠 오늘 라됴 *_*','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170701_7812B9BB_193703798_3_r','/vod/20170701/798/75FAA280_193703798_4.mp4'),('23289607',1,'20170702','[생]신입여캠 오늘 라됴 *_* 고민상담','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170702_E9D1A599_193738592_3_r','/vod/20170702/592/D941AA8F_193738592_1.mp4'),('23289607',2,'20170702','[생]신입여캠 오늘 라됴 *_* 고민상담','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170702_E9D1A599_193738592_3_r','/vod/20170702/592/7D3619FD_193738592_2.mp4'),('23289607',3,'20170702','[생]신입여캠 오늘 라됴 *_* 고민상담','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170702_E9D1A599_193738592_3_r','/vod/20170702/592/E9D1A599_193738592_3.mp4'),('23289607',4,'20170702','[생]신입여캠 오늘 라됴 *_* 고민상담','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170702_E9D1A599_193738592_3_r','/vod/20170702/592/5D44152F_193738592_4.mp4'),('23328554',1,'20170703','[생]신입여캠 핫해여','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170703_B6D9A1E1_193770716_4_r','/vod/20170703/716/0BCA9130_193770716_1.mp4'),('23328554',2,'20170703','[생]신입여캠 핫해여','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170703_B6D9A1E1_193770716_4_r','/vod/20170703/716/C6D9AEE1_193770716_2.mp4'),('23328554',3,'20170703','[생]신입여캠 핫해여','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170703_B6D9A1E1_193770716_4_r','/vod/20170703/716/FB2A995E_193770716_3.mp4'),('23328554',4,'20170703','[생]신입여캠 핫해여','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170703_B6D9A1E1_193770716_4_r','/vod/20170703/716/B6D9A1E1_193770716_4.mp4'),('23328554',5,'20170703','[생]신입여캠 핫해여','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170703_B6D9A1E1_193770716_4_r','/vod/20170703/716/0B8A9EEE_193770716_5.mp4'),('23328554',6,'20170703','[생]신입여캠 핫해여','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170703_B6D9A1E1_193770716_4_r','/vod/20170703/716/C6C9A930_193770716_6.mp4'),('23361105',1,'20170704','[생]신입여캠 빨강색','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170704_7857CF56_193798145_3_r','/vod/20170704/145/E857C03E_193798145_1.mp4'),('23361105',2,'20170704','[생]신입여캠 빨강색','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170704_7857CF56_193798145_3_r','/vod/20170704/145/3D5497AA_193798145_2.mp4'),('23361105',3,'20170704','[생]신입여캠 빨강색','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170704_7857CF56_193798145_3_r','/vod/20170704/145/7857CF56_193798145_3.mp4'),('23361105',4,'20170704','[생]신입여캠 빨강색','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170704_7857CF56_193798145_3_r','/vod/20170704/145/9D049036_193798145_4.mp4'),('23361105',5,'20170704','[생]신입여캠 빨강색','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170704_7857CF56_193798145_3_r','/vod/20170704/145/E787CAEA_193798145_5.mp4'),('23363925',1,'20170704','23세신입여캠  혜루!','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170704_F6F49DB0_193809899_1_r','/mvod/20170704/899/F6F49DB0_193809899_1.mp4'),('23396676',1,'20170705','[생]신입여캠 청글청글♡ 혜루왔어요! ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170705_E7E28CE9_193831795_3_r','/vod/20170705/795/178281D8_193831795_1.mp4'),('23396676',2,'20170705','[생]신입여캠 청글청글♡ 혜루왔어요! ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170705_E7E28CE9_193831795_3_r','/vod/20170705/795/4C482AD9_193831795_2.mp4'),('23396676',3,'20170705','[생]신입여캠 청글청글♡ 혜루왔어요! ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170705_E7E28CE9_193831795_3_r','/vod/20170705/795/E7E28CE9_193831795_3.mp4'),('23396676',4,'20170705','[생]신입여캠 청글청글♡ 혜루왔어요! ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170705_E7E28CE9_193831795_3_r','/vod/20170705/795/7C4421D9_193831795_4.mp4'),('23396676',5,'20170705','[생]신입여캠 청글청글♡ 혜루왔어요! ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170705_E7E28CE9_193831795_3_r','/vod/20170705/795/17848AB9_193831795_5.mp4'),('23421070',1,'20170706','[생]신입여캠 승무원복...♡ 추천전신공개 ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170706_78B96C97_193855863_3_r','/vod/20170706/863/7839A0B8_193855863_1.mp4'),('23421070',2,'20170706','[생]신입여캠 승무원복...♡ 추천전신공개 ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170706_78B96C97_193855863_3_r','/vod/20170706/863/08743CBA_193855863_2.mp4'),('23421070',3,'20170706','[생]신입여캠 승무원복...♡ 추천전신공개 ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170706_78B96C97_193855863_3_r','/vod/20170706/863/78B96C97_193855863_3.mp4'),('23421070',4,'20170706','[생]신입여캠 승무원복...♡ 추천전신공개 ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170706_78B96C97_193855863_3_r','/vod/20170706/863/883535CB_193855863_4.mp4'),('23421070',5,'20170706','[생]신입여캠 승무원복...♡ 추천전신공개 ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170706_78B96C97_193855863_3_r','/vod/20170706/863/787C66BA_193855863_5.mp4'),('23466733',1,'20170707','안드로이드에서 혜루찡님이 방송 중','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170707_0B64A193_193902251_2_r','/mvod/20170707/251/AC66AC81_193902251_1.mp4'),('23466733',2,'20170707','안드로이드에서 혜루찡님이 방송 중','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170707_0B64A193_193902251_2_r','/mvod/20170707/251/0B64A193_193902251_2.mp4'),('23466733',3,'20170707','안드로이드에서 혜루찡님이 방송 중','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170707_0B64A193_193902251_2_r','/mvod/20170707/251/3CF6AA84_193902251_3.mp4'),('23507763',1,'20170708','[생]신입여캠 불토 혼자 외롭당♡ 23세 생방송','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170708_2368E2AA_193936575_3_r','/vod/20170708/575/33C8E094_193936575_1.mp4'),('23507763',2,'20170708','[생]신입여캠 불토 혼자 외롭당♡ 23세 생방송','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170708_2368E2AA_193936575_3_r','/vod/20170708/575/B3048554_193936575_2.mp4'),('23507763',3,'20170708','[생]신입여캠 불토 혼자 외롭당♡ 23세 생방송','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170708_2368E2AA_193936575_3_r','/vod/20170708/575/2368E2AA_193936575_3.mp4'),('23507763',4,'20170708','[생]신입여캠 불토 혼자 외롭당♡ 23세 생방송','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170708_2368E2AA_193936575_3_r','/vod/20170708/575/E3C48254_193936575_4.mp4'),('23507763',5,'20170708','[생]신입여캠 불토 혼자 외롭당♡ 23세 생방송','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170708_2368E2AA_193936575_3_r','/vod/20170708/575/3308EAA4_193936575_5.mp4'),('23535626',1,'20170709','[생]신입여캠 그물,,,♡ 23세 생방송','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170709_A8C23072_193963576_3_r','/vod/20170709/576/0FF23455_193963576_1.mp4'),('23535626',2,'20170709','[생]신입여캠 그물,,,♡ 23세 생방송','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170709_A8C23072_193963576_3_r','/vod/20170709/576/0B6230A4_193963576_2.mp4'),('23535626',3,'20170709','[생]신입여캠 그물,,,♡ 23세 생방송','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170709_A8C23072_193963576_3_r','/vod/20170709/576/A8C23072_193963576_3.mp4'),('23535626',4,'20170709','[생]신입여캠 그물,,,♡ 23세 생방송','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170709_A8C23072_193963576_3_r','/vod/20170709/576/7BF23735_193963576_4.mp4'),('23535626',5,'20170709','[생]신입여캠 그물,,,♡ 23세 생방송','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170709_A8C23072_193963576_3_r','/vod/20170709/576/086231A4_193963576_5.mp4'),('23567822',1,'20170710','[생]신입여캠 ♡ 마니 핫하당 23세생방송 추천댄스','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170710_2276BC0A_193992874_3_r','/vod/20170710/874/62D6B254_193992874_1.mp4'),('23567822',2,'20170710','[생]신입여캠 ♡ 마니 핫하당 23세생방송 추천댄스','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170710_2276BC0A_193992874_3_r','/vod/20170710/874/6FD4A254_193992874_2.mp4'),('23567822',3,'20170710','[생]신입여캠 ♡ 마니 핫하당 23세생방송 추천댄스','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170710_2276BC0A_193992874_3_r','/vod/20170710/874/2276BC0A_193992874_3.mp4'),('23567822',4,'20170710','[생]신입여캠 ♡ 마니 핫하당 23세생방송 추천댄스','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170710_2276BC0A_193992874_3_r','/vod/20170710/874/3FD8AC04_193992874_4.mp4'),('23567822',5,'20170710','[생]신입여캠 ♡ 마니 핫하당 23세생방송 추천댄스','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170710_2276BC0A_193992874_3_r','/vod/20170710/874/6274B2CA_193992874_5.mp4'),('23673019',1,'20170713','[생]신입여캠 ♡ 그을래머~? 추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170713_21D52B7F_194091132_3_r','/vod/20170713/132/F125232A_194091132_1.mp4'),('23673019',2,'20170713','[생]신입여캠 ♡ 그을래머~? 추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170713_21D52B7F_194091132_3_r','/vod/20170713/132/FF9DFB82_194091132_2.mp4'),('23673019',3,'20170713','[생]신입여캠 ♡ 그을래머~? 추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170713_21D52B7F_194091132_3_r','/vod/20170713/132/21D52B7F_194091132_3.mp4'),('23673019',4,'20170713','[생]신입여캠 ♡ 그을래머~? 추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170713_21D52B7F_194091132_3_r','/vod/20170713/132/019D0322_194091132_4.mp4'),('23673019',5,'20170713','[생]신입여캠 ♡ 그을래머~? 추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170713_21D52B7F_194091132_3_r','/vod/20170713/132/F124BB5F_194091132_5.mp4'),('23698414',1,'20170714','[생]신입여캠 ♡ 속닥속닥 일루와바여','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170714_7CF1BA84_194117894_2_r','/vod/20170714/894/450A6484_194117894_1.mp4'),('23698414',2,'20170714','[생]신입여캠 ♡ 속닥속닥 일루와바여','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170714_7CF1BA84_194117894_2_r','/vod/20170714/894/7CF1BA84_194117894_2.mp4'),('23698414',3,'20170714','[생]신입여캠 ♡ 속닥속닥 일루와바여','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170714_7CF1BA84_194117894_2_r','/vod/20170714/894/B23A68A8_194117894_3.mp4'),('23761669',1,'20170716','[생]신입여캠 ♡ 백년만에 핫한낮방...♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170716_B85470B0_194171110_4_r','/vod/20170716/110/35596019_194171110_1.mp4'),('23761669',2,'20170716','[생]신입여캠 ♡ 백년만에 핫한낮방...♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170716_B85470B0_194171110_4_r','/vod/20170716/110/98547419_194171110_2.mp4'),('23761669',3,'20170716','[생]신입여캠 ♡ 백년만에 핫한낮방...♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170716_B85470B0_194171110_4_r','/vod/20170716/110/D55966B0_194171110_3.mp4'),('23761669',4,'20170716','[생]신입여캠 ♡ 백년만에 핫한낮방...♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170716_B85470B0_194171110_4_r','/vod/20170716/110/B85470B0_194171110_4.mp4'),('23761669',5,'20170716','[생]신입여캠 ♡ 백년만에 핫한낮방...♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170716_B85470B0_194171110_4_r','/vod/20170716/110/353964C8_194171110_5.mp4'),('23761669',6,'20170716','[생]신입여캠 ♡ 백년만에 핫한낮방...♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170716_B85470B0_194171110_4_r','/vod/20170716/110/983776C8_194171110_6.mp4'),('23793182',1,'20170717','[생]신입여캠 핑크핑크?♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170717_50A5E307_194201349_3_r','/vod/20170717/349/40E5E499_194201349_1.mp4'),('23793182',2,'20170717','[생]신입여캠 핑크핑크?♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170717_50A5E307_194201349_3_r','/vod/20170717/349/BEE39999_194201349_2.mp4'),('23793182',3,'20170717','[생]신입여캠 핑크핑크?♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170717_50A5E307_194201349_3_r','/vod/20170717/349/50A5E307_194201349_3.mp4'),('23793182',4,'20170717','[생]신입여캠 핑크핑크?♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170717_50A5E307_194201349_3_r','/vod/20170717/349/E0EC9309_194201349_4.mp4'),('23793182',5,'20170717','[생]신입여캠 핑크핑크?♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170717_50A5E307_194201349_3_r','/vod/20170717/349/4BF4EB4C_194201349_5.mp4'),('23828055',1,'20170718','[생]신입여캠 끈이위태하다♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170718_B0AF1F3B_194234493_3_r','/vod/20170718/493/E0BF9092_194234493_1.mp4'),('23828055',2,'20170718','[생]신입여캠 끈이위태하다♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170718_B0AF1F3B_194234493_3_r','/vod/20170718/493/EBB0CF02_194234493_2.mp4'),('23828055',3,'20170718','[생]신입여캠 끈이위태하다♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170718_B0AF1F3B_194234493_3_r','/vod/20170718/493/B0AF1F3B_194234493_3.mp4'),('23828055',4,'20170718','[생]신입여캠 끈이위태하다♥추천댄스up','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170718_B0AF1F3B_194234493_3_r','/vod/20170718/493/5B80EF9B_194234493_4.mp4'),('23911662',1,'20170720','[생]신입여캠 라됴에요♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170720_DCF438F3_194313703_2_r','/vod/20170720/703/055EC801_194313703_1.mp4'),('23911662',2,'20170720','[생]신입여캠 라됴에요♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170720_DCF438F3_194313703_2_r','/vod/20170720/703/DCF438F3_194313703_2.mp4'),('23911662',3,'20170720','[생]신입여캠 라됴에요♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170720_DCF438F3_194313703_2_r','/vod/20170720/703/9530C3EE_194313703_3.mp4'),('23942895',1,'20170721','[생]신입여캠 묶엇당~♥ ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170721_204BF521_194337450_3_r','/vod/20170721/450/E08DF263_194337450_1.mp4'),('23942895',2,'20170721','[생]신입여캠 묶엇당~♥ ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170721_204BF521_194337450_3_r','/vod/20170721/450/3484BE63_194337450_2.mp4'),('23942895',3,'20170721','[생]신입여캠 묶엇당~♥ ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170721_204BF521_194337450_3_r','/vod/20170721/450/204BF521_194337450_3.mp4'),('23942895',4,'20170721','[생]신입여캠 묶엇당~♥ ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170721_204BF521_194337450_3_r','/vod/20170721/450/A486B523_194337450_4.mp4'),('23942895',5,'20170721','[생]신입여캠 묶엇당~♥ ','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170721_204BF521_194337450_3_r','/vod/20170721/450/E09DF72A_194337450_5.mp4'),('23965108',1,'20170722','[생]신입여캠 400일 축하해주세요...♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170722_53979825_194366495_2_r','/vod/20170722/495/3E7F298F_194366495_1.mp4'),('23965108',2,'20170722','[생]신입여캠 400일 축하해주세요...♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170722_53979825_194366495_2_r','/vod/20170722/495/53979825_194366495_2.mp4'),('23965347',1,'20170722','[생]신입여캠 400일 축하해주세요...♥추천up경찰복..','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170722_A2F603E2_194369615_1_r','/vod/20170722/615/A2F603E2_194369615_1.mp4'),('23970624',1,'20170722','[생]신입여캠 400일 축하해주세요...♥추천up경찰복..','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170722_99CF8070_194369912_2_r','/vod/20170722/912/056EFC0A_194369912_1.mp4'),('23970624',2,'20170722','[생]신입여캠 400일 축하해주세요...♥추천up경찰복..','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170722_99CF8070_194369912_2_r','/vod/20170722/912/99CF8070_194369912_2.mp4'),('23970624',3,'20170722','[생]신입여캠 400일 축하해주세요...♥추천up경찰복..','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170722_99CF8070_194369912_2_r','/vod/20170722/912/D52EFC9A_194369912_3.mp4'),('23971235',1,'20170722','[생]신입여캠 400일 축하해주세요...♥추천up경찰복..','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170722_8F421175_194376130_1_r','/vod/20170722/130/8F421175_194376130_1.mp4'),('24019737',1,'20170723','[생]신입여캠 힐링~하고가요♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170723_B25714E6_194414457_3_r','/vod/20170723/457/F2B718B8_194414457_1.mp4'),('24019737',2,'20170723','[생]신입여캠 힐링~하고가요♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170723_B25714E6_194414457_3_r','/vod/20170723/457/F2BD1D58_194414457_2.mp4'),('24019737',3,'20170723','[생]신입여캠 힐링~하고가요♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170723_B25714E6_194414457_3_r','/vod/20170723/457/B25714E6_194414457_3.mp4'),('24019737',4,'20170723','[생]신입여캠 힐링~하고가요♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170723_B25714E6_194414457_3_r','/vod/20170723/457/625A18B6_194414457_4.mp4'),('24039559',1,'20170724','[생]신입여캠 착한사람만 보인당♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170724_9D63E22A_194433244_3_r','/vod/20170724/244/CDD3E837_194433244_1.mp4'),('24039559',2,'20170724','[생]신입여캠 착한사람만 보인당♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170724_9D63E22A_194433244_3_r','/vod/20170724/244/E9B4F80F_194433244_2.mp4'),('24039559',3,'20170724','[생]신입여캠 착한사람만 보인당♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170724_9D63E22A_194433244_3_r','/vod/20170724/244/9D63E22A_194433244_3.mp4'),('24039559',4,'20170724','[생]신입여캠 착한사람만 보인당♥','http://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20170724_9D63E22A_194433244_3_r','/vod/20170724/244/EDB5F86F_194433244_4.mp4');
/*!40000 ALTER TABLE `files2` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-25 19:01:26
