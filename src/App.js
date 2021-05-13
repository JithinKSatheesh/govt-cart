import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Home1 from './Components/home1'
import Nav from './Components/nav'
import Home2 from './Components/home2'
import Kit from './Components/kit'
import Billing from './Components/billing'
import Cart from './Components/cart'
import Product from './Components/product'
import Login from './Components/Login2'

export default function App() {
  return (
    <Router>
    <div>
      <Switch>
        {/* <Route path="/" exact component={Billing} /> */}
         <Route path="/" exact component={Home1} /> 
        <Route path="/kit" exact component={Product} />
        <Route path="/kit2" exact component={Home2} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
    </Router>
  )
}
