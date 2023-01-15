import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { PromptContext } from '../promptContext';
import '@fontsource/roboto/700.css';
import '../App.css'
import { useState, useRef, useContext, useEffect } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver'
import { Fab } from '@mui/material';





export const PromptContainer = (props)=>{

    const imageContext = useContext(PromptContext)
    const inputRef = useRef('')
    const [btn1, setBtn1] = useState(false)
    const [btn2, setBtn2] = useState(false)
    const [btn3, setBtn3] = useState(false)
    const [btn4, setBtn4] = useState(false)
    const [btn5, setBtn5] = useState(false)
    const [btn6, setBtn6] = useState(false)
    const [btnSize1, setBtnSize1] = useState(true)
    const [btnSize2, setBtnSize2] = useState(false)
    const [btnSize3, setBtnSize3] = useState(false)

    const button = <Button onClick={()=>{
            FileSaver.saveAs(imageContext[0], 'image.jpg')
    }} style={{width: '80%', height: '70%', borderRadius: 10}} variant='contained' color='success'>Download</Button>



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
        <div style={{width: '80%', height: '95%', alignItems: 'center', display: 'flex', flexDirection: 'column', marginTop: 10}}>
            <Typography align='left' style={{color: 'black', marginBottom: 10}} variant='h6'>
                Enter Prompt
            </Typography>

            <TextField   inputRef={inputRef}  onChange={(e)=>{
                inputRef.current.value = e.target.value

                console.log(inputRef.current.value);
            }} id="outlined-basic" label="enter your prompt" variant="filled" color='primary' style={{width: '100%', marginBottom: 20}} />

                <Typography variant='button' gutterBottom>
                    Image Size
                </Typography>

                <div style={{width: '80%', height: 40, display: 'flex', justifyContent: 'space-around', marginBottom: 20}} >
                    <Button onClick={()=>{
                        setBtnSize1(true)
                        setBtnSize2(false)
                        setBtnSize3(false)
                    }} variant='outlined' style={{width: '30%', height: '100%', borderRaidius: 5, backgroundColor: btnSize1 && '#185ADB', color: btnSize1 && 'white'}}>Small</Button>
                    
                    <Button onClick={()=>{
                        setBtnSize1(false)
                        setBtnSize2(true)
                        setBtnSize3(false)
                    }} variant='outlined' style={{width: '30%', height: '100%', borderRaidius: 5, backgroundColor: btnSize2 && '#185ADB', color: btnSize2 && 'white' }}>Medium</Button>
                    
                    <Button onClick={()=>{
                        setBtnSize1(false)
                        setBtnSize2(false)
                        setBtnSize3(true)
                    }} variant='outlined' style={{width: '30%', height: '100%', borderRaidius: 5, backgroundColor: btnSize3 && '#185ADB', color: btnSize3 && 'white'}}>Large</Button>
                </div>

            <Typography variant='button' gutterBottom>
                Art Style
            </Typography>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',maxWidth: 300, marginTop: 5}} className='artStyleCont'>
                <div style={{border: btn1 && '1px solid black', width: 80, height: 100,marginBottom: 20, borderRadius: 10, justifyContent: 'space-around', display: 'flex', flexDirection: 'column'}}>
                    <input  onClick={()=>{
                        setBtn1(true)
                        setBtn2(false)
                        setBtn3(false)
                        setBtn4(false)
                        setBtn5(false)
                        setBtn6(false)
                        setArtStyle('in comic style')
                    }} className='typeButton' style={{width:'100%', height: '80%', borderRadius: 10}} type='image' src={require('../assets/images/comic.png')}/>
                    <Typography variant="body"  gutterBottom>
                        Comic
                    </Typography>
                </div>

                <div style={{border: btn2 && '1px solid black', width: 80, height: 100,marginBottom: 20, justifyContent: 'space-around', display: 'flex', flexDirection: 'column', borderRadius: 10}}>
                    <input onClick={()=>{
                                                setBtn1(false)
                                                setBtn2(true)
                                                setBtn3(false)
                                                setBtn4(false)
                                                setBtn5(false)
                                                setBtn6(false)
                        setArtStyle('in HDR style')
                    }} className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/HDR.png')}/>
                    <Typography variant="body" display="block" gutterBottom>
                        HDR
                    </Typography>
                </div>

                <div style={{border: btn3 && '1px solid black',borderWidth: 4, borderColor: 'black', width: 80, height: 100,marginBottom: 20, justifyContent: 'space-around', display: 'flex', flexDirection: 'column', borderRadius: 10}}>
                    <input onClick={()=>{
                        setBtn1(false)
                        setBtn2(false)
                        setBtn3(true)
                        setBtn4(false)
                        setBtn5(false)
                        setBtn6(false)
                        setArtStyle('in Dystopia style')
                    }} className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/dystopia.png')}/>
                    <Typography variant="body" display="block" gutterBottom>
                        Dystopia
                    </Typography>
                </div>

                <div style={{border: btn4 && '1px solid black',borderWidth: 4, borderColor: 'black', width: 80, height: 100,marginBottom: 20, justifyContent: 'space-around', display: 'flex', flexDirection: 'column', borderRadius: 10}}>
                    <input onClick={()=>{
                        setBtn1(false)
                        setBtn2(false)
                        setBtn3(false)
                        setBtn4(true)
                        setBtn5(false)
                        setBtn6(false)
                        setArtStyle('in VFX style')
                    }} className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/vfx.png')}/>
                    <Typography variant="body" display="block" gutterBottom>
                        VFX
                    </Typography>
                </div>

                <div style={{border: btn5 && '1px solid black',borderWidth: 4, borderColor: 'black', width: 80, height: 100,marginBottom: 20, justifyContent: 'space-around', display: 'flex', flexDirection: 'column', borderRadius: 10}}>
                    <input onClick={()=>{
                        setBtn1(false)
                        setBtn2(false)
                        setBtn3(false)
                        setBtn4(false)
                        setBtn5(true)
                        setBtn6(false)
                        setArtStyle('in WaterColor style')
                    }}  className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/watercolor.png')}/>
                    <Typography variant="body" display="block" gutterBottom>
                        WaterColor
                    </Typography>
                </div>

                <div style={{border: btn6 && '1px solid black',borderWidth: 4, borderColor: 'black', width: 80, height: 100,marginBottom: 20, justifyContent: 'space-around', display: 'flex', flexDirection: 'column', borderRadius: 10}}>
                    <input onClick={()=>{
                        setBtn1(false)
                        setBtn2(false)
                        setBtn3(false)
                        setBtn4(false)
                        setBtn5(false)
                        setBtn6(true)
                        setArtStyle('in spectral style')
                    }}  className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/spectral.png')}/>
                        <Typography variant="body" display="block" gutterBottom>
                            Spectral
                        </Typography>
                </div>

            </div>
            <Button disabled={disabled}  onClick={handleClick} style={{width: 200, height: 50, borderRadius: 15, boxShadow: 10, marginBottom: 20, marginTop: 10}} variant="contained">Create</Button>

            <div style={{width: '100%', height: 80}}>
                {received && button}
                {error && <Typography variant='h5' style={{color: 'red'}}> please try another prompt</Typography>}
            </div>
        </div>
    )
}