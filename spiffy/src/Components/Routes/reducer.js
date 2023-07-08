// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
    item: [],
    cart:[ ]
  };
  
  const reducer = (state = initialState,{type,payload}) => {
    //write the logic to handle, get task, update task, add task, and delete task
     
    switch(type){
      case "put":
          return {...state,item:payload}
          case "AddToCart":
            return { ...state, cart: state.cart.concat(payload)};
         case "incQ":
            let arr =  state.cart.map((item) =>
                    item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
                  )
            return {...state,cart:arr}
        case "decQ":
                let arr1 =  state.cart.map((item) =>
                        item.id === payload && item.quantity > 1? { ...item, quantity: item.quantity - 1 } : item
                      )
                return {...state,cart:arr1}
         case "del":
                    let arr2 =  state.cart.filter((item) => item.id !== payload)
                    return {...state,cart:arr2}
      default:
        return state
    }
  };
  
  export { reducer };