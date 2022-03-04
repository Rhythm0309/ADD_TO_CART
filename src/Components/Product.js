import React from 'react';

const Product = (props) => {
    return (
        <center style={{border:"1px groove #43aa8b"}}>
        <div className="row mt-2 mb-2" >
            <div className="col-4 mt-2 ">
                <h2 style={{color:"#3e1f47",fontFamily:"cursive"}}>{props.product.pname} <span className="badge bg-secondary">₹{props.product.cost}</span></h2>
            </div>

            <div className="col-2 mt-2">
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-dark" onClick={() => { props.decrementQunatity(props.index); }}>-</button>
                    <button type="button" className="btn btn-warning">{props.product.quantity}</button>
                    <button type="button" className="btn btn-dark" onClick={() => { props.incrementQuantity(props.index); }}>+</button>
                </div>
            </div>

            <div className="col-2 mt-2">
                {props.product.quantity * props.product.cost}
            </div>

            <button size="sm" className="col-2 mt-2 btn btn-danger max-vw-70 h-25" onClick={()=>{props.removeItem(props.index);}}>Remove</button>

        </div>
        </center>
    );
};

export default Product;