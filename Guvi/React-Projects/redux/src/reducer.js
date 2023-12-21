import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actions";

const initialState={
    products:[
        {
            id:1,
            quantity: 1,
            amount : 10,
            unitPrice: 10
        },
        {
            id:2,
            quantity: 1,
            amount : 10,
            unitPrice: 20
        },
        {
            id:3,
            quantity: 1,
            amount : 10,
            unitPrice: 30
        }
    ]
};

function rootReducer(state=initialState, action){
    switch (action.type){
           
        case INCREASE_QUANTITY:
            // return {...state, quantity: state.quantity+1};
            return {...state, products: state.products.map(product=> product.id===action.payload ? {...product, quantity: product.quantity+1, amount: (product.quantity+1) * product.unitPrice} : product)};

        case DECREASE_QUANTITY:
            // return {...state, quantity: Math.max(1, state.quantity -1)};
            return {...state, products: state.products.map(product=> product.id===action.payload ? {...product, quantity: Math.max(1, state.quantity - 1), amount: Math.max(1, state.quantity - 1) * product.unitPrice} : product)};

        // case UPDATE_AMOUNT:
        //     // return {...state, amount: state.unitPrice * state.quantity};
        //     return {...state, products: state.products.map(product=> product.id===action.payload ? {...product, amount:product.quantity * product.unitPrice} : product)};           

        default:
            return state;
    }
}

export default rootReducer;