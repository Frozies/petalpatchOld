import React from "react";
import Homepage from "./views/Homepage";
import Checkout from "./views/Checkout";
import ProductGallery from "./views/ProductGallery";
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import AdminHome from "./views/AdminHome";


function App() {
  return (
      <Router>
          {/*Import the navbar and the footer so it stays on every page. If I understand react properly, only the switch
       div gets updated.*/}
          <Navbar/>

          <Switch>
              <Route exact path='/' component={Homepage}/>
              <Route path='/checkout' component={Checkout}/>
              <Route exact path='/products' component={ProductGallery}/>
              <Route exact path='/admin' component={AdminHome}/>
              {/*<Route path='/products/1' component={Product}/>*/}
          </Switch>
          <Footer/>
      </Router>
  );
}

export default App;
