import React from 'react'

import { Grid } from '@mui/material'
import AddMovie from './AddMovie'
import MoviesList from './MoviesList'
import MoviesStats from './MoviesStats'

const MoviesContainer = () => {
    return (
        <Grid container spacing={2} columnSpacing={4} mt={10} >

            <Grid item xs={12} md={8}>
                <MoviesList />
            </Grid>

            <Grid item xs={12} md={4}>
                <Grid container rowSpacing={3}>
                    <Grid item xs={12}>
                        <AddMovie />
                    </Grid>

                    <Grid item xs={12}>
                        <MoviesStats />
                    </Grid>

                </Grid>
            </Grid>

        </Grid >
    )
}

export default MoviesContainer