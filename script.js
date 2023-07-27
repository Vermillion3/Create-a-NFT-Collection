const NFTS = []

function mintNFT(Name, Nationality, Gender, accessories){
    const NFT = {
      name: Name,
      Nationality: Nationality,
      Gender: Gender,
      accessories: accessories,
      
    }
    console.log("Minted: " + Name)
    NFTS.push(NFT);
}


function listNFTS(){
    for(let i = 0; i < NFTS.length; i++){
        console.table(NFTS[i])
    }
}

function getTotalSupply(){
    console.log("Total NFT's: " + NFTS.length)
}

mintNFT("Jose", "Filipino", "Male", "Gold Watch" );
mintNFT("Jay", "British", "Male", "Silver Belt" );
mintNFT("john", "Canadian", "Male", "Sun Glasses" );
mintNFT("Kay", "Spanish", "Female", "Pair of Earings" );



listNFTS();
getTotalSupply()
