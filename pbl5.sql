-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 11, 2022 lúc 02:51 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `pbl5`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `action`
--

CREATE TABLE `action` (
  `action_id` varchar(10) NOT NULL,
  `action_name` int(20) NOT NULL,
  `action_code` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dien_vien`
--

CREATE TABLE `dien_vien` (
  `id_dien_vien` varchar(10) NOT NULL,
  `ten_dien_vien` varchar(20) NOT NULL,
  `avatar` varchar(1000) NOT NULL,
  `ngay_sinh` datetime NOT NULL,
  `quoc_tich` varchar(10) NOT NULL,
  `id_phim` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `dien_vien`
--

INSERT INTO `dien_vien` (`id_dien_vien`, `ten_dien_vien`, `avatar`, `ngay_sinh`, `quoc_tich`, `id_phim`) VALUES
('1', 'Chris Pratt', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzGnI__Ul05wKYDq3QYeoy1QbXXdWMvJpLezay515H6OiORtH-', '1979-06-21 07:00:00', 'Hoa Kỳ', '1'),
('10', 'Xochitl Gomez', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjpTPxKqXkH_or333MTdBOHtgR_EJMsxHBNiAE17STnkaOsbow', '2006-04-29 07:00:00', 'Hoa Kỳ', '2'),
('11', 'Patrick Stewart', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patrick_Stewart_by_Gage_Skidmore_2.jpg/330px-Patrick_Stewart_by_Gage_Skidmore_2.jpg', '1940-07-13 07:00:00', 'Hoa Kỳ', '2'),
('12', 'Benedict Wong', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Benedict_Wong_by_Gage_Skidmore.jpg/300px-Benedict_Wong_by_Gage_Skidmore.jpg', '1971-06-03 07:00:00', 'Anh', '2'),
('13', 'Rachel McAdams', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rachel_McAdams_by_Gage_Skidmore.jpg/375px-Rachel_McAdams_by_Gage_Skidmore.jpg', '1978-11-17 07:00:00', 'Canada', '2'),
('14', 'Chiwetel Ejiofor', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Chiwetel_Ejiofor_by_Gage_Skidmore.jpg/330px-Chiwetel_Ejiofor_by_Gage_Skidmore.jpg', '1977-07-10 07:00:00', 'Anh', '2'),
('15', 'Ryo Yoshizawa', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/MJK_07977_Ryo_Yoshizawa_%28Berlinale_2018%29.jpg/330px-MJK_07977_Ryo_Yoshizawa_%28Berlinale_2018%29.jpg', '1994-02-01 07:00:00', 'Nhật Bản', '3'),
('16', 'Tetsu Inada', 'https://m.media-amazon.com/images/M/MV5BMGM1ZWNlZmItZTQzMC00NDI1LTljNDYtNDJkZWZmYjg5Yjc2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UX214_CR0,0,214,317_AL_.jpg', '1972-07-01 07:00:00', 'Nhật Bản', '3'),
('17', 'Nobuhiko Okamoto', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSuyEpQ4T-f2CyOoA1SG4vYJfqwhu9De0nnBP7OyXd6uh7YCHt', '1986-10-24 07:00:00', 'Nhật Bản', '3'),
('2', 'Benedict Cumberbat', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe20WzHzT8bz29yR7iy9h9y3RdG7zskA3P--HS-kM_ClV9TSrF', '1976-07-19 07:00:00', 'Anh', '2'),
('3', 'Daiki Yamashita', 'https://cdn.myanimelist.net/images/voiceactors/1/57424.jpg', '1989-07-07 07:00:00', 'Nhật Bản', '3'),
('4', 'Isabella Sermon', 'https://litecelebrities.com/wp-content/uploads/2022/03/Isabella-Sermon-Image.jpg', '2006-07-08 07:00:00', 'Anh', '1'),
('5', 'Jeff Goldblum', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Jeff_Goldblum_by_Gage_Skidmore_3.jpg/330px-Jeff_Goldblum_by_Gage_Skidmore_3.jpg', '1952-10-22 07:00:00', 'Hoa Kỳ', '1'),
('6', 'Kristoffer Polaha', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kristoffer_Polaha_%285983197878%29.jpg/330px-Kristoffer_Polaha_%285983197878%29.jpg', '1977-02-18 07:00:00', 'Hoa Kỳ', '1'),
('7', 'Bryce Dallas Howard', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bryce_Dallas_Howard_June_2018.jpg/330px-Bryce_Dallas_Howard_June_2018.jpg', '1981-03-02 07:00:00', 'Hoa Kỳ', '1'),
('8', 'Sam Neill', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Sam_Neill_2017_%28cropped%29.jpg/330px-Sam_Neill_2017_%28cropped%29.jpg', '1947-09-14 07:00:00', 'Anh', '1'),
('9', 'Elizabeth Olsen', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Elizabeth_Olsen_by_Gage_Skidmore_2.jpg/375px-Elizabeth_Olsen_by_Gage_Skidmore_2.jpg', '1989-02-16 07:00:00', 'Hoa Kỳ', '2');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `doanh_thu`
--

CREATE TABLE `doanh_thu` (
  `id` varchar(10) NOT NULL,
  `ngay` datetime NOT NULL,
  `doanh_thu` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `doanh_thu`
--

INSERT INTO `doanh_thu` (`id`, `ngay`, `doanh_thu`) VALUES
('1', '2022-05-31 15:50:19', 5180),
('10', '2022-06-05 16:57:30', 2450),
('11', '2022-05-06 17:50:57', 16000),
('12', '2022-04-06 17:50:57', 12000),
('13', '2022-03-06 17:50:57', 15000),
('14', '2022-02-06 17:50:57', 42000),
('15', '2022-01-01 00:50:57', 34000),
('16', '2021-12-31 23:50:57', 44000),
('17', '2021-11-06 17:50:57', 29000),
('18', '2021-10-06 17:50:57', 35000),
('19', '2021-09-06 17:50:57', 41000),
('2', '2022-06-05 15:50:19', 4210),
('20', '2021-08-06 17:50:57', 33000),
('21', '2021-07-06 17:50:57', 41000),
('22', '2022-06-07 06:05:39', 3200),
('23', '2022-05-25 06:29:08', 1200),
('24', '2022-03-16 06:52:31', 4000),
('25', '2022-04-13 07:00:52', 13000),
('26', '2022-04-26 07:00:52', 10000),
('27', '2022-05-02 07:04:21', 10000),
('28', '2022-03-26 07:06:11', 20000),
('29', '2022-03-31 07:07:26', 6000),
('3', '2022-06-04 15:50:19', 4280),
('30', '2022-05-15 07:07:26', 8000),
('31', '2022-05-20 07:07:26', 6000),
('4', '2022-06-01 15:50:19', 6180),
('5', '2022-06-03 15:50:19', 4210),
('6', '2022-06-06 15:50:19', 4560),
('7', '2022-06-02 16:47:23', 350),
('8', '2022-06-02 16:47:23', 3500),
('9', '2022-06-04 16:56:46', 1200);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giao_dich`
--

CREATE TABLE `giao_dich` (
  `id` varchar(10) NOT NULL,
  `ngay` datetime NOT NULL,
  `id_user` varchar(10) NOT NULL,
  `so_tien` bigint(20) NOT NULL,
  `id_hang` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `giao_dich`
--

INSERT INTO `giao_dich` (`id`, `ngay`, `id_user`, `so_tien`, `id_hang`) VALUES
('1', '2022-06-03 00:00:00', '2', 3000, '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lich_chieu`
--

CREATE TABLE `lich_chieu` (
  `id` varchar(10) NOT NULL,
  `id_phim` varchar(10) NOT NULL,
  `thoi_gian_chieu` datetime NOT NULL,
  `room_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lich_chieu`
--

INSERT INTO `lich_chieu` (`id`, `id_phim`, `thoi_gian_chieu`, `room_id`) VALUES
('1', '1', '2022-06-07 10:00:00', '1'),
('10', '1', '2022-06-06 19:00:00', '1'),
('11', '3', '2022-06-05 23:00:00', '1'),
('12', '2', '2022-06-06 20:50:00', '1'),
('13', '2', '2022-06-06 21:55:00', '1'),
('14', '2', '2022-06-06 23:55:00', '1'),
('15', '1', '2022-06-07 09:00:00', '1'),
('16', '1', '2022-06-11 17:30:00', '1'),
('2', '2', '2022-06-05 10:00:00', '1'),
('3', '2', '2022-06-04 12:00:00', '1'),
('4', '3', '2022-06-04 20:00:00', '1'),
('5', '1', '2022-06-05 16:00:00', '1'),
('6', '5', '2022-06-04 18:00:00', '1'),
('7', '5', '2022-06-04 20:00:00', '1'),
('8', '1', '2022-06-05 12:00:00', '1'),
('9', '1', '2022-06-04 20:00:00', '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mat_hang`
--

CREATE TABLE `mat_hang` (
  `id_hang` varchar(10) NOT NULL,
  `ten` varchar(20) NOT NULL,
  `gia` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `mat_hang`
--

INSERT INTO `mat_hang` (`id_hang`, `ten`, `gia`) VALUES
('1', 'bap', 100);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ma_vach`
--

CREATE TABLE `ma_vach` (
  `id_ma_vach` varchar(10) NOT NULL,
  `id_giao_dich` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permision`
--

CREATE TABLE `permision` (
  `per_id` varchar(10) NOT NULL,
  `per_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `per_action`
--

CREATE TABLE `per_action` (
  `id` varchar(10) NOT NULL,
  `per_id` varchar(10) NOT NULL,
  `action_id` varchar(10) NOT NULL,
  `licensed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phim`
--

CREATE TABLE `phim` (
  `id_phim` varchar(10) NOT NULL,
  `ten_phim` text NOT NULL,
  `noi_dung` text NOT NULL,
  `thoi_luong` time NOT NULL,
  `so_sao` tinyint(4) NOT NULL,
  `nha_san_xuat` varchar(20) NOT NULL,
  `dao_dien` varchar(50) NOT NULL,
  `the_loai` varchar(20) NOT NULL,
  `trailer` varchar(1000) NOT NULL,
  `poster` varchar(1000) NOT NULL,
  `so_ve` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `phim`
--

INSERT INTO `phim` (`id_phim`, `ten_phim`, `noi_dung`, `thoi_luong`, `so_sao`, `nha_san_xuat`, `dao_dien`, `the_loai`, `trailer`, `poster`, `so_ve`) VALUES
('1', 'JURASSIC WORLD DOMINION', 'Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm chí còn có thể chạm tới. Owen Grady may mắn gặp lại cô khủng long mà anh và khán giả vô cùng yêu mến - Blue. Tuy nhiên, Blue không đi một mình mà còn đem theo một chú khủng long con khác. Điều này khiến Owen càng quyết tâm bảo vệ mẹ con cô được sinh sống an toàn. Thế nhưng, hai giống loài quá khác biệt. Liệu có thể tồn tại một kỷ nguyên mà khủng long và con người sống chung một cách hòa bình? Chris Pratt và Bryce Dallas Howard tiếp tục vào vai hai nhân vật chính Owen Grady và Claire Dearing. Ngoài ra, thật tuyệt vời khi Laura Dern, Sam Neill, Jeff Goldblum và BD Wong quay lại diễn những nhân vật thời Jurassic Parkl: Tiến sĩ Ellie Sattler, Tiến sĩ Alan Grant, Tiến sĩ Ian Malcolm và Tiến sĩ Henry Wu. ', '01:45:02', 9, 'Universal Pictures', 'Colin Trevorrow', 'Action, Horror', 'https://www.youtube.com/embed/X0Peh-AClUM', 'https://cafecomnerd.com.br/wp-content/uploads/2022/04/JURASSIC-WORLD-DOMINION-Novo-poster-divulgado-pela-Universal-Pictures-combina-passado-com-presente.jpg', 25000),
('2', 'Doctor Strange In The Multiverse Of Madness', 'Lỡ tay làm phép khiến đa vũ trụ nảy sinh vấn đề ở Spider-Man: No Way Home, Doctor Strange “trả nghiệp” thế nào trong Doctor Strange In The Multiverse Of Madness? Có thể nói, chưa bao giờ Stephen Strange phải đối mặt với nhiều mối nguy như hiện tại. “Scarlet Witch” Wanda Maximoff tẩy não cả thị trấn (WandaVision), Loki và Sylvie quậy tung Cơ quan quản lí phương sai \nthời gian (Loki) và đỉnh điểm là điều ước thay đổi quá nhiều lần của Spider-Man Peter Parker khiến mọi thứ vô cùng hỗn loạn. Cố gắng giải quyết vấn đề, Stephen Strange tìm đến Wanda, nhờ cô \ngiúp đỡ. Tuy nhiên, nữ phù thủy vừa trải qua nỗi đau mất đi những người thân yêu cộng thêm tâm tính bất ổn có phải là cộng sự thích hợp? Wanda đáng thương sẽ thành phản diện ở phần này? Người bạn cũ Mordo nay đã quay lưng và trở thành kẻ thù không đội trời chung với  Strange quay trở lại. Gần như chắc chắn, hắn là kẻ ngáng đường. Chưa dừng lại ở đó, một phiên bản hắc ám của Doctor Strange – mạnh hơn và điên cuồng hơn cũng góp mặt. Gã đến từ đâu và mục đích của gã là gì? Strange hắc ám này là Strange Supreme từng khuấy đảo series What If…? Bi đát hơn, cô người yêu \nChristine của Strange sắp bước vào lễ đường mà chú rể chẳng phải là anh.', '02:07:01', 9, 'Sam Raimi', 'Marvel Studios', 'Action, Horror', 'https://www.youtube.com/embed/ijQGIHy88JM', 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/278577098_385580690243466_9220501655297017119_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=of4j9HXv-qsAX8tNyQ-&_nc_ht=scontent.fdad3-6.fna&oh=00_AT_6-Ty-hrHGhqP9_bcL0QoXxYCYOKM8JBfooFaJYqYVQg&oe=62A8BC43', 100000),
('3', 'My Hero Academia: World Heroes\' Mission', 'Một nhóm những người chống đối những người có năng lực đã phá hủy một thành phố bằng việc giải phóng một loại khí, khiến cho tất cả năng lực của những người dân nơi đây bị vượt tầm kiểm soát, những người hùng vĩ đại nhất của Nhật Bản đã phân tán khắp thế giới để tìm kiếm kẻ cầm đầu và đưa hắn ta ra trước công lý. Là một phần của đội Endeavour, Deku, Bakugo và Todoroki đi đến quốc gia Otheon ở Châu Âu. Nhưng sau khi ngăn chặn một vụ cướp không thành công, Deku vô tình bị buộc tội giết người hàng loạt và đang chạy trốn với một tên tội phạm, cùng dưới sự truy đuổi gắt gao của cảnh sát và những kẻ khủng bố đang theo dõi mình.', '01:30:00', 9, 'Bones', 'Kenji Nagasaki', 'Anime', 'https://www.youtube.com/embed/XGUh4WeOJFw', 'https://truthan.vn/giai-cuu-the-gioi-phan-3/imager_42981.jpg', 40000),
('5', 'DORAEMON: NOBITA VÀ CUỘC CHIẾN VŨ TRỤ TÍ HON 2021', 'Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi, vốn là Tổng thống của hành tinh Pirika, chạy trốn tới Trái Đất để thoát khỏi những kẻ nổi loạn nơi quê nhà. Doraemon, Nobita và hội bạn thân dùng bảo bối đèn pin thu nhỏ biến đổi theo kích cỡ giống Papi để chơi cùng cậu bé. Thế nhưng, một tàu chiến không gian tấn công cả nhóm. Cảm thấy có trách nhiệm vì liên lụy mọi người, Papi quyết định một mình đương đầu với quân phiến loạn tàn ác. Doraemon và các bạn lên đường đến hành tinh Pirika, sát cánh bên người bạn của mình.', '01:39:00', 9, 'NB', 'Yamaguchi Susumu', 'Family, Anime', 'https://www.youtube.com/embed/bALKXsKhEEs', 'https://i.rada.vn/data/image/2022/04/21/Doraemon-Nobita-no-Little-Wars-1.jpg', 70000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `room`
--

CREATE TABLE `room` (
  `Room_Id` varchar(10) NOT NULL,
  `Room_Name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `room`
--

INSERT INTO `room` (`Room_Id`, `Room_Name`) VALUES
('1', 'Room1'),
('2', 'Room2'),
('3', 'Room3');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `seat`
--

CREATE TABLE `seat` (
  `Seat_Id` varchar(10) NOT NULL,
  `Room_Id` varchar(10) NOT NULL,
  `Room_Name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `seat`
--

INSERT INTO `seat` (`Seat_Id`, `Room_Id`, `Room_Name`) VALUES
('1', '1', 'A'),
('10', '1', 'J'),
('11', '2', 'A'),
('12', '2', 'B'),
('13', '2', 'C'),
('14', '2', 'D'),
('15', '2', 'E'),
('16', '2', 'F'),
('17', '2', 'G'),
('18', '2', 'H'),
('19', '2', 'I'),
('2', '1', 'B'),
('21', '2', 'J'),
('3', '1', 'C'),
('4', '1', 'D'),
('5', '1', 'E'),
('6', '1', 'F'),
('7', '1', 'G'),
('8', '1', 'H'),
('9', '1', 'I');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `seat_no`
--

CREATE TABLE `seat_no` (
  `Seat_Id` varchar(10) NOT NULL,
  `Seat_No` varchar(10) NOT NULL,
  `Status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `seat_no`
--

INSERT INTO `seat_no` (`Seat_Id`, `Seat_No`, `Status`) VALUES
('1', '1', 'NULL'),
('1', '2', '1'),
('1', '3', '1'),
('1', '4', 'NULL'),
('1', '5', '1'),
('1', '6', 'NULL'),
('1', '7', '1'),
('1', '8', 'NULL'),
('1', '9', 'NULL'),
('1', '10', 'NULL'),
('2', '3', '1'),
('2', '4', '1'),
('2', '5', 'NULL'),
('2', '6', 'NULL'),
('2', '7', '1'),
('2', '8', '1'),
('2', '9', 'NULL'),
('2', '10', 'NULL'),
('2', '2', 'NULL'),
('2', '1', 'NULL'),
('3', '3', 'NULL'),
('3', '4', '1'),
('3', '5', '1'),
('3', '6', '1'),
('3', '7', '1'),
('3', '8', '1'),
('3', '9', '1'),
('3', '10', 'NULL'),
('3', '2', '1'),
('3', '1', 'NULL'),
('4', '3', '1'),
('4', '4', '1'),
('4', '5', '1'),
('4', '6', '1'),
('4', '7', '1'),
('4', '8', 'NULL'),
('4', '9', 'NULL'),
('4', '10', 'NULL'),
('4', '2', 'NULL'),
('4', '1', 'NULL'),
('5', '3', 'NULL'),
('5', '4', '1'),
('5', '5', '1'),
('5', '6', '1'),
('5', '7', '1'),
('5', '8', '1'),
('5', '9', 'NULL'),
('5', '10', 'NULL'),
('5', '2', 'NULL'),
('5', '1', 'NULL'),
('6', '1', '1'),
('7', '1', '1'),
('8', '1', 'NULL'),
('9', '1', 'NULL'),
('10', '1', '1'),
('6', '2', 'NULL'),
('6', '3', '1'),
('6', '4', '1'),
('6', '5', '1'),
('6', '6', '1'),
('6', '7', 'NULL'),
('6', '8', 'NULL'),
('6', '9', '1'),
('6', '10', 'NULL'),
('7', '2', '1'),
('7', '3', '1'),
('7', '4', '1'),
('7', '5', '1'),
('7', '6', '1'),
('7', '7', '1'),
('7', '8', '1'),
('7', '9', '1'),
('7', '10', 'NULL'),
('8', '2', 'NULL'),
('8', '3', 'NULL'),
('8', '4', '1'),
('8', '5', '1'),
('8', '6', '1'),
('8', '7', 'NULL'),
('8', '8', 'NULL'),
('8', '9', '1'),
('8', '10', '1'),
('9', '2', '1'),
('9', '3', '1'),
('9', '4', '1'),
('9', '5', '1'),
('9', '6', '1'),
('9', '7', 'NULL'),
('9', '8', '1'),
('9', '9', '1'),
('9', '10', '1'),
('10', '2', 'NULL'),
('10', '3', 'NULL'),
('10', '4', '1'),
('10', '5', '1'),
('10', '6', 'NULL'),
('10', '7', '1'),
('10', '8', '1'),
('10', '9', '1'),
('10', '10', 'NULL');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thong_bao`
--

CREATE TABLE `thong_bao` (
  `id` varchar(10) NOT NULL,
  `ngay` datetime NOT NULL,
  `noi_dung` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thong_bao`
--

INSERT INTO `thong_bao` (`id`, `ngay`, `noi_dung`) VALUES
('1', '2022-05-24 00:00:00', 'thong bao ngay 25 da update'),
('2', '2022-05-25 00:00:00', 'thong bao ngay 25'),
('3', '2022-05-27 00:00:00', 'dasdasdsadsad'),
('4', '2022-05-27 00:00:00', 'alo 123'),
('5', '2022-05-29 00:00:00', 'gi v troi'),
('6', '2022-05-29 00:00:00', 'sadasda'),
('7', '2022-05-29 09:45:48', 'eiyo'),
('8', '2022-05-29 22:57:23', 'hehe'),
('9', '2022-06-04 08:40:36', 'm\n');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `ID_User` varchar(10) NOT NULL,
  `User_Name` varchar(30) NOT NULL,
  `User_Password` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone_Number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`ID_User`, `User_Name`, `User_Password`, `Email`, `Phone_Number`) VALUES
('1', 'Luu Van Nghia', '0011', 'luuvannghia@gmail.com', '0912343452'),
('2', 'Phan Huu Minh Tri', '002002', 'phanhuuminhtri@gmail.com', '0928123413'),
('3', 'Bui Duy Phuong', '003003', 'buiduyphuong@gmail.com', '0909239221'),
('4', 'Ho Minh Hieu', '0011', 'oppahd96@gmail.com', '0928488738'),
('5', 'Tran Xuan Trong', '01', 'TranXuanTrong@gmail.com', '0123456788'),
('6', 'Hoang Trong Thai', '011', 'htthai@gmail.com', '0123456788'),
('7', 'Dinh Gia Bao', '012', 'DinhGiaBao@gmail.com', '0927382134'),
('8', 'Duy Hoa', '014', 'DuyHoa@gmail.com', '0123456783'),
('9', 'Thai Van Tho', '016', 'thaivantho@gmail.com', '0909239222');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_per`
--

CREATE TABLE `user_per` (
  `id` varchar(10) NOT NULL,
  `user_id` varchar(10) NOT NULL,
  `per_id` varchar(10) NOT NULL,
  `licensed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`action_id`);

--
-- Chỉ mục cho bảng `dien_vien`
--
ALTER TABLE `dien_vien`
  ADD PRIMARY KEY (`id_dien_vien`),
  ADD KEY `id_phim` (`id_phim`);

--
-- Chỉ mục cho bảng `doanh_thu`
--
ALTER TABLE `doanh_thu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `giao_dich`
--
ALTER TABLE `giao_dich`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_hang` (`id_hang`);

--
-- Chỉ mục cho bảng `lich_chieu`
--
ALTER TABLE `lich_chieu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_phim` (`id_phim`),
  ADD KEY `room_id` (`room_id`);

--
-- Chỉ mục cho bảng `mat_hang`
--
ALTER TABLE `mat_hang`
  ADD PRIMARY KEY (`id_hang`);

--
-- Chỉ mục cho bảng `ma_vach`
--
ALTER TABLE `ma_vach`
  ADD PRIMARY KEY (`id_ma_vach`),
  ADD KEY `id_giao_dich` (`id_giao_dich`);

--
-- Chỉ mục cho bảng `permision`
--
ALTER TABLE `permision`
  ADD PRIMARY KEY (`per_id`);

--
-- Chỉ mục cho bảng `per_action`
--
ALTER TABLE `per_action`
  ADD PRIMARY KEY (`id`),
  ADD KEY `per_id` (`per_id`),
  ADD KEY `action_id` (`action_id`);

--
-- Chỉ mục cho bảng `phim`
--
ALTER TABLE `phim`
  ADD PRIMARY KEY (`id_phim`);

--
-- Chỉ mục cho bảng `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`Room_Id`);

--
-- Chỉ mục cho bảng `seat`
--
ALTER TABLE `seat`
  ADD PRIMARY KEY (`Seat_Id`),
  ADD KEY `Room_Id` (`Room_Id`);

--
-- Chỉ mục cho bảng `thong_bao`
--
ALTER TABLE `thong_bao`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_User`);

--
-- Chỉ mục cho bảng `user_per`
--
ALTER TABLE `user_per`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `per_id` (`per_id`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `dien_vien`
--
ALTER TABLE `dien_vien`
  ADD CONSTRAINT `dien_vien_ibfk_1` FOREIGN KEY (`id_phim`) REFERENCES `phim` (`id_phim`);

--
-- Các ràng buộc cho bảng `giao_dich`
--
ALTER TABLE `giao_dich`
  ADD CONSTRAINT `giao_dich_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`ID_User`),
  ADD CONSTRAINT `giao_dich_ibfk_2` FOREIGN KEY (`id_hang`) REFERENCES `mat_hang` (`id_hang`);

--
-- Các ràng buộc cho bảng `lich_chieu`
--
ALTER TABLE `lich_chieu`
  ADD CONSTRAINT `lich_chieu_ibfk_1` FOREIGN KEY (`id_phim`) REFERENCES `phim` (`id_phim`),
  ADD CONSTRAINT `lich_chieu_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`Room_Id`);

--
-- Các ràng buộc cho bảng `ma_vach`
--
ALTER TABLE `ma_vach`
  ADD CONSTRAINT `ma_vach_ibfk_1` FOREIGN KEY (`id_giao_dich`) REFERENCES `giao_dich` (`id`);

--
-- Các ràng buộc cho bảng `per_action`
--
ALTER TABLE `per_action`
  ADD CONSTRAINT `per_action_ibfk_1` FOREIGN KEY (`per_id`) REFERENCES `permision` (`per_id`),
  ADD CONSTRAINT `per_action_ibfk_2` FOREIGN KEY (`action_id`) REFERENCES `action` (`action_id`);

--
-- Các ràng buộc cho bảng `seat`
--
ALTER TABLE `seat`
  ADD CONSTRAINT `seat_ibfk_1` FOREIGN KEY (`Room_Id`) REFERENCES `room` (`Room_Id`);

--
-- Các ràng buộc cho bảng `seat_no`
--
ALTER TABLE `seat_no`
  ADD CONSTRAINT `seat_no_ibfk_1` FOREIGN KEY (`Seat_Id`) REFERENCES `seat` (`Seat_Id`);

--
-- Các ràng buộc cho bảng `user_per`
--
ALTER TABLE `user_per`
  ADD CONSTRAINT `user_per_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`ID_User`),
  ADD CONSTRAINT `user_per_ibfk_2` FOREIGN KEY (`per_id`) REFERENCES `permision` (`per_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
