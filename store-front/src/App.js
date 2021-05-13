var React = require('react');
var ReactDOM = require('react-dom');
import '../public/scss/style.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'

import Homepage from "./views/Homepage";
import Checkout from "./views/Checkout";
import ProductGallery from "./views/ProductGallery";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import AdminHome from "./views/AdminHome";

// Main Entry point function
function App() {
	return (
		<Router>
			<Navbar/>
			<Switch>
				<Route exact path='/' component={Homepage}/>
				<Route path='/checkout' component={Checkout}/>
				<Route exact path='/productDatasource' component={ProductGallery}/>
				<Route exact path='/admin' component={AdminHome}/>
				{/*<Route path='/productDatasource/1' component={Product}/>*/}
			</Switch>
			<Footer/>
		</Router>
	);
}

/**
 * TODO:
 * add routing configuration
 * add redux or any other state manager
 * check out any best practises
 */

// Rendering the entire react application
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('app')
);