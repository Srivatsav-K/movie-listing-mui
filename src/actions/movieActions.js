export const addMovie = (movieData) => {
    return { type: 'ADD_MOVIE', payload: movieData }
}

export const removeMovie = (id) => {
    return { type: 'REMOVE_MOVIE', payload: id }
}