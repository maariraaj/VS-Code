import { useReducer } from "react";
import CartContext from "./CartContext";

const cartInitialState={
    items:[],
    totalPrice:0
}
const cartReducer=(state, action)=>{
    switch (action.type) {
        case 'add_to_cart':
            const {id, price, quantity}=action.item;
            const existingCartItem=state.items.find(item=> item.id === id);
            const cartItemsTotal=state.totalPrice + price * quantity;

            if(existingCartItem){
                const cartItems=state.items.map(item => {
                    if(item.id === id){
                        return{
                            ...item,
                            quantity: item.quamtity + quantity
                        }
                    }
                    return item;
                })
                return{
                    ...state,
                    items: cartItems,
                    totalPrice: cartItemsTotal
                }
            }
            const updatedCartItems=[...state.items, action.item]

            return{
                ...state,
                items: updatedCartItems,
                totalPrice: cartItemsTotal
            }
        case 'remove_from_cart':
            const cartItem=state.items.find(item=> item.id === action.id);
            const updatedTotalPrice=state.totalPrice - cartItem.price;

            if(cartItem && cartItem.quantity > 1){
                const updatedItems=state.items.map(item => {
                    if(item.id === action.id){
                        return{
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item;
                })
                return{
                    ...state,
                    items: updatedItems,
                    totalPrice: updatedTotalPrice
                }
            }else{
                const updatedItems=state.items.filter(item => item.id != action.id)
                return{
                    ...state,
                    items: updatedItems,
                    totalPrice: updatedTotalPrice
                }
            }
        case 'clear_cart_items':
            return{
                ...state,
                items: [],
                totalPrice: 0
            }
            
        default:
            break;
    }
}

const CartProvider=({children})=>{
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const handleAddItem=(item)=>{
        dispatch({
            type: 'add_to_cart',
            item: item
        })
    }
    const handleRemoveItem=(id)=>{
        dispatch({
            type: 'remover_from_cart',
            id: id
        })
    }
    const handleClearItem=()=>{
        dispatch({
            type: 'clear_cart_items'
        })
    }
    const contextValue={
        items: state.items,
        total: state.totalPrice,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
        clearItem: handleClearItem
    }
    return <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
}
export default CartProvider;