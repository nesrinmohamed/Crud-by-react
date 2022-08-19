
import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import Cart from './Cart'
import ShoopingCart from './Components/ShoopingCart'
import {Routes , Route} from 'react-router-dom'
import ProductsDetails from './Components/ProductsDetails'
 class App extends Component {
    state ={
    products: [
      { id: 1, name: "Chipsy", count: 0 , price:100},
      { id: 2, name: "Molto", count: 6 , price:200 },
      { id: 3, name: "Chooclate", count: 5 , price:300},
      { id: 4, name: "Pepsi", count: 2 , price:500 },
    ],
    navCount:0,
    cart:[]
  }

  increment = (id) =>{
 let Products = [...this.state.products]
 Products.map((e)=> {
if(e.id === id){
e.count++
}
return e
})
this.setState({Products})
  }

  decrement = (id) =>{
 let Products = [...this.state.products]
 Products = Products.map((e) =>{
if(e.id === id){
if(e.count>0){
e.count--
}
return e
}
this.setState({Products})
})
  }

  deleteHandel = (id) =>{
  // console.log('dele')
  let products = [...this.state.products]
  products = products.filter((e )=> e.id !==id)
this.setState({products})
  console.log(products)
  }

  resHandel= () =>{
let Products =[...this.state.products]
Products = Products.map((e) =>{
e.count=0
return e
})
// console.log(Products)
this.setState({Products})
  }
  add = (id) =>{
  let Products=[...this.state.products]
  let cart = this.state.cart
  let newCart = Products.map(e => e.id ===id)
  this.setState([...cart , newCart])
  }
  
  render() {
    return (
      <div>
        <NavBar navCount={this.state.navCount} products={this.state.products}/>
       <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={
        <ShoopingCart 
         products={this.state.products}
         increment={this.increment}
         decrement={this.decrement}
         deleteHandel={this.deleteHandel}
         resHandel={this.resHandel}
         /> }/>
         <Route path='/productDetails' element={<ProductsDetails/>}/>
      <Route path='/cart' element={<Cart  cart={this.state.cart} products={this.state.products}/>}  />
       </Routes>
   
      </div>
    )
  }
}

export default  App