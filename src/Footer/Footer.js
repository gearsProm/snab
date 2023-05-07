import './footer.scss';

function Footer () {
	return (
		<div className="footer_footer">
			<div className="footer_container">
				<div className="footer"></div>
				<div className="footer_bg"></div>
				<div className="footer_content">
					<div className="footer_info">
						<div className="footer_head">Наші контакти</div>
						<div className="footer-info_title">Ми працюємо з 8:30 - 17:00</div>
					</div>	
					<div className="footer-info_contact">
						<div className="footer-info_item">
							<div className="footer-icon">
							<img src={require('./footer_img/Location.png')} />
							</div>
							<a href="https://maps.google.com/maps?ll=50.522475,30.480653&z=15&t=m&hl=ru&gl=US&mapclient=embed&cid=7827649011644501388" target="_blank" rel="nofollow"><div className="footer-href">м. Київ, вул. Кемеровська, 6</div></a>
						</div>
						<div className="footer-info_item">
							<div className="footer-icon">
							<img src={require('./footer_img/Mail.png')} />
							</div>
							<a href="mail"><div className="footer-href">info@snab.kiev.ua</div></a>
						</div>
						<div className="footer-info_item">
							<div className="footer-icon">
							<img src={require('./footer_img/Phone.png')} />
							</div>
							<a href="telephone"><div className="footer-href">050 462 50 83</div></a>
						</div>
						</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;