import React, {useState} from 'react'
import '../Tekstolit/tekstolit.scss';
import Rowprice from '../../../Components/TablePrice/Rowprice';

function KaprolonPrice ({column1, column2, column3,column4}) {

	const [clas, setClas] = useState(false);

	function active () {
		setClas(clas => !clas);
	}

	return (
	<div>
		<div className="price-block"> 
			<div className="price-item-head" onClick={active}>Капролон стрижні</div>
			<div className={`price-item ${clas ? 'active' : ''}`}>
				<div className="price-item-row">
					<Rowprice 
					column1="Диаметр стрижня" 
					column2="од. виміру" 
					column3="Вага"
					column4="Ціна з пдв за 1 кг"
					/>
					<Rowprice 
					column1="20 мм" 
					column2="кг" 
					column3="0,5 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="25 мм" 
					column2="кг" 
					column3="0,7 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="30 мм" 
					column2="кг" 
					column3="1.0 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="35 мм" 
					column2="кг" 
					column3="1.5 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="40 мм" 
					column2="кг" 
					column3="1.8 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="50 мм" 
					column2="кг" 
					column3="2.6 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="60 мм" 
					column2="кг" 
					column3="3.5 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="70 мм" 
					column2="кг" 
					column3="5.2 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="80 мм" 
					column2="кг" 
					column3="6.4 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="90 мм" 
					column2="кг" 
					column3="9.6 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="100 мм" 
					column2="кг" 
					column3="10.2 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="110 мм" 
					column2="кг" 
					column3="11.1 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="120 мм" 
					column2="кг" 
					column3="15.2 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="130 мм" 
					column2="кг" 
					column3="17.2 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="140 мм" 
					column2="кг" 
					column3="19.2 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="150 мм" 
					column2="кг" 
					column3="21 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="160 мм" 
					column2="кг" 
					column3="25 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="170 мм" 
					column2="кг" 
					column3="28 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="180 мм" 
					column2="кг" 
					column3="32 кг"
					column4="249,60"
					/>
					<Rowprice 
					column1="200 мм" 
					column2="кг" 
					column3="41 кг"
					column4="249,60"
					/>
				</div>
			</div>
			
		</div>
	</div>
	)
};

export default KaprolonPrice;
