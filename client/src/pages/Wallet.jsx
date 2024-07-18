import { useWeb3Context } from "../contexts/useWeb3context";

const Wallet = () => {
   const web3State = useWeb3Context();
   console.log(web3State)

   return (
    <div>
        Wallet
    </div>
)

} 



export default Wallet