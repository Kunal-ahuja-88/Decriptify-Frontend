import axios from "axios"
import { useState } from "react"
import { useWeb3Context } from "../contexts/useWeb3context"
import toast from "react-hot-toast"

const UploadImage = () => {
    const [file,setFile] = useState(null)
    const {web3State} = useWeb3Context()
    const {selectedAccount , contractInstance} = web3State;

    const uploadImageHash = async(ipfsHash) => {
        const tsc = await contractInstance.uploadFile(selectedAccount,ipfsHash)
        console.log(tsc)
    }

    const handleImageUpload = async() => {

        try {
            const formData = new FormData();
            formData.append("file",file) 
    
            const url = `http://localhost:3000/api/uploadImage`
            const res = await axios.post(url,formData);
            toast.success("image uploaded")
            await uploadImageHash(res.data.ipfsHash);

        } catch (error) {
            console.log(error)
            toast.error("image upload failed")
        }
       
       
    }
  console.log(file)
    return (
        <>
             <input type = "file" onChange = {(e) => setFile(e.target.files[0]) }></input>
            <button onClick = {handleImageUpload}>Upload Image</button>
        </>
    )
}

export default UploadImage