import React, {useState} from 'react'
import '../Tekstolit/tekstolit.scss';
import Rowprice from '../../../Components/TablePrice/Rowprice';

function OrgskloPrice ({column1, column2, column3,column4}) {

	const [clas, setClas] = useState(false);

	function active () {
		setClas(clas => !clas);
	}

	return (
	<div>
		<div className="price-block"> 
			<div className="price-item-head" onClick={active}>Оргскло</div>
			<div className={`price-item ${clas ? 'active' : ''}`}>
				<div className="price-item-row">
					<Rowprice 
					column1="Наіменування" 
					column2="Товщина" 
					column3="од. виміру"
					column4="Ціна з пдв"
					/>
					<Rowprice 
					column1="Оргскло лист 2050х1250" 
					column2="1 мм" 
					column3="лист"
					column4="996 грн"
					/>
					<Rowprice 
					column1="Оргскло лист 2050х3050" 
					column2="2 мм" 
					column3="лист"
					column4="3 850 грн"
					/>
					<Rowprice 
					column1="Оргскло лист 2050х3050" 
					column2="3 мм" 
					column3="лист"
					column4="5 700 грн"
					/>
					<Rowprice 
					column1="Оргскло лист 2050х3050" 
					column2="4 мм" 
					column3="лист"
					column4="7 500 грн"
					/>
					<Rowprice 
					column1="Оргскло лист 2050х3050" 
					column2="5 мм" 
					column3="лист"
					column4="9 500 грн"
					/>
					<Rowprice 
					column1="Оргскло лист 2050х3050" 
					column2="6 мм" 
					column3="лист"
					column4="11 400 грн"
					/>
					<Rowprice 
					column1="Оргскло лист 2050х3050" 
					column2="8 мм" 
					column3="лист"
					column4="15 200 грн"
					/>
					<Rowprice 
					column1="Оргскло лист 2050х3050" 
					column2="10 мм" 
					column3="лист"
					column4="19 000 грн"
					/>
				</div>
			</div>
			
		</div>
	</div>
	)
}

export default OrgskloPrice;