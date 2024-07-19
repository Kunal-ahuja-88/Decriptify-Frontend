import { useNavigate } from "react-router-dom";
import { useWeb3Context } from "../contexts/useWeb3context";
import { connectWallet } from "../utils/connectWallet";
import { useEffect } from "react";

const Wallet = () => {
    const navigateTo = useNavigate();
   const {updateWeb3State , web3State} = useWeb3Context();
   const {selectedAccount} = web3State;

   useEffect(() => {
     if(selectedAccount) {
        navigateTo("/home")
     }
   },[selectedAccount,navigateTo])

   const handleWalletConnections = async() => {
    const {contractInstance,selectedAccount} = await connectWallet()
    updateWeb3State({contractInstance,selectedAccount}) 
    
   }
 

   return (
    <button onClick={handleWalletConnections}>
      Connect Wallet
    </button>
)

} 



export default Wallet