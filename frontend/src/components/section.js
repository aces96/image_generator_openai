import Grid from '@mui/material/Grid';
import { PromptContainer } from './promptContainer';
import { PromptContext } from '../promptContext';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React,{ useContext, useEffect, useState } from 'react';
import { ImageEditor } from './imageEditor';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';





export const Section = ()=>{
    const image = useContext(PromptContext)
    const [open, setOpen] = React.useState(false);
    useEffect(()=>{
        console.log(image[0]);
    },[image[0]])

    const Item = styled(Paper)(({ theme }) => ({
        maxHeight: '100%',
        width: '100%',
        color: theme.palette.text.secondary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }));


    return (
        <div style={{width: '100%', height: '100%', background: 'transparent', overflow: 'hidden'}} className='section'>
            <Grid container>
                <Grid item  xs={4}>
                    <Item>
                        <PromptContainer/>
                        {/* <ImageEditor/> */}
                    </Item>
                </Grid>

                <Grid justifyContent={'center'} alignItems={'center'} item xs={8}>
                        <img style={{maxHeight: 600, maxWidth: 600, verticalAlign: 'middle', overflow: 'auto'}}  src={`data:image/png;base64,${image[0]}`}/>
                        {image[0].length > 0 && 
                            <Button onClick={()=>setOpen(true)} variant='contained' style={{width: 80, height: 40, borderRaidius: 15, position: 'absolute', top: 50, right: 50}}>
                                Edit
                            </Button>
                        }
                              <Modal
                                open={open}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                >
                                    <ImageEditor handleSave={(object)=>{
                                        setOpen(false)
                                        image[1](object)
                                    }} url={image[0]}/>

                                </Modal>
                </Grid>
            </Grid>
        </div>
    )
}