import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Nav from './nav'
import './nav.css'

import {ProductConsumer} from './Context'

// import fakedata from './fakedata'
// import { addItemToCart } from './cartHelper'
// import Cart from './cart'
// import { Cartcontext } from './cartcontext'

const Kit = () => {

    // const { products } = fakedata
    // const [cart, setCart] = useContext(Cartcontext)

    // const onAdd = (product) => {

    //     const exist = cart.find((x) => x.id === product.id);
    //     if (exist) {
    //         setCart(cart.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
    //         );
    //     }
    //     else {
    //         setCart([...cart, { ...product, qty: 1 }]);

    //     }
    // }

    return (
        <div>

            {/* content */}

            <a className="vegitablelink2" href="">Vegitables</a>
            <Link to="/">
                <a className="kitlink2" href="">Kit</a>
            </Link>
            <div className="whiteclr"></div>
            <div className="hidn">

            </div>

            {/* accessing common values and data from context.js */}

            <ProductConsumer>
                {(values)=>{
                    return(
                        <>
                            <div className="row p-3 m-2 mt-3">
                                {console.log(values)}
                                {
                                // mapping all products 
                                values.products_veg.map((product) => (
                                    <div key={product.id} className="col-12 col-md-6 col-lg-3 p-2 card">
                                        <img src={product.image} />
                                        <h1>{product.name}</h1>
                                        <h3>RS {product.price}</h3>
                                        <div 
                                            onClick={()=>{values.AddToCart(product.id)}}
                                            className='btn btn-light'>Add to cart</div>
                                    </div>
                                ))
                                
                                }
                            </div>
                        </>
                    )
                }}
            </ProductConsumer>

            {/* products */}


            <div>
                    {/* {cart.map((item) => {
                        <div key={item.id}>
                            <div className="colr"><h1>{item.name}</h1></div>
                            {console.log(item)}
                            {console.log(item.name)}
                        </div>
                    })} */}
            </div>


        </div>
    )
}
export default Kit