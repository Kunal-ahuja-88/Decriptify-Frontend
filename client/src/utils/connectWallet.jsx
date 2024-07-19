 import {ethers} from "ethers"
 import contractAbi from "../constants/contractAbi.json"
 import toast from "react-hot-toast"
import axios from "axios"

 export const connectWallet = async() => {

    try {
        if(!window.ethereum) {
            throw new Error("Metamask is not installed")
        }
        const accounts = await window.ethereum.request({
            method:"eth_requestAccounts"
        })
        const selectedAccount = accounts[0]
        console.log(selectedAccount)

        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner();

        const message = "Welcome to Decryptify"
        const signature = await signer.signMessage(message);
        
        const dataSignature = {
            signature
        }

        const url = `http://localhost:3000/api/authentication?address=${selectedAccount}`
        console.log(url)
        const res = await axios.post(url,dataSignature)
        
        const contractAddress = "0x1841417CcF7A9D9D1038a53C5493173F0BD92e79"
        const contractInstance = new ethers.Contract(contractAddress , contractAbi , signer)
        return {contractInstance,selectedAccount}

    } 
    
    catch (error) {
        toast.error("Wallet connection error")
        console.log(error)
    } 
    
 }

