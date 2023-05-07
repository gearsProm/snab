
import React, {useState} from 'react'
import './head.scss';

//import logo from './head-img/Logo - sign.png'

function Head () {

	const [clas, setClas] = useState(false);

	function active () {
		setClas(clas => !clas);
	}

	const [sub, setSub] = useState(false);

	function submenu () {
		setSub(sub => !sub);
	}
	
	

	return (
		<div>
			<div className="head_head">

				<div className="head_logo"><img src={require('./head-img/Logo - sign.png')} /></div>
				<div className="head_menu">
				
					<nav className={`nav ${clas ? 'active' : ''}`}>
						
						<div className="nav_menu">
							
							<ul className="nav_list">
								<li className="nav_item">
									<a href="/" className="nav_link">Головна</a>
								</li>
								<li className="nav_item">
									<a href="" className="nav_link">Послуги</a>
								</li>
								<li className="nav_item" onClick={submenu}>
									<a href="#" className="nav_link">Каталог товарів</a>
										<ul className={`sub-menu ${sub ? 'sub' : ''}`} >
											<li className="sub-item">
												<a href="" className="sub-link">Капролон</a>
											</li>
											<li className="sub-item">
												<a href="" className="sub-link">Фторопласт</a>
											</li>
											<li className="sub-item">
												<a href="" className="sub-link">Фторопласт</a>
											</li>
											<li className="sub-item">
												<a href="" className="sub-link">Фторопласт</a>
											</li>
											<li className="sub-item">
												<a href="" className="sub-link">Фторопласт</a>
											</li>
											<li className="sub-item">
												<a href="" className="sub-link">Фторопласт</a>
											</li>
											<li className="sub-item">
												<a href="" className="sub-link">Фторопласт</a>
											</li>
										</ul>
								</li>
								<li className="nav_item">
									<a href="/price" className="nav_link">Прайс</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div className="head_contact">
					<a href="viber"><img src={require('./head-img/viber.png')} /></a>
					<a href="telephone"><img src={require('./head-img/telephone.png')} /></a>
					<a href="telegram"><img src={require('./head-img/telegram.png')} /></a>
				

				</div>
				<div className={`burger-menu ${clas ? 'active' : ''}`} onClick={active}>
					<span></span>
				</div>
			</div>
		</div>
	)
}

export default Head;