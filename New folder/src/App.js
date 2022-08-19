import React, { Component } from 'react'
import Cart from './Components/Cart'
import './App.css'
import NavBar from './Components/NavBar'
 class App extends Component {
  state ={
    products: [
      { id: 1, name: "Chipsy", count: 0 },
      { id: 2, name: "Molto", count: 6 },
      { id: 3, name: "Chooclate", count: 5 },
      { id: 4, name: "Pepsi", count: 2 },
    ],
    navCount:0,
  }

increment = (id) =>{
  let Products = this.state.products
  let newProducts = Products.map(el => {
  if(el.id === id){
  el.count++
  }
  return  el
  })
  // console.log(newProducts)
 this.setState({newProducts})
}
decrement = (id) =>{
let Products = [...this.state.products]
let newProducts = Products.map((el) =>{
  if(el.id === id ){
    if(el.count > 0){
      el.count--
    }
  }
return el
})
console.log(newProducts)
this.setState({newProducts})
}

delHandelr = (id) =>{
let Products =this.state.products
// console.log(Products)
let newProducts = Products.filter(el => el.id !== id)
console.log(newProducts)
this.setState({newProducts})
}
reset = () => {
  let Products = [...this.state.products];
    Products = Products.map(el => {
el.count = 0
return el
})
console.log(Products)
this.setState(Products)
};
  render() {
    return (
      <div>
        <NavBar product={this.state.products}/>
        <Cart  
         products={this.state.products} 
        increment={ this.increment}
        decrement={this.decrement}
        delHandelr={this.delHandelr}
        reset = {this.reset}
        />
     </div>
    )
  }
}
export default App