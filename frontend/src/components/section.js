import Grid from '@mui/material/Grid';
import { PromptContainer } from './promptContainer';
import { PromptContext } from '../promptContext';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';




export const Section = ()=>{

    const image = useContext(PromptContext)

    const Item = styled(Paper)(({ theme }) => ({
        height: '94vh',
        width: '100%',
        color: theme.palette.text.secondary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    }));


    return (
        <div style={{width: '100%', height: '100%', background: 'transparent'}} className='section'>
            <Grid container spacing={2}>
                <Grid  xs={4}>
                    <Item>
                        <PromptContainer/>
                    </Item>
                </Grid>

                <Grid  xs={8}>
                    <Item>
                        <img src={image[0]}/>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}