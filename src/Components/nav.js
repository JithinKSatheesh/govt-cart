import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './Context'



const Nav = () => {
    return (
        <div>
            <div className="hero">
                <nav>
                    <h1>ENDE SWANTHAM  <span>ചന്ത .com</span></h1>
                    <ProductConsumer>
                        {values => {
                            return (<>
                                <ul>
                                    <li>
                                        <Link to='/'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Your orders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/cart'>
                                            Cart
                                            <div className="badge badge-danger">
                                                {values.cart.length}
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Login
                                        </Link>
                                    </li>
                                </ul>
                                <a 
                                    onClick={()=>{values.CheckOut()}}
                                    style={{cursor:'pointer'}}
                                    className="check" >
                                    <i class="fas fa-shopping-bag"></i>
                                    Checkout  
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </>)
                        }}
                    </ProductConsumer>
                </nav>
            </div>



            {/* footer */}



        </div>
    )
}
export default Nav
