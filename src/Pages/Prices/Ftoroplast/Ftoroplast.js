import React, {useState} from 'react'
import Rowprice from '../../../Components/TablePrice/Rowprice';

function Ftoroplast
 ({column1, column2, column3,column4}) {

	const [clas, setClas] = useState(false);

	function active () {
		setClas(clas => !clas);
	}

	return (
	<div>
		<div className="price-block"> 
		<div className={`price-item-head ${clas ? 'active' : ''}`} onClick={active}><div></div>Фторопласт</div>
			<div className={`price-item ${clas ? 'active' : ''}`}>
				<div className="price-item-row">
					<Rowprice 
						column1="Наіменування" 
						column2="Розміри" 
						column3="од. виміру"
						column4="Ціна"
					/>
					<Rowprice 
						column1="Лист" 
						column2="2-20 мм" 
						column3="кг"
						column4="550 грн"
					/>
					<Rowprice 
						column1="Стрижні" 
						column2="20-200 мм" 
						column3="кг"
						column4="550 грн"
					/>
				</div>
			</div>
		</div>
	</div>
	)
};

export default Ftoroplast
;