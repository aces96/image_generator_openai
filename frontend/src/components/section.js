import Grid from '@mui/material/Grid';
import { PromptContainer } from './promptContainer';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';




export const Section = ()=>{

    const [prompt, setPrompt] = useState()
    const [artStyle, setArtStyle] = useState('')
    const [image,setImage] = useState('')



    const handleChange = (e)=>{
        console.log(e.target.value)
        setPrompt(e.target.value)
    }

    const handleClick = async ()=>{
            try {
                const image = await axios.post('http://localhost:8080/openai/generateImage', {
                    prompt: prompt,
                    artStyle: artStyle
                }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer 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`,

                    }

                })

                setImage(image.data.image)

                console.log(image);
            } catch (error) {
                console.log(error.response.data.error);
            }
    }


    const Item = styled(Paper)(({ theme }) => ({
        height: '92vh',
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
                        <PromptContainer value={prompt} setValue={setArtStyle} handleClick={handleClick} handleChange={handleChange}/>
                    </Item>
                </Grid>

                <Grid xs={8}>
                    <Item>
                        <img src={image}/>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}