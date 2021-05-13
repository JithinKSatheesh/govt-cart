import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './Context'
import {signOut,isAuthenticated} from './Auth/Auth'



const Nav = () => {

    const userPhoneNo = isAuthenticated().phoneNumber

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
                                        <Link to='/cart'>
                                            Your order
                                            <div className="badge badge-danger">
                                                {values.cart.length}
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        {userPhoneNo 
                                        ?
                                        <Link 
                                            className={''}
                                            onClick={()=>{signOut()}}
                                            to='/login'>
                                                logout
                                        </Link>
                                        :
                                        <Link to='/'>
                                            Login
                                        </Link>
                                        }
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
