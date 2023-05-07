import React, {useState} from 'react'
import './tekstolit.scss';
import Rowprice from '../Rowprice';

function Tekstolit ({column1, column2, column3,column4}) {

	const [clas, setClas] = useState(false);

	function active () {
		setClas(clas => !clas);
	}

	return (
	<div>
		<div className="price-block"> 
			<h3 className="price-item-head" onClick={active}>Текстоліт</h3>
			<div className={`price-item ${clas ? 'active' : ''}`}>
				<div className="price-item-row">
					<Rowprice 
					column1="Наіменування" 
					column2="Товщина" 
					column3="од. виміру"
					column4="Ціна з пдв"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="2 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="3 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="4 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="5 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="6 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="8 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="10 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="15 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="20 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="25 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="30 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="40 мм" 
					column3="кг"
					column4="220.00"
					/>
					<Rowprice 
					column1="Текстоліт ПТ лист 1000х2000" 
					column2="50 мм" 
					column3="кг"
					column4="220.00"
					/>
				</div>
			</div>
			
		</div>
	</div>
	)
}

export default Tekstolit;