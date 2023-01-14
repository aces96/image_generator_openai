import Grid from '@mui/material/Grid';
import { PromptContainer } from './promptContainer';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';




export const Section = ()=>{


    const Item = styled(Paper)(({ theme }) => ({
        height: '92vh',
        width: '100%',
        color: theme.palette.text.secondary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }));


    return (
        <div style={{width: '100%', height: '100%', background: 'black'}} className='section'>
            <Grid container spacing={2}>
                <Grid  xs={5}>
                    <Item>
                        <PromptContainer/>
                    </Item>
                </Grid>

                <Grid xs={7}>
                </Grid>
            </Grid>
        </div>
    )
}