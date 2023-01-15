import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { PromptContext } from '../promptContext';
import '@fontsource/roboto/700.css';
import '../App.css'
import { useState, useRef, useContext, useEffect } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver'





export const PromptContainer = (props)=>{

    const imageContext = useContext(PromptContext)
    const button = <Button onClick={()=>{
            FileSaver.saveAs(imageContext[0], 'image.jpg')
    }} style={{width: '80%', height: '70%', borderRadius: 10}} variant='contained' color='success'>Download</Button>


    const inputRef = useRef('')

    const [received, setReceived] = useState(false)
    const [error, setError] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [artStyle, setArtStyle] = useState('')


    useEffect(()=>{
        if(imageContext[0].length > 0){
            setReceived(true)
        }
    },[imageContext[0]])

    




    const handleClick = async ()=>{
        setError(false)
        setDisabled(true)
        try {
            const image = await axios.post('http://localhost:8080/openai/generateImage', {
                prompt: inputRef.current.value,
                artStyle: artStyle
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer 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`
                }

            })

            imageContext[1](image.data.image)

            setDisabled(false)

            console.log(image);
        } catch (error) {
            setDisabled(false)
            console.log(error);
            setError(true)
        }
}


    return (
        <div style={{width: '80%', height: '80%', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <Typography align='left' style={{color: 'black', marginBottom: 10}} variant='h5'>
                Enter Prompt
            </Typography>

            <TextField   inputRef={inputRef}  onChange={(e)=>{
                inputRef.current.value = e.target.value

                console.log(inputRef.current.value);
            }} id="outlined-basic" label="enter your prompt" variant="filled" color='primary' style={{width: '100%', marginBottom: 20}} />

            <div className='artStyleCont'>
                <div >
                    <input  onClick={()=>{
                        setArtStyle('in comic style')
                    }} className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/comic.png')}/>
                    <Typography variant="button" display="block" gutterBottom>
                        Comic
                    </Typography>
                </div>

                <div >
                    <input onClick={()=>{
                        setArtStyle('in HDR style')
                    }} className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/HDR.png')}/>
                    <Typography variant="button" display="block" gutterBottom>
                        HDR
                    </Typography>
                </div>

                <div >
                    <input onClick={()=>{
                        setArtStyle('in Dystopia style')
                    }} className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/dystopia.png')}/>
                    <Typography variant="button" display="block" gutterBottom>
                        Dystopia
                    </Typography>
                </div>

                <div >
                    <input onClick={()=>{
                        setArtStyle('in VFX style')
                    }} className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/vfx.png')}/>
                    <Typography variant="button" display="block" gutterBottom>
                        VFX
                    </Typography>
                </div>

                <div >
                    <input onClick={()=>{
                        setArtStyle('in WaterColor style')
                    }}  className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/watercolor.png')}/>
                    <Typography variant="button" display="block" gutterBottom>
                        WaterColor
                    </Typography>
                </div>

                <div >
                    <input onClick={()=>{
                        setArtStyle('in spectral style')
                    }}  className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/spectral.png')}/>
                        <Typography variant="button" display="block" gutterBottom>
                            Spectral
                        </Typography>
                </div>

            </div>
            <Button disabled={disabled}  onClick={handleClick} style={{width: 200, height: 50, borderRadius: 15, boxShadow: 10, marginBottom: 30, marginTop: 30}} variant="contained">Create</Button>

            <div style={{width: '100%', height: 80}}>
                {received && button}
                {error && <Typography variant='h5' style={{color: 'red'}}> please try another prompt</Typography>}
            </div>
        </div>
    )
}