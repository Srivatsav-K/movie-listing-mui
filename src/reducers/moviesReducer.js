const moviesInitialValue = []

const moviesReducer = (state = [...moviesInitialValue], action) => {
    switch (action.type) {
        case 'ADD_MOVIE': {
            return [{ ...action.payload }, ...state]
        }
        case 'REMOVE_MOVIE': {
            return state.filter(ele => ele.id !== action.payload)
        }
        default: {
            return state
        }
    }
}

export default moviesReducer