import { useWeb3Context } from "../contexts/useWeb3context";
import { connectWallet } from "../utils/connectWallet";

const Wallet = () => {
   const web3State = useWeb3Context();
   const handleWalletConnections = async() => {
    const {contractInstance,selectedAccount} = await connectWallet()
     console.log(contractInstance,selectedAccount)
   }
 

   return (
    <button onClick={handleWalletConnections}>
      Connect Wallet
    </button>
)

} 



export default Wallet