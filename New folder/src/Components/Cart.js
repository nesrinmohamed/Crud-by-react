import React, { Component } from 'react'
import Products from './Products'
class Cart extends Component{
  render (){
    const {products ,increment  , decrement ,delHandelr ,reset} = this.props
return (
    <>
    <h2>Shopping Cart</h2>
        <button onClick={reset}>Rese</button>
      <div className='product-card'>
        {products.map((product) => (
          <Products key={product.id} 
          product={product}
           increment={increment} 
           decrement={decrement}
           delHandelr={delHandelr}
           />
          ))}
      </div>
    </>
      )}
}

export default Cart
