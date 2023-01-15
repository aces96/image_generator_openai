import { useSlotProps } from "@mui/base";
import React, {useState, createContext} from "react";


export const PromptContext = createContext();



export const PromptProvider = (props)=>{
    const [prompt, setPrompt] = useState("")


    return (
        <PromptContext.Provider value={[prompt, setPrompt]}>
            {props.children}
        </PromptContext.Provider>
    )
}