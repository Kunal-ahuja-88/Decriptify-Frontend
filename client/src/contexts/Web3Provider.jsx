import { useState } from "react"
import { Web3context } from "./createWeb3context"

export const Web3Provider = ({children}) => {
     const [web3State,useWeb3State] = useState({
        contractInstance : null,
        selectedAccount : null
     })
     return (
        <Web3context.Provider value = {web3State}>
            {children}
        </Web3context.Provider>
     )
}
