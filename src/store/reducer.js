const initialState = {
  age: 21
}

const reducer = (state = initialState, action) => {
  const newState = {...state};

  if(action.type === "AGE_UP") {
    newState.age++
  }
  if(action.type === "Age_Down") {
    newState.age--
  }

  return newState;
}

export default reducer;