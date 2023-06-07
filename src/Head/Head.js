import React, { useState } from "react";
import "./head.scss";
//import Menu from '../Components/Menu/Menu'
//import logo from './head-img/Logo - sign.png'

let mmm = "";
let changeMenu= "";


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

if (isMobile.any()) {
	mmm = "touch";
	changeMenu= false;
} else {
	mmm = "mouse";
	
	changeMenu = true;
}
	//--------test--------

	
	const Submenu = ({ sublink, subname }) => {
		return (
			<li className="sub-item">
				<a href={sublink} className="sub-link">
					{subname}
				</a>
			</li>
		);
	};
	let Menu = ({ name }) => {
		let [isSubMenuOpen, setSubMenuOpen] = useState(changeMenu);
	
		let handleSubMenuClick = () => {
			setSubMenuOpen(!isSubMenuOpen);
		};
	
		return (
			<li className="nav_item">
				<a href="#" className="nav_link" onClick={handleSubMenuClick}>
					{name}
				</a>
	
				{isSubMenuOpen && (
					<ul className="sub-menu">
						<Submenu subname="Лазерна різка оргскла" sublink="/ua/lazernaya-rezka-akrila" />
						<Submenu subname="Лазерна різка фанери та ДВП" sublink="/ua/rezka-faneri" />
						<Submenu subname="Лазерна гравірування" sublink="/ua/laser-gravirovka" />
						<Submenu subname="Виготовлення виробів" sublink="/ua/yslygi" />
					</ul>
				)}
			</li>
		);
	};
	const Menu2 = ({ name }) => {
		const [isSubMenuOpen, setSubMenuOpen] = useState(changeMenu);
	
		const handleSubMenuClick = () => {
			setSubMenuOpen(!isSubMenuOpen);
		};
	
		return (
			<li className="nav_item">
				<a href="#" className="nav_link" onClick={handleSubMenuClick}>
					{name}
				</a>
	
				{isSubMenuOpen && (
					<ul className="sub-menu">
					<Submenu subname="Оргскло" sublink="/ua/prays-orgsteklo" />
					<Submenu subname="Капролон" sublink="/ua/kaprolon-v-sterzhnyakh" />
					<Submenu subname="Фторопласт" sublink="/ua/ftoroplast" />
					<Submenu subname="Текстоліт" sublink="/ua/laser-gravirovka" />
				</ul>
				)}
			</li>
		);
	};
	//--------------------

function Head() {
	const [clas, setClas] = useState(false);

	function active() {
		setClas((clas) => !clas);
	}

	const [sub, setSub] = useState(false);

	function submenu() {
		setSub((sub) => !sub);
	}

	return (
		<div>
			<div className={`head_head ${mmm}`}>
				<a href="/ua">
					<div className="head_logo">
						<img src={require("./head-img/Logo - sign.png")} />
					</div>
				</a>

				<div className="head_menu">
					<nav className={`nav ${clas ? "active" : ""}`}>
						<div className="nav_menu">
							<ul className="nav_list">
								<Menu name="Послуги"/>
								<Menu2 name="Каталог товарів"/>
							
								<li className="nav_item">
									<a href="/ua/price" className="nav_link">
										Ціни
									</a>
								</li>
								<li className="nav_item">
									<a href="/ua/" className="nav_link">
										Блог
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div className="head_contact">
					<a href="tel:+380671275775">
						<img src={require("./head-img/telephone.png")} />
					</a>
					<a
						href="//t.me/PromPostach"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={require("./head-img/telegram.png")} />
					</a>
					<a href="viber://chat?number=%2B380504625083">
						<img src={require("./head-img/viber.png")} />
					</a>
				</div>
				<div className={`burger-menu ${clas ? "active" : ""}`} onClick={active}>
					<span></span>
				</div>
			</div>
		</div>
	);
}

export default Head;
