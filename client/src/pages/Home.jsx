import { useWeb3Context } from "../contexts/useWeb3context"
import UploadImage from "../components/uploadImage"
import GetImage from "../components/getImage"

const Home = () => {


    //const {web3State} = useWeb3Context();
    //const {selectedAccount} = web3State;
   

    return (
    <div>
    <UploadImage />
    </div>
    )
}

export default Home