import { createStore, combineReducers } from 'redux'

import moviesReducer from '../reducers/moviesReducer'

const configStore = () => {
    const store = createStore(combineReducers({
        movies: moviesReducer
    }))
    return store
}

export default configStore