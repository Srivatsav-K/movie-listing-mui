import { useDispatch } from "react-redux";
import { removeMovie } from "../actions/movieActions";

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Rating, Tooltip, Typography } from "@mui/material"

const MoviesItem = (props) => {
    const { title, rating, id, avatar } = props

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeMovie(id))
    }

    return (
        <Box width='200px'>
            <Card elevation={2}>
                <CardMedia
                    component='img'
                    image={avatar}
                />
                <CardContent>
                    <Typography
                        textAlign='center'
                        gutterBottom
                        sx={{ fontWeight: '700' }}
                    >
                        {title}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Rating
                            precision={0.5}
                            value={rating}
                            readOnly
                        />

                        <Typography
                            textAlign='center'
                            component='div'
                        >
                            {rating}
                        </Typography>

                        <CardActions>
                            <Tooltip title='Delete' placement="right"  >
                                <IconButton
                                    onClick={() => handleRemove(id)}
                                    color="error"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Box>


                </CardContent>
            </Card>
        </Box>
    )
}

export default MoviesItem