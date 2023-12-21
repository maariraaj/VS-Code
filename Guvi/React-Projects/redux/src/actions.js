// Action Types
export const INCREASE_QUANTITY="INCREASE_QUANTITY";
export const DECREASE_QUANTITY="DECREASE_QUANTITY";
export const UPDATE_AMOUNT="UPDATE_AMOUNT";

// Action Creators
// export const increaseQuantity=()=> ({type : INCREASE_QUANTITY});
// export const decreaseQuantity=()=> ({type : DECREASE_QUANTITY});
// export const updateAmount=(amount)=> ({
//     type : UPDATE_AMOUNT,
//     payload: amount,
// }); 

export const increaseQuantity=id=> ({type : INCREASE_QUANTITY, payload:id});
export const decreaseQuantity=id=> ({type : DECREASE_QUANTITY, payload:id});
export const updateAmount=id=> ({type : UPDATE_AMOUNT, payload: id}); 