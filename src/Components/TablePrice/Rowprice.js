import './rowprice.scss';

function Rowprice({column1, column2, column3,column4}) {
	return (
		<div className="row-price">
			<div>{column1}</div>
			<div>{column2}</div>
			<div>{column3}</div>
			<div>{column4}</div>
		</div>
	)
}

export default Rowprice;