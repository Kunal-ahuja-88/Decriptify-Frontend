import { useWeb3Context } from "../contexts/useWeb3context"
import UploadImage from "../components/uploadImage"
import GetImage from "../components/getImage"
import { useState } from "react"

const Home = () => {

    const [reload , setReload] = useState(false)


    const reloadEffect = () => {
        setReload(!reload)
    }
   

    return (
    <div className="relative h-full w-screen flex flex-col justify-center items-center ">
    <UploadImage reloadEffect ={reloadEffect}/>
    <GetImage reload={!reload}/>
    </div>
    )
}

export default Home
