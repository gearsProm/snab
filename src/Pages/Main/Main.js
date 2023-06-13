import './main.scss';
import '../pages.scss';

import ServiceItem from '../../Components/ServiceItem/ServiceItem';
import HelmetPage from '../../Components/Helmet/Helmet';
import myImage from './rezka-fanery1b 3.jpg'
import swm from './5477.jpg'
//-------------
import grushev from './main_pages/grushevskiy.jpg'
import map from './main_pages/map_ua.jpg'
import squirrel from './main_pages/squirrel.jpg'
import box from './main_pages/box.jpg'
import cactus from './main_pages/cactus.jpg'
import kaprolon from './main_pages/kaprolon.jpg'



function Main () {
	return (
		<div >
			<HelmetPage 
			title="Продаж та виготовлення виробів з оргскла"
			description="Продаж, різка, листового акрілу, текстолітів, капролона 050 462-50-83"
			keywords=" "/>
			<div className="main-head">
				<div className="main-head-title container">
					<h1>Лазерна порізка та гравіювання</h1>
					<div className="main-head-text">
						<div className="text-item">Професійний підхід</div>
						<div className="text-item">Понад 20 років на ринку</div>
						<div className="text-item">Швидко та якісно</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="main-title">
				<div className="main-title-head">
					<h2>Ласкаво просимо до нас на сайт!</h2>
				</div>
				<div className="main-title-text">
					<p>
					Ми є одним з найкращих підприємств України з обробки лазером акрилу та пропонуємо свої послуги всім, кому потрібно якісно обробити акрил (оргскло). Ми існуємо на ринку з 1996 року і також спеціалізуємося на продажу, різанні та виробах з оргскла. Реалізуємо текстоліт, капролон та пароніт.
					</p>
					<p>
					У нас можна купити або замовити продукцію високої якості, використовуючи яку Ви здійсните виготовлення надійних конструкцій рекламного та іншого призначення. Наші матеріали підходять для сувенірів, реклами та технічних конструкцій, а листові пластики характеризуються міцністю та стійкістю, із тривалим експлуатаційним терміном.
					</p>
				</div>
				</div>
				<div className="main-services">
				<h2>Наші послуги!</h2>
				<div className="main-services-block">
					
					<ServiceItem 
					title="Лазерна різка фанери" 
					link="/ua/rezka-faneri"
					image={map} 
					alt="Різка лазером"
					/>
					<ServiceItem 
					title="Лазерне гравірування" 
					link="/ua/laser-gravirovka"
					image={grushev} 
					alt="Різка лазером"
					/>
					<ServiceItem 
					title="Капролон стрижні" 
					link="/ua/kaprolon-v-sterzhnyakh"
					image={kaprolon} 
					alt="капролон"
					/>
					<ServiceItem 
					title="Вироби з оргскла" 
					link="/ua/yslygi"
					image={cactus} 
					alt="кактус з арілу"
					/>
					
				</div>
				</div>
				<div className="main-services-block  main-works">
						
							<h3>
								Портфоліо робіт
							</h3>
							<ServiceItem 
								title="В розробці" 
								link=" "
								image={box} 
								alt="шкатулка з фанери"
							/>
							<ServiceItem 
								title="В розробці" 
								link=" "
								image={box} 
								alt="шкатулка з фанери"
							/>
							<ServiceItem 
								title="В розробці" 
								link=" "
								image={box} 
								alt="шкатулка з фанери"
							/>
						
				</div>
			</div>
		</div>
	)
}

export default Main;