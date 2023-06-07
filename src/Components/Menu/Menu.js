import React, { useState } from 'react';

const Menu = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const handleSubMenuClick = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div>
      <div onClick={handleSubMenuClick}>Головне меню</div>
      {isSubMenuOpen && <div>Випадаюче підменю
			<ul>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
			</ul>
			</div>}
    </div>
  );
};



<li className="nav_item">
<a href="#" className="nav_link">
	Послуги
</a>
<ul className="sub-menu">
	<li className="sub-item">
		<a href="/ua/lazernaya-rezka-akrila" className="sub-link">
			Лазерна різка оргскла
		</a>
	</li>
	<li className="sub-item">
		<a href="/ua/rezka-faneri" className="sub-link">
			Лазерна різка фанери та ДВП
		</a>
	</li>
	<li className="sub-item">
		<a href="/ua/laser-gravirovka" className="sub-link">
			Лазерна гравірування
		</a>
	</li>
</ul>
</li>
<li className="nav_item" onClick={submenu}>
<a href="#" className="nav_link">
	Каталог товарів
</a>
<ul className={`sub-menu ${sub ? "sub" : ""}`}>
	<li className="sub-item">
		<a href="/ua/prays-orgsteklo" className="sub-link">
			Оргскло
		</a>
	</li>
	<li className="sub-item">
		<a href="" className="sub-link">
			Капролон
		</a>
	</li>
	<li className="sub-item">
		<a href="/ua/ftoroplast" className="sub-link">
			Фторопласт
		</a>
	</li>
	<li className="sub-item">
		<a href="" className="sub-link">
			Текстоліт
		</a>
	</li>
</ul>
</li>