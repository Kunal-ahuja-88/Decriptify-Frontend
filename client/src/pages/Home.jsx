import { useWeb3Context } from "../contexts/useWeb3context"
import UploadImage from "../components/uploadImage"
import GetImage from "../components/getImage"

const Home = () => {


    //const {web3State} = useWeb3Context();
    //const {selectedAccount} = web3State;
   

    return (
    <div className="relative h-full w-screen flex flex-col justify-center items-center ">
    <UploadImage />
    <GetImage />
    </div>
    )
}

export default Home