import React from 'react'
import { Container } from 'react-bootstrap'
const Cart = ({products}) => {

  return (
    <Container>
        <div>
            {products.map((product) =>(
             <div key={product.id} className=' w-50 d-flex align-items-center justify-content-between'>
              <h2>{product.name}</h2>
              <h3>{product.count }</h3>
              <h3>{product.price}</h3>
             </div>
            ))}
        </div>
    </Container>
  )
}

export default Cart
