import React, { useState } from 'react';

import './App.css';
import AddItem from './Components/AddItem';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Productlist from './Components/Productlist';
function App() {
  const products = [
    {
      // pid:1,
      pname: "Mobile",
      cost: 1000,
      quantity: 0

    },
    {
      // pid:2,
      pname: "Laptop",
      cost: 5000,
      quantity: 0

    }
  ]
  const [productList, setProductList] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);


  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += productList[index].cost
    setProductList(newProductList);
    setTotalAmount(newTotalAmount)
  };
  const decrementQunatity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--
      newTotalAmount -= productList[index].cost
    }
   setTotalAmount(newTotalAmount);
    setProductList(newProductList);
   };
   const resetQuantity=()=>{
     let newProductList=[...productList]
     newProductList.map((products)=>{
          products.quantity=0;
     })
     setProductList(newProductList);
     setTotalAmount(0);
   };
   const removeItem=(index)=>{
     let newProductList=[...productList];
     let newTotalAmount=totalAmount;
     newTotalAmount-=newProductList[index].quantity * newProductList[index].cost;
     newProductList.splice(index,1);
     setProductList(newProductList);
     setTotalAmount(newTotalAmount);
   }
   const addItem=(pname,cost)=>{
     let newProductList=[...productList];
     newProductList.push(
       {
         pname:pname,
         cost:cost,
         quantity:0,
       });
       setProductList(newProductList);
     
   }
  return (
    <div className="App">
      <Navbar />
      <AddItem addItem={addItem}/>
      <Productlist productList={productList} incrementQuantity={incrementQuantity} decrementQunatity={decrementQunatity} removeItem={removeItem}/>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </div>
  );
}

export default App;
