import React, {useState} from 'react'
import './price.scss';
import Rowprice from './Rowprice';
import Tekstolit from './Tekstolit/Tekstolit';
import Ftoroplast from './Ftoroplast/Ftoroplast';
import Orgsklo from './Orgsklo/Orgsklo';

function Price () {

	const [clas, setClas] = useState(false);

	function activePrice () {
		setClas(clas => !clas);
	}
	return (
		<div className="price">
			<h1 className="price-head">Прайс</h1>
			<div className="price-table">
			<Orgsklo />
			<Tekstolit />
			<Ftoroplast />
			</div>
		</div>
	)
}

export default Price;