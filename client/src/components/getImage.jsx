import axios from "axios"
import { useWeb3Context } from "../contexts/useWeb3context"
import { useState } from "react"

const GetImage = () => {
    const [currentPage , setCurrentPage] = useState(1)
    const [imagePerPage,setImagePerPage] = useState(2);
    const [images,setImages] = useState([])
    const {web3State} = useWeb3Context()
    const {selectedAccount , contractInstance} = web3State

    const getImageHashes = async () => {
        const ipfsHashes = await contractInstance.viewFiles(selectedAccount)
        return ipfsHashes
    }
    const getImage = async () => {
    try {
        const ipfsHashes = await getImageHashes();
        const ipfsHashArray = Object.values(ipfsHashes);
        const url = `http://localhost:3000/api/getImage?page=${currentPage}&limit=${imagePerPage}`;
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "x-access-token": token
            }
        };

        const res = await axios.post(url, ipfsHashArray, config);
        const imagesData = res.data.decryptedImageArr;
        setImages(imagesData || []);
    } catch (error) {
        console.error("Error fetching images:", error);
        setImages([]);  // Ensure images is always an array
    }
};

    return (
        <>
        { Array.isArray(images) &&  images.length > 0 ? (images.map((imgData,index) => {
            return <img
                key={index}
                src={`data:image/jpeg;base64,${imgData}`}
                alt={`Image ${index + 1}`}
                className="w-[300px] h-[240px] mx-2 object-cover"
              />
        })) : (<p>No Images found</p>)}
        <button onClick={getImage}>Get Image</button>
        </>
    )
};

export default GetImage