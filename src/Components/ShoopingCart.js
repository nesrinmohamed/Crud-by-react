import React from 'react'
import {Card ,Button} from 'react-bootstrap'
import Products from './Products'
const ShoopingCart = (props) => {
  return (
    <div>
        <h2>Shooping Cart</h2>
        <Button   
        variant="secondary"
        size="lg"
        className="text-light btn"
        onClick={() => props.resHandel()}
        >
        Reset
    </Button>
        <Card style={{border:0}}>
            {props.products.length===0 && <h1>Empty</h1>}
            {props.products.map((product) =>(
                <Products key={product.id} 
                        product={product}
                      increment={props.increment}
                      decrement={props.decrement}
                      deleteHandel={props.deleteHandel}
                      resHandel={props.resHandel}
                />
                ))}
    </Card>
    </div>
  )
}

export default ShoopingCart