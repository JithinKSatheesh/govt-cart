import React from 'react'
import { Cartprovider } from './cartcontext'
import Kit from './kit'
import Nav from './nav'

const Product = ()=> {
    return (
    
        <Cartprovider>
            <Nav/>
            <Kit/>
        </Cartprovider>
      
    )
}
export default Product
