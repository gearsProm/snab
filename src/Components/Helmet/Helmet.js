import { Helmet } from 'react-helmet';

function HelmetPage({title, description, keywords, link, utf}) {
	return (
	  <div>
		 <Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
		 </Helmet>
	  </div>
	);
 }

 export default HelmetPage;