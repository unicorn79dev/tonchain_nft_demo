// import { useTonConnect } from "./hooks/useTonConnect";
import { useTonClubNFT } from "./hooks/useTonClubNFT";
import Header from "./component/Header";
import NFTItem from "./component/NFT";
// import WebApp from "@twa-dev/sdk";
// import { fetchData } from "./hooks/useTonClubNFT";
// import eruda from "eruda";
// eruda.init();

import { useIsConnectionRestored } from "@tonconnect/ui-react";
import { useState } from "react";
const App = () => {
  // const { connected } = useTonConnect();
  const [receiver, setReceiver] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [mintAmount, setMintAmount] = useState<number>(0);
  const {
    address,
    owner,
    collectionData,
    // collectionContent,
    NFTItems,
    transferNFT,
    mintNFT,
  } = useTonClubNFT();
  let index = 0;
  const connectionRestored = useIsConnectionRestored();
  if (!connectionRestored) {
    return <h1 className="text-center">Please wait...</h1>;
  }
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="justify-center flex lg:flex-row flex-col mb-5">
          <div className="bg-[#f5f5f5] rounded-lg py-5 px-10 shadow-md">
            <div className="mb-2 lg:text-left text-center">
              <b className="text-[20px]">Info of NFT Collection </b>
            </div>
            <div>
              <b>Address: </b> {address}
            </div>
            <div>
              <b>Owner: </b>
              {owner ? owner : "Loading..."}
            </div>
            <div>
              <b>NFT items: </b>
              {collectionData
                ? collectionData?.next_item_index.toString()
                : "Loading..."}
            </div>
            <hr className="mt-3 mb-3" />
            <div className="gap-3 flex md:flex-row flex-col">

              <input
                className="rounded-lg border-2 border-[#d5d5d5] px-2 text-[grey]"
                placeholder="Amount of mintNFTs"
                onChange={(ev) => setMintAmount(parseInt(ev.target.value))}
                // value={amount}
              ></input>
              <button
                className="px-5 bg-[#3069ff] hover:bg-[#4076ff] py-1 rounded-lg text-white"
                onClick={() => mintNFT(mintAmount)}
              >
                Mint NFT
              </button>
            </div>
            <hr className="mt-3 mb-3" />
            <div className="flex gap-3  md:flex-row flex-col">
              <input
                className="rounded-lg border-2 border-[#d5d5d5] px-2 text-[grey]"
                placeholder="Receiver's Address"
                onChange={(ev) => setReceiver(ev.target.value)}
                value={receiver}
              ></input>
              <input
                className="rounded-lg border-2 border-[#d5d5d5] px-2 text-[grey]"
                placeholder="Amount of NFTs"
                onChange={(ev) => setAmount(parseInt(ev.target.value))}
                // value={amount}
              ></input>
               <button
                className="px-5 bg-[#3069ff] hover:bg-[#4076ff] py-1 rounded-lg text-white"
                onClick={() => transferNFT(receiver, amount)}
              >
                Transfer
              </button>
            </div>
          </div>
        </div>
        <hr className="mb-5" />
        <div className="flex flex-wrap gap-2 justify-center">
          {NFTItems.map((val: any) => {
            index++;
            return (
              <div key={index}>
                <NFTItem
                  image={val.image}
                  name={val.name}
                  description={val.description}
                  owner={val.owner}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
