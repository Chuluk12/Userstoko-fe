const cartData = JSON.parse(localStorage.getItem('cart-data'));
const cartTotalQty = JSON.parse(localStorage.getItem('cart-total-qty'));
const cartTotalPrice = JSON.parse(localStorage.getItem('cart-total-price'));
<<<<<<< HEAD
const user = JSON.parse(localStorage.getItem('user'));
=======
>>>>>>> 0e225e750393d4f8d580742e0b1f39ae11106b35

const initState = {
    products: cartData === null ? [] : cartData,
    totalPrice: cartTotalPrice === null ? 0 : cartTotalPrice,
<<<<<<< HEAD
    totalQuantities: cartTotalQty === null ? 0 : cartTotalQty,
    user
=======
    totalQuantities: cartTotalQty === null ? 0 : cartTotalQty
>>>>>>> 0e225e750393d4f8d580742e0b1f39ae11106b35
}


const CartReducer = (state = initState, action) => {
    let findPro;
    let index;

    switch (action.type) {
        case 'ADD_TO_CART':
            const { products, quantity } = action.payload;
            const Tprice = state.totalPrice + (products.price * quantity);
            const Tquantities = state.totalQuantities + quantity;
            const check = state.products.find(pr => pr.id === products.id);
            
<<<<<<< HEAD
=======

>>>>>>> 0e225e750393d4f8d580742e0b1f39ae11106b35
            if (check) {
                state = {
                    ...state,
                    totalPrice: Tprice,
                    totalQuantities: Tquantities
                };
            } else {
                state = {
                    ...state,
                    products: [...state.products, products],
                    totalPrice: Tprice,
                    totalQuantities: Tquantities
                }
            }

            localStorage.setItem('cart-data', JSON.stringify(state.products));
            localStorage.setItem('cart-total-qty', JSON.stringify(state.totalQuantities));
            localStorage.setItem('cart-total-price', JSON.stringify(state.totalPrice));

            return state;
            break;
        case 'INC':
            findPro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            findPro.quantity += 1;
            state.products[index] = findPro;
            return {
                ...state,
                totalPrice: state.totalPrice + findPro.price, totalQuantities: state.totalQuantities + 1
            }
        case "DEC":
            findPro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            if (findPro.quantity > 1) {
                findPro.quantity -= 1;
                state.products[index] = findPro;
                return {
                    ...state,
                    totalPrice: state.totalPrice - findPro.price, totalQuantities: state.totalQuantities - 1
                }
            } else {
                return state;
            }
        case 'REMOVE':
            findPro = state.products.find(product => product.id === action.payload);
            const filtered = state.products.filter(product => product.id !== action.payload);
            return {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - findPro.price * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
            }
        default:
            return state
    }
};

export default CartReducer;