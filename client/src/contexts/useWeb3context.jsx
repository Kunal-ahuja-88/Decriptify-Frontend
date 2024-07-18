import {Web3context} from "./createWeb3context"
import {useContext} from "react"

export const useWeb3Context = () => {
    return useContext(Web3context)
}
