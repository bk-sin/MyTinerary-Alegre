const initialState = {
  state: [],
  like: 0,
}

function likesReducer(state = initialState, action) {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        like: action.payload,
      }
    default:
      return state
  }
}

export default likesReducer
