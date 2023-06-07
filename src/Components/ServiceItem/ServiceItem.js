import './strviceitem.scss'

function ServiceItem ({title, image, link, alt}) {
	return (
		<div className='service-item'>
			<div className="block-service-item">
				<a href={link}>
				<img src={image} alt={alt} />
					<div className="text" >{title}</div>
					
				</a>
			</div>


		</div>
	)
}

export default ServiceItem;