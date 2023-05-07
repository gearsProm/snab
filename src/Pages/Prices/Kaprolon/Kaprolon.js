import React, {useState} from 'react'
import './tekstolit.scss';
import Rowprice from '../Rowprice';

function Orgsklo ({column1, column2, column3,column4}) {

	const [clas, setClas] = useState(false);

	function active () {
		setClas(clas => !clas);
	}

	return (
	<div>
		<div className="price-block"> 
			<div className="price-item-head" onClick={active}>Текстоліт</div>
			<div className={`price-item ${clas ? 'active' : ''}`}>
				<div className="price-item-row">
					<Rowprice 
					column1="Наіменування" 
					column2="Товщина" 
					column3="од. виміру"
					column4="Ціна з пдв"
					/>
					<Rowprice 
					column1="Оргскло лист 2050х3050" 
					column2="2 мм" 
					column3="м2"
					column4="1000"
					/>
				</div>
			</div>
			
		</div>
	</div>
	)
}

