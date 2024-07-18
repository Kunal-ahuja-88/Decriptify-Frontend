 
 export const connectWallet = async() => {
    if(!window.ethereum) {
        throw new Error("Metamask is not installed")
    }
    const accounts = await window.ethereum.request({
        method:"eth_requestAccounts"
    })
    console.log(accounts)
 }

