// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  item: []
};

const reducer = (state = initialState,{type,payload}) => {
  //write the logic to handle, get task, update task, add task, and delete task
  switch(type){
    case "put":
        return {...state,item:payload}
    default:
      return state
  }
};

export { reducer };