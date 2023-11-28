create schema weather;
use weather;

create table relative_humidity
(humidity int not null);

insert into relative_humidity values
(88),
(89),
(87),
(87),
(88),
(89),
(89),
(90),
(90),
(88),
(81),
(74),
(65),
(62),
(67),
(68),
(68),
(73),
(75),
(77),
(84),
(85),
(85),
(86),
(85),
(84),
(88),
(89),
(89),
(88),
(87),
(87),
(87),
(81),
(76),
(69),
(72),
(74),
(69),
(71),
(73),
(72),
(73),
(76),
(82),
(84),
(85),
(87),
(88),
(89),
(89),
(89),
(89),
(90),
(90),
(89),
(87),
(83),
(79),
(75),
(72),
(72),
(78),
(76),
(77),
(77),
(79),
(80),
(82),
(84),
(86),
(87),
(88),
(88),
(89),
(90),
(91),
(89),
(87),
(87),
(90),
(82),
(75),
(70),
(67),
(63),
(62),
(62),
(63),
(66),
(71),
(76),
(84),
(86),
(88),
(89),
(89),
(90),
(89),
(90),
(91),
(92),
(92),
(91),
(86),
(81),
(77),
(71),
(67),
(64),
(59),
(60),
(60),
(62),
(64),
(70),
(80),
(84),
(87),
(88),
(88),
(89),
(90),
(91),
(92),
(92),
(92),
(92),
(89),
(83),
(77),
(68),
(65),
(64),
(64),
(65),
(67),
(68),
(72),
(75),
(78),
(82),
(85),
(86),
(87),
(88),
(90),
(90),
(91),
(92),
(92),
(93),
(88),
(83),
(76),
(70),
(64),
(62),
(57),
(56),
(57),
(60),
(64),
(70),
(80),
(84),
(87),
(88),
(86),
(86),
(88),
(88),
(89),
(90),
(91),
(91),
(89),
(82),
(76),
(67),
(60),
(55),
(56),
(54),
(56),
(59),
(64),
(70),
(72),
(77),
(80),
(82),
(84),
(85),
(86),
(87),
(87),
(88),
(88),
(89),
(85),
(80),
(74),
(69),
(65),
(63),
(60),
(60),
(64),
(69),
(71),
(73),
(76),
(79),
(81),
(82),
(83),
(84),
(86),
(86),
(86),
(86),
(86),
(86),
(85),
(80),
(73),
(67),
(62),
(60),
(57),
(57),
(64),
(71),
(73),
(74),
(77),
(79),
(80),
(81);

create table direct_radiation
(radiation float not null);

insert into direct_radiation values
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(13),
(78),
(213),
(264),
(381),
(389),
(319),
(270),
(177),
(145),
(55),
(1),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(17),
(103),
(224),
(415),
(423),
(332),
(281),
(292),
(159),
(90),
(34),
(1),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(17),
(109),
(235),
(355),
(418),
(405),
(263),
(227),
(127),
(88),
(30),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(17),
(141),
(251),
(433),
(507),
(611),
(593),
(478),
(411),
(286),
(141),
(22),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(57),
(198),
(358),
(500),
(597),
(554),
(575),
(528),
(444),
(339),
(163),
(25),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(64),
(208),
(334),
(552),
(624),
(565),
(477),
(400),
(388),
(267),
(145),
(24),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(45),
(180),
(358),
(499),
(547),
(621),
(628),
(584),
(406),
(126),
(18),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(1),
(74),
(273),
(443),
(582),
(663),
(706),
(680),
(615),
(431),
(292),
(156),
(16),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(43),
(216),
(366),
(503),
(570),
(668),
(611),
(626),
(472),
(289),
(136),
(12),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(0),
(21),
(179),
(345),
(371),
(230),
(197),
(293),
(407),
(360),
(179),
(39),
(4),
(0),
(0),
(0),
(0);

create table daily_temperature
(
type char(3) not null,
temperature float not null
);

insert into daily_temperature values
('max', 31.2),
('min', 26.5),
('max', 30.5),
('min', 27),
('max', 30.2),
('min', 26.8),
('max', 31.4),
('min', 26.3),
('max', 32.1),
('min', 26.8),
('max', 31.7),
('min', 26.7),
('max', 32.9),
('min', 27.2),
('max', 32.5),
('min', 26.5),
('max', 32.3),
('min', 27.1),
('max', 32.2),
('min', 26.9);

select * from daily_temperature;




