import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.scss';
import Head from './Head/Head';
import Footer from './Footer/Footer';
import Main from './Pages/Main/Main';
import Price from './Pages/Prices/Price';
import TextolitMain from './Pages/TextolitMain/TextolitMain';
import LaserCutAcril from './Pages/LaserRezkaAkril/LaserCut';
import LaserCutDvp from './Pages/LaserCutDvp/LaserCutDvp';
import LaserGrave from './Pages/LaserGrave/LaserGrave';
import OrgskloMain from './Pages/OrgskloMain/OrgskloMain';
import Production from './Pages/Production/Production';
import Kaprolon from './Pages/Kaprolon/Kaprolon';
import Ptft from './Pages/Ptft/Ptft';
import Rule from './Pages/Rule/Rule';


function App() {
	return (
		<BrowserRouter basename="/ua">
			<div className="App">
				<div className="app-head">
					<Head />
				</div>
				<div className="app-main">
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/price" element={<Price />} />
						<Route path="/textolit" element={<TextolitMain />} />
						<Route path="/lazernaya-rezka-akrila" element={<LaserCutAcril />} />
						<Route path="/rezka-faneri" element={<LaserCutDvp />} />
						<Route path="/laser-gravirovka" element={<LaserGrave />} />
						<Route path="/prays-orgsteklo" element={<OrgskloMain />} />
						<Route path="/yslygi" element={<Production />} />
						<Route path="/kaprolon-v-sterzhnyakh" element={<Kaprolon />} />
						<Route path="/ftoroplast" element={<Ptft />} />
						<Route path="/rule" element={<Rule />} />
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
