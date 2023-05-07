import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.scss';
import Head from './Head/Head';
import Footer from './Footer/Footer';
import Price from './Pages/Prices/Price';
import TextolitMain from './Pages/TextolitMain/TextolitMain';


function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="app-head">
					<Head />
				</div>
				<div className="app-main">
					<Routes>
						<Route path="/price" element={<Price />} />
						<Route path="/" element={<TextolitMain />} />

					</Routes>
				</div>
				<div className="app-footer">
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
