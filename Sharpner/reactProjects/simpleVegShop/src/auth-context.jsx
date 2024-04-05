import React, {useState} from 'react';

const AuthContext = React.createContext({
    onAdd: ()=>{},
    onBuy: ()=>{},
    onDelete: ()=>{},
    data: []
})

export const AuthContextProvider=(props)=>{
    const [data, setData]=useState([]);

    const addProductHandler=(enteredData)=>{
      const productData={
        ...enteredData,
        id: Math.random().toString()
      };
      setData([...data, productData]);
    };
  
    const deleteItemHandler=(itemId)=>{
      setData((prevData)=>{
        const updatedData=prevData.filter((item)=>item.id !== itemId);
        return updatedData;
      })
    }
    const quantityChanger=(value, itemId)=>{
      setData(prevArray => {
        return prevArray.map(obj => {
          if (obj.id === itemId && obj.hasOwnProperty('quantity')) {
            return { ...obj, ['quantity']: obj['quantity'] - value };
          }
          return obj;
        });
      });
    }

    return <AuthContext.Provider
                value={{
                    onAdd: addProductHandler,
                    onDelete: deleteItemHandler,
                    onBuy: quantityChanger,
                    data: data
                }}>{props.children}</AuthContext.Provider>
}
export default AuthContext;