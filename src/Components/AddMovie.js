import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../actions/movieActions';

import { Stack, Paper, TextField, Typography, Box, Rating, Button } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';



const AddMovie = () => {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(null)
    const [err, setErr] = useState({})

    const dispatch = useDispatch()

    const errors = {}

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleRatingChange = (e, value) => {
        setRating(value)
    }

    const runValidators = () => {
        if (title.length === 0) {
            errors.title = 'Title Required'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidators()
        if (Object.keys(errors).length === 0) {
            setErr({})
            const movieData = {
                id: Number(new Date()),
                avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAACQCAMAAADA1J4TAAAALVBMVEXd3d2xsbHR0dG4uLjOzs7Y2NjJycm7u7uurq7CwsLV1dXGxsa0tLS/v7/h4eF7mz3UAAAB8klEQVRoge2YW3LDIAxFwSDzZv/LLU+ndkoTavkjtc5PYmZyLxIg4TBGEARBEARBEARBEDciruvFDkJdJAz1Y+EcrpC3TlVdxbXDFo8ghW6ylnMukPVlmjTnvgZgkgGXqPpWZ01tygOU77gGgRds0Q/JTQvUVbZVP0QGMnCtfcCZv3Vtnk7XAKwRaSmEsxjqZa6hfhVF36s8ebNgqLM815505mqG0uSVREo98JKUVhBqANwblNRkYkt6WUqoAYSFRSx9xnzRzKd1CT6ZiRUQ1RlbWwCwpvKgc2pQ5XvSfd7yaV2x1VPh0W3X6JQabPGMqvKIu2aPLepoW/6ZgFYNjkCtlqmUXTP51fPcEuGy1OTUO/Qt+QBayWeraMjmtg30QtoGZi9HQrfqY9o54Etz6AO+O4TaQid3Ajgjj4K/O8z2tdgXIA5j4DuHE42z95hN8Mky6HNXl19ieAycav1bDF3FPAd17m7RHfzIAaYuLzGIA6rr+fYsDgPpoMwYbD9/n6kURfVa8ImPN7h3ivQIJAO1jvA4Bi4OYN+Py4lFDnIEUgRvQgb/3+DENvVqwL5rXHDQQOAYGBhgsQ6aH4GUove4d8P5RIPwB4OpFxCrXwvu0WrqhS5KP+z0P6OmX0eXKS76n4EgCIIgCIIgCIIgiLvxBSW/GtbYJFnZAAAAAElFTkSuQmCC',
                title,
                rating: (rating === null ? 0 : rating)
            }
            dispatch(addMovie(movieData))
            setTitle('')
            setRating(null)
        } else {
            setErr(errors)
        }
    }

    return (
        <Paper sx={{ padding: '30px' }} elevation={3} >

            <Stack spacing={3}>

                <Box sx={{ textAlign: 'center' }}>
                    <MovieIcon />
                </Box>

                <Typography
                    variant='h5'
                    align='center'
                    color='primary'
                >
                    Add Movie

                </Typography>

                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>

                        <TextField
                            label='Title'
                            fullWidth
                            value={title}
                            name='title'
                            onChange={handleTitleChange}
                            error={(err.title && true)}
                            required={(err.title && true)}
                            helperText={(err.title && err.title)}
                        />

                        <Box sx={{ textAlign: 'center' }}>
                            <Rating
                                size='large'
                                precision={0.5}
                                value={rating}
                                name='rating'
                                onChange={handleRatingChange}
                            />
                        </Box>


                        <Button variant='contained' type='submit'>
                            Submit
                        </Button>
                    </Stack>

                </form>
            </Stack>
        </Paper >
    )
}

export default AddMovie