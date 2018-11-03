-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 03, 2018 at 01:59 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_infographic`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_education`
--

CREATE TABLE `tbl_education` (
  `ID` int(10) NOT NULL,
  `region_name` varchar(30) NOT NULL,
  `primary_ed` varchar(10) NOT NULL,
  `secondary_ed` varchar(10) NOT NULL,
  `YA_literacy` varchar(10) NOT NULL,
  `unemployment` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_education`
--

INSERT INTO `tbl_education` (`ID`, `region_name`, `primary_ed`, `secondary_ed`, `YA_literacy`, `unemployment`) VALUES
(1, 'america', '92%', '87%', 'N/A', '7.91%'),
(2, 'south_america', '94%', '76%', '98%', '6.13%'),
(3, 'africa', '79%', '36%', '71%', '7.71%'),
(4, 'europe_and_central_asia', '95%', '89%', '100%', '7.79%'),
(5, 'middle_east', '90%', '68%', '92%', '12.02%'),
(6, 'south_asia', '94%', '51%', '83%', '4.11%'),
(7, 'east_asia', '96%', '78%', '99%', '4.22%'),
(8, 'australia', '97%', '86%', 'N/A', '9.58%');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_education`
--
ALTER TABLE `tbl_education`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_education`
--
ALTER TABLE `tbl_education`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
