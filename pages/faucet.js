import Navbar from '../components/NavBar';
import { WalletContext } from './_app';
import { useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';
import { FAUCET_CONTRACT_ADDRESS } from '../constants/constants';
import faucetABI from '../public/FaucetABI.json';

const Faucet = () => {
    const {wallet, setWallet} = useContext(WalletContext);
    const[walletConnected, setWalletConnected] = useState(false);
    const[signedFaucetContract, setSignedStakingContract] = useState();
    const[supply, setSupply] = useState(0);

    useEffect(() => {
        if(wallet && !wallet.error) {
            setupWallet();
        }
    },[wallet]);

    const setupWallet = async () => {
        const faucetContract = new ethers.Contract(FAUCET_CONTRACT_ADDRESS, faucetABI, wallet.provider);
        const signedFaucetContract = faucetContract.connect(wallet.signer);

        setSignedStakingContract(signedFaucetContract);

        let maxSupply = await signedFaucetContract.maxSupply();
        let tokenCount = await signedFaucetContract.tokenCount();

        console.log("Max Supply:", maxSupply);

        setWalletConnected(true);
        setSupply(maxSupply - tokenCount);
    }

    const mintNFT = async () => {
        if(wallet && !wallet.error) {
            const txnReceipt = await signedFaucetContract.mintToken();

            console.log("Transaction Receipt: ", txnReceipt);
        }
    }
    
    return (
        <>
        <Navbar className="invisible" pageLoad="Faucet"/>  
        <div className="w-full h-screen bg-gin-50 flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center p-10">
                <button onClick={() => mintNFT()} className={`text-semibold lg:px-8 py-3 lg:py-4 my-2 lg:my-4 text-xl md:text-2xl lg:text-3xl + ${walletConnected ? 'bg-greenKelp-300 text-white hover:bg-greenKelp-400' : 'bg-gray-500 text-white cursor-not-allowed disabled'}`}>Mint</button>
                <div className="text-semibold text-base lg:text-xl">Supply Left: {supply} </div>
            </div>
        </div>
        </>
    )
}

export default Faucet;