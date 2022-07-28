import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Grid, InputAdornment, MenuItem, Stack, TextField, Typography, Box } from '@mui/material'
//import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import MoviesItem from './MoviesItem';

const MoviesList = () => {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const handleChange = (e) => {
        if (e.target.name === 'search') {
            setSearch(e.target.value)
        } else if (e.target.name === 'sort') {
            setSort(e.target.value)
        }
    }

    const movies = useSelector((state) => {
        return state.movies
    })

    useEffect(() => {
        const result = movies.filter(ele => {
            return ele.title.toLowerCase().includes(search.toLowerCase())
        }).sort((a, b) => {
            if (sort === 'a-z') {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return 1
                } else if (a.title < b.title) {
                    return -1
                } else {
                    return 0
                }
            } else if (sort === 'z-a') {
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return -1
                } else if (a.title < b.title) {
                    return 1
                } else {
                    return 0
                }
            } else if (sort === 'Rating: High-Low') {
                return b.rating - a.rating
            } else if (sort === 'Rating: Low-High') {
                return a.rating - b.rating
            } else {
                return null
            }

        })

        setFilteredData(result)

    }, [search, sort, movies])

    return (
        <Stack spacing={3}>

            <Grid container spacing={2} >
                <Grid item xs={9} >
                    <TextField
                        name='search'
                        value={search}
                        onChange={handleChange}
                        fullWidth
                        placeholder='Search by Name'
                        color='primary'
                        InputProps={{
                            startAdornment: <InputAdornment position='start'><SearchIcon /></InputAdornment>,
                        }}
                    />
                </Grid>

                <Grid item xs={3} >
                    <TextField
                        name='sort'
                        value={sort}
                        onChange={handleChange}
                        fullWidth
                        select
                        label='Sort'
                    >
                        <MenuItem value=''>Default</MenuItem>
                        <MenuItem value='a-z'>a-z</MenuItem>
                        <MenuItem value='z-a'>z-a</MenuItem>
                        <MenuItem value='Rating: High-Low'>Rating: High-Low</MenuItem>
                        <MenuItem value='Rating: Low-High'>Rating: Low-High</MenuItem>

                    </TextField>
                </Grid>

            </Grid>

            {(movies.length > 0) ? (
                <Grid container spacing={1} rowSpacing={3} >

                    {(filteredData.length > 0) ? (
                        filteredData.map(ele => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={ele.id} >
                                    <MoviesItem {...ele} />
                                </Grid>
                            )
                        })
                    ) : (
                        <Grid item xs={12}>
                            <Typography
                                textAlign='center'
                                variant='h4'
                                color='error'
                            >
                                No Items Found
                            </Typography>
                        </Grid>
                    )}

                </Grid>
            ) : (
                <Box p='32px'>
                    <Typography
                        textAlign='center'
                        variant='h4'
                        color='error'
                    >
                        No Movies Present
                    </Typography>
                    <Typography
                        textAlign='center'
                        variant='body2'
                        color='error'
                    >
                        Add a new movie
                    </Typography>
                </Box>
            )}

        </Stack >
    )

}

export default MoviesList