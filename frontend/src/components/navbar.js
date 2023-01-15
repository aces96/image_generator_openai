import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export const NavBar = ()=>{


    return (
        <AppBar style={{background: 'black', height: '6vh'}} position="static">
            <Toolbar variant="dense">
                <img style={{width: 35, height: 35}} src={require('../assets/images/logo.png')}/>
            </Toolbar>
        </AppBar>
    )
}