import React, { Fragment } from 'react'
import {Card , Button} from 'react-bootstrap'
import {useNavigate } from 'react-router-dom'

const Products = ({product ,increment , decrement ,deleteHandel }) => {
  const navigate = useNavigate()
  const direct = () =>{
  navigate('/productDetails' , {state:product})
  }
return (
<Fragment>
<Card style={{width:"600px" , margin:"auto"}}>
      <Card.Body className='d-flex align-items-center justify-content-between'>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.count}</Card.Text>
        <Button variant="danger" onClick={() => increment(product.id)}>+</Button>
        <Button variant="danger" onClick={() => decrement(product.id)}>-</Button>
        <Button variant="danger" onClick={() => deleteHandel(product.id)}>Del</Button>
        <Button variant="success" onClick={()=> direct()}>Products Details</Button>
      </Card.Body>
    </Card>
</Fragment>

  )
}

export default Products