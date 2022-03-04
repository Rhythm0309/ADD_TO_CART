import React from 'react';
import Product from './Product';
// import { FcEmptyTrash} from "react-icons/fc";

const Productlist = (props) => {
   
    return (
        props.productList.length>0 ?
         props.productList.map((product,i)=>{
             return(<Product product={product} key={i} incrementQuantity={props.incrementQuantity } index={i} decrementQunatity={props.decrementQunatity} removeItem={props.removeItem}/>)
         }) 
         : <h1 style={{textAlign:"center",margin:"200px",color:"red"}}>Cart is Empty.</h1> 
    );

};

export default Productlist;