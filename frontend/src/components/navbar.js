import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export const NavBar = ()=>{


    return (
        <AppBar style={{background: 'blue', height: '8vh'}} position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Ai generated images
                </Typography>
            </Toolbar>
        </AppBar>
    )
}