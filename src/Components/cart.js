import React, { useState } from 'react'
import Nav from './nav'

import {ProductConsumer} from './Context'

const Cart=(props)=> {

    // const {cart}=props
    


    return (
        <div>
            <Nav/>

            <div  >
                {/* accessing variables from context.js */}
                
                <ProductConsumer>
                    {(values)=>{
                        return(
                            <>
                            <div>
                            {console.log("from cart",values)}
                            
                            {values.cart.length === 0 && <div className='text-center'>Cart is empty</div>}  
                            <div className="">
                                {
                                    values.cart.map((item)=>{
                                        return(
                                            <div className="card">
                                                {item.name}
                                            </div>
                                        )
                                    })
                                }          
                            </div> 

                            </div>
                            </>
                        )
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}

export default Cart