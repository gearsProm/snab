import React, {useState} from 'react'


function Ftoroplast
 ({column1, column2, column3,column4}) {

	const [clas, setClas] = useState(false);

	function active () {
		setClas(clas => !clas);
	}

	return (
	<div>
		<div className="price-block"> 
		<div className="price-item-head" onClick={active}>Фторопласт</div>
			<div className={`price-item ${clas ? 'active' : ''}`}>
				<div className="price-item-row">
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
				</div>
				<div className="price-item-row">
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
				</div>
				
			</div>
		</div>
	</div>
	)
}

export default Ftoroplast
;