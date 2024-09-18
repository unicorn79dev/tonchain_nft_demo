// import { useTonConnect } from "./hooks/useTonConnect";
import { useTonClubNFT } from "./hooks/useTonClubNFT";
import Header from "./component/Header";
// import NFTItem from "./component/NFT";
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
  const [showToast, setShowToast] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const {
    address,
    owner,
    collectionData,
    transferedNFT,
    // collectionContent,
    // NFTItems,
    transferNFT,
    mintNFT,
  } = useTonClubNFT();
  // let index = 0;
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
              <b>Address: </b>{" "}
              {address
                ? `${address.slice(0, 10)} ... ${address.slice(
                    address.length - 10
                  )}`
                : "Loading..."}
            </div>
            <div>
              <b>Owner: </b>
              {owner
                ? `${owner.slice(0, 10)} ... ${owner.slice(owner.length - 10)}`
                : "Loading..."}
            </div>
            <div>
              <b>NFT items: </b>
              {collectionData
                ? collectionData?.next_item_index.toString()
                : "Loading..."}
            </div>
            <div>
              <b>Transferred NFT items: </b>
              {transferedNFT ? transferedNFT : "Loading"}
            </div>
            <hr className="mt-3 mb-3" />
            <div className="gap-3 flex md:flex-row flex-col">
              <input
                className="md:w-4/5 w-full  rounded-lg border-2 border-[#d5d5d5] px-2 text-[grey]"
                placeholder="Amount of mintNFTs:"
                onChange={(ev) => setMintAmount(parseInt(ev.target.value))}
                // value={amount}
              ></input>
              <button
                className="md:w-1/5 w-full px-5 bg-[#3069ff] hover:bg-[#4076ff] py-1 rounded-lg text-white"
                onClick={() => {
                  if (mintAmount > 75) {
                    setShowToast(true);
                    setIsVisible(true);
                    setTimeout(() => {
                      setIsVisible(false);
                      setTimeout(() => {
                        setShowToast(false);
                      }, 300);
                    }, 2500);
                  } else mintNFT(mintAmount);
                }}
              >
                Mint
              </button>
            </div>
            <hr className="mt-3 mb-3" />
            <div className="flex gap-3  md:flex-row flex-col">
              <input
                className="md:w-3/5 w-full rounded-lg border-2 border-[#d5d5d5] px-2 text-[grey]"
                placeholder="Receiver's Address:"
                onChange={(ev) => setReceiver(ev.target.value)}
                value={receiver}
              ></input>
              <input
                className="md:w-1/5 w-full rounded-lg border-2 border-[#d5d5d5] px-2 text-[grey]"
                placeholder="Amount:"
                onChange={(ev) => setAmount(parseInt(ev.target.value))}
              ></input>
              <button
                className="md:w-1/5 w-full px-5 bg-[#3069ff] hover:bg-[#4076ff] py-1 rounded-lg text-white"
                onClick={() => {
                  if (amount > 75) {
                    setShowToast(true);
                    setIsVisible(true);
                    setTimeout(() => {
                      setIsVisible(false);
                      setTimeout(() => {
                        setShowToast(false);
                      }, 300);
                    }, 2500);
                  } else transferNFT(receiver, amount);
                }}
              >
                Transfer
              </button>
            </div>
          </div>
        </div>
        {/* <hr className="mb-5" />
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
        </div> */}
      </div>
      {showToast && (
        <div
          className={`fixed top-10 right-5 w-80 bg-red-500 text-white p-4 rounded shadow-lg transform transition-all duration-300 ease-in-out 
                                ${
                                  isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-0 opacity-0"
                                }`}
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> Input an amount less than 75</span>
          <button
            className="absolute top-0 right-0 p-1 text-white hover:text-gray-200"
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setShowToast(false);
              }, 300); // Match this duration with the exit animation duration
            }}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
