import React from 'react';

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            productName:"",
            productPrice:0,

        }
    }
    render() {
        return (
            <center>
            <form  className="row mx-5  mt-4 mb-5 container" style={{border:"1px solid black",justifyContent:"center",width:"50%",backgroundColor:"#edeec9",borderRadius:"30px",fontFamily:"font-family: 'Inter', sans-serif",textAlign:"left",color:"#014f86",fontWeight:"bold"}} onSubmit={(e)=>{
                e.preventDefault();
                this.props.addItem(this.state.productName,Number(this.state.productPrice));}}>
                <div className="mb-3 mt-3 col-4">
                    <label htmlFor="inputName">Product Name</label>
                    <input type="text" className="form-control" id="inputName" aria-describedby="name " placeholder="Name" name="productName" onChange={(e)=>{this.setState({productName:e.currentTarget.value})}} value={this.state.productName}/>
                </div>
                <div className="mb-3 mt-3 col-4 me-2">
                    <label htmlFor="inputPrice">Price</label>
                    <input type="number" className="form-control" id="inputPrice" placeholder="Price" name="productPrice" onChange={(e)=>{this.setState({productPrice:e.currentTarget.value})}}  value={this.state.productPrice}/>
                </div>
                <button type="submit" className="btn btn-outline-danger col-4 mt-3 mb-2 ">Add To Cart</button>
            </form>
            </center>
        );
    }
}

export default AddItem;