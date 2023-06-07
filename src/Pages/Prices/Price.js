import React, {useState} from 'react'
import './price.scss';
import Rowprice from '../../Components/TablePrice/Rowprice';
import HelmetPage from '../../Components/Helmet/Helmet';

import Ftoroplast from './Ftoroplast/Ftoroplast';
import OrgskloPrice from './Orgsklo/Orgsklo';
import TekstolitPrice from './Tekstolit/Tekstolit'
import LaserCutPrice from '../LaserRezkaAkril/LaserCutPrice';
import KaprolonPrice from './KaprolonPrice/KaprolonPrice';
function Price () {
	const [clas, setClas] = useState(false);

	function activePrice () {
		setClas(clas => !clas);
	}
	return (
		<div className="price">
			<HelmetPage 
			title="Прайс-лист. Ціни на оргскло, текстоліт, капролон та послуги"
			description="Привабливи ціни на матеріали та послуги по обробці оргскла"
			keywords="оргскло акріл текстоліт капролон лазерна різка"/>
			<h1 className="price-head">Прайс</h1>
			<div className="price-table">
			<OrgskloPrice />
			<KaprolonPrice />
			<TekstolitPrice />
			<Ftoroplast />
			<LaserCutPrice />
			</div>
		</div>
	)
}

export default Price;