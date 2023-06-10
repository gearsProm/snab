import React, {useState} from 'react'
import Rowprice from "../../Components/TablePrice/Rowprice";

function LaserCutPrice () {
	const [clas, setClas] = useState(false);

	function active () {
		setClas(clas => !clas);
	}
	return (
		<div>
			<div className="price-block"> 
				<h3 className={`price-item-head ${clas ? 'active' : ''}`} onClick={active}><div></div>Лазерна різка оргскла</h3>
				<div className={`price-item ${clas ? 'active' : ''}`}>
					<div className="price-item-row">
						<Rowprice 
							column1="Товщина оргскла" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
						<Rowprice 
							column1="1.0 мм" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
						<Rowprice 
							column1="1.5 мм" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
						<Rowprice 
							column1="2.0 мм" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
						<Rowprice 
							column1="3.0 мм" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
						<Rowprice 
							column1="4.0 мм" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
						<Rowprice 
							column1="5.0 мм" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
						<Rowprice 
							column1="6.0 мм" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
						<Rowprice 
							column1="8.0 мм" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
						<Rowprice 
							column1="10.0 мм" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
						<Rowprice 
							column1="15.0 мм" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
						<Rowprice 
							column1="20.0 мм" 
							column2="Ціна до 100 м.п" 
							column3="Ціна до 500 м.п"
							column4="Ціна від 1000 м.п"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LaserCutPrice;