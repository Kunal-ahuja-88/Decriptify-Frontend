import { useState } from "react"
import { Web3context } from "./createWeb3context"

export const Web3Provider = ({children}) => {
     const [web3State,setWeb3State] = useState({
        contractInstance : null,
        selectedAccount : null
     })

     const updateWeb3State = (newState) => {
           setWeb3State(prevState => ({
            ...prevState,
            ...newState
           }))
     }
     return (
        <Web3context.Provider value = {{web3State,updateWeb3State}}>
            {children}
        </Web3context.Provider>
     )
}
