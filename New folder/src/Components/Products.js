import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    const {product ,increment ,decrement , delHandelr} = this.props
    return (
      <div>
        <div className='product-item'>
            <h2>{product.name}</h2>
            <p>{product.count}</p>
            <button onClick={() =>delHandelr(product.id)}>Del</button>
            <button onClick={() => increment(product.id)}>+</button>
            <button onClick={() => decrement(product.id)}>-</button>
        </div>
      </div>
    )
  }
}
