import axios from 'axios';

// Constants for API access
const API_KEY = 'YOUR_CROSSMINT_API_KEY';
const COLLECTION_ID = 'YOUR_COLLECTION_ID'; // Replace with your actual collection ID
const BASE_URL = 'https://www.crossmint.com/api/2022-06-09';

// Function to mint an NFT
async function mintNFT(collectionId: string, recipient: string, metadata: any) {
    const url = `${BASE_URL}/collections/${collectionId}/nfts`;
    const headers = {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY
    };
    const body = {
        recipient: recipient,
        metadata: metadata,
        reuploadLinkedFiles: true,
        compressed: true // Assuming Solana for compression, adjust as needed
    };

    try {
        const response = await axios.post(url, body, { headers: headers });
        return response.data;
    } catch (error) {
        console.error('Error minting NFT:', error);
        return null;
    }
}

// Example metadata for the NFT
const metadata = {
    name: "Crossmint Example NFT",
    image: "https://www.crossmint.com/assets/crossmint/logo.png",
    description: "My NFT created via the mint API!"
};

// Example recipient format (adjust as necessary)
const recipient = "email:testy@crossmint.io:polygon";

// Mint the NFT
mintNFT(COLLECTION_ID, recipient, metadata)
    .then((result) => {
        if (result) {
            console.log('NFT Minted Successfully:', result);
        } else {
            console.log('Failed to mint NFT');
        }
    });
