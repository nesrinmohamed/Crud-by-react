import {Button}  from 'react-bootstrap'
import React from 'react'
import {useNavigate , useLocation} from 'react-router-dom'
const ProductsDetails = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.state)
  return (
  <>
  <Button variant='success' onClick={()=> navigate('/')}>Back to Home</Button>
<div style={{marginLeft:"20px"}}>
  <h2>{`Name:${location.state.name}`}</h2>
  <h4>{`Count:${location.state.count}`}</h4>
  <h4>{`Price:${location.state.price}`}</h4>
  <h4>{`Total:${location.state.price *location.state.count} `}</h4>

</div>
  </>
  )
}

export default ProductsDetails