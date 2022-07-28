import { useSelector } from 'react-redux'

import { Box, Card, CardContent, CardMedia, Grid, Icon, Paper, Rating, Typography } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const MoviesStats = () => {
    const movies = useSelector((state) => {
        return state.movies
    })

    const topMovie = movies.sort((a, b) => b.rating - a.rating)[0]

    return (
        <Paper sx={{ padding: '30px' }} elevation={3}>

            <Grid alignItems='center' justifyContent='center' container spacing={3}>

                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Icon color='warning' >
                        <EmojiEventsIcon />
                    </Icon>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        variant='h5'
                        align='center'
                        color='primary'
                    >
                        Top Movie

                    </Typography>
                </Grid>

                {(movies.length > 0) ? (
                    <Grid item xs={9} >

                        <Card elevation={2}>
                            <CardMedia
                                component='img'
                                image={topMovie.avatar}
                                sx={{ maxHeight: '200px' }}
                            />
                            <CardContent>
                                <Typography
                                    textAlign='center'
                                    gutterBottom
                                    sx={{ fontWeight: '700' }}
                                >
                                    {topMovie.title}
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Rating
                                        precision={0.5}
                                        value={topMovie.rating}
                                        readOnly
                                    />

                                    <Typography
                                        textAlign='center'
                                        component='div'
                                    >
                                        {topMovie.rating}
                                    </Typography>
                                </Box>


                            </CardContent>
                        </Card>

                    </Grid>
                ) : (
                    <Grid item xs={12}>
                        <Typography
                            textAlign='center'
                            variant='h6'
                            color='error'
                        >
                            Add a Movie to see stats
                        </Typography>
                    </Grid>
                )}

            </Grid>

        </Paper>
    )
}

export default MoviesStats