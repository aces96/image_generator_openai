import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '@fontsource/roboto/700.css';
import '../App.css'


const Textfield = (props)=>{
    return (

        <TextField autoFocus="autoFocus" value={props.value} onChange={props.handleChange} id="outlined-basic" label="enter your prompt" variant="filled" color='primary' style={{width: '100%', marginBottom: 20}} />
    )

}




export const PromptContainer = (props)=>{


    return (
        <div style={{width: '80%', height: '80%'}}>
            <Typography align='start' style={{color: 'black'}} variant='h4'>
                Enter Prompt
            </Typography>

            <Textfield handleChange={props.handleChange} value={props.value}/>

            <div style={{width: '100%', height: 110, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 40}}>
                <div style={{ height: '100%', width: '23%'}}>
                    <input  onClick={()=>{
                        props.setValue('in comic style')
                    }} className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/comic.png')}/>
                    <Typography variant="button" display="block" gutterBottom>
                        Comic
                    </Typography>
                </div>

                <div style={{ height: '100%', width: '23%'}}>
                    <input onClick={()=>{
                        props.setValue('in HDR style')
                    }} className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/HDR.png')}/>
                    <Typography variant="button" display="block" gutterBottom>
                        HDR
                    </Typography>
                </div>

                <div style={{ height: '100%', width: '23%'}}>
                    <input onClick={()=>{
                        props.setValue('in realistic style')
                    }}  className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/realistic.png')}/>
                    <Typography variant="button" display="block" gutterBottom>
                        Realistic
                    </Typography>
                </div>

                <div style={{ height: '100%', width: '23%'}}>
                    <input onClick={()=>{
                        props.setValue('in spectral style')
                    }}  className='typeButton' style={{width:'100%', height: '82%', borderRadius: 10}} type='image' src={require('../assets/images/spectral.png')}/>
                        <Typography variant="button" display="block" gutterBottom>
                            Spectral
                        </Typography>
                </div>

            </div>
            <Button onClick={props.handleClick} style={{width: 200, height: 50, borderRadius: 15, boxShadow: 10}} variant="contained">Create</Button>
        </div>
    )
}