 import {ethers} from "ethers"
 import contractAbi from "../constants/contractAbi.json"
 export const connectWallet = async() => {

    try {
        if(!window.ethereum) {
            throw new Error("Metamask is not installed")
        }
        const accounts = await window.ethereum.request({
            method:"eth_requestAccounts"
        })
        const selectedAccount = accounts[0]
        const provider =new ethers.BrowserProvider(window.ethereum)
        const signer =await provider.getSigner();
        const contractAddress = "0x1841417CcF7A9D9D1038a53C5493173F0BD92e79"
        const contractInstance = new ethers.Contract(contractAddress , contractAbi , signer)
        return {contractInstance,selectedAccount}
    } catch (error) {
        toast.error("Wallet connection error")
        console.log(error)
    } 
    
 }

