import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';

const NavBar = () => {
    return (
        <AppBar
            position='absolute'
        >
            <Toolbar>
                <IconButton fontSize='large' color='inherit' disableRipple >
                    <MovieIcon />
                </IconButton>
                <Typography variant='h5' component='div'>
                    My Movies List
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar