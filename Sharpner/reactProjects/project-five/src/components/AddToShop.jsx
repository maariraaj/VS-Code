import React, { useContext, useState } from "react";
import Button from "./Button";
import authContext from "../auth-context";

const AddToShop = () => {
  const [enteredName, setEnteredName]=useState("");
  const [enteredPrice, setEnteredPrice]=useState("");
  const [enteredQuantity, setEnteredQuantity]=useState("");

  const ctx=useContext(authContext);

  const submitHandleChanger=(event)=>{
    event.preventDefault();
    let obj={};
    if(enteredName !=='' && enteredPrice!=='' && enteredQuantity !==''){
      obj={
        name: enteredName,
        price: enteredPrice,
        quantity: enteredQuantity
      }
      ctx.onAdd(obj);
      setEnteredName('');
      setEnteredPrice('');
      setEnteredQuantity('');
    }
      
  }
  const nameChangeHandler=(event)=>{
    setEnteredName(event.target.value);
  }
  const priceChangeHandler=(event)=>{
    setEnteredPrice(event.target.value);
  }
  const quantityChangeHandler=(event)=>{
    setEnteredQuantity(event.target.value);
  }
  
  return (
    <React.Fragment>
      <form onClick={submitHandleChanger}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type='text' placeholder="ex- Potato" id="name" onChange={nameChangeHandler} value={enteredName} />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input type='number' placeholder="0" id="price" onChange={priceChangeHandler} value={enteredPrice}/>
        </div>

        <div>
          <label htmlFor="name">Quantity:</label>
          <input type='number' placeholder="0" id="quantity" onChange={quantityChangeHandler} value={enteredQuantity}/>
        </div>

        <Button type='submit' >Add To Shop</Button>
      </form>
      
    </React.Fragment>
  )
}

export default AddToShop