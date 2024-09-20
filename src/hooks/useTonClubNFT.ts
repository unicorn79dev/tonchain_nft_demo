import { useEffect, useState } from "react";
import { NftCollection } from "../contracts/HypersonicNFT";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract, toNano } from "@ton/core";
const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    return {
      name: "",
      image: "",
      description: "",
    };
  }
};
export function useTonClubNFT() {
  const [collectionOwner, setOwner] = useState<null | string>();
  const [collectionData, setCollectionData] = useState<any>();
  const [collectionContent, setCollectionContent] = useState<any>();
  const [transferedNFT, setTransferedNFT] = useState<any>();

  const client = useTonClient();
  const { sender } = useTonConnect();

  const nftCollection = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = await NftCollection.fromAddress(
      Address.parse("EQBlJZeRtaDQm3hu1B99Em1D4_aPmiMoqTiJi9Cl4o2Apd5u")
    );
    return client.open(contract) as OpenedContract<NftCollection>;
  }, [client]);
  async function getData() {
    if (!nftCollection) return;
    const owner = await nftCollection.getOwner();
    const collectionData = await nftCollection.getGetCollectionData();
    const collection_content = await fetchData("https://ipfs.filebase.io/ipfs/Qmcys3NyGWBW7NMgVwsV1zky6yvEQ595SgtNdLS5EU2Dxw/meta.json");
    const transferedNFT = await nftCollection.getGetTransferItemIndex();
    setTransferedNFT(transferedNFT.toString());
    setOwner(owner.toString());
    setCollectionData(collectionData);
    setCollectionContent(collection_content);
  }

  useEffect(() => {
    getData();
  }, [nftCollection]);

  return {
    address: nftCollection?.address.toString(),
    owner: collectionOwner,
    collectionData,
    collectionContent,
    transferedNFT,
    mintNFT: async (amount: number) => {
      await nftCollection?.send(
        sender,
        {
          value: toNano((amount * 0.05)),
        },
        {
          $$type: "MultiMint",
          amount: BigInt(amount),
        }
      );
      await sleep(6000);
      getData();
    },
    transferNFT: async (receiver: string, amount: number) => {
      await nftCollection?.send(
        sender,
        {
          value: toNano((amount * 0.05)),
        },
        {
          $$type: "InitialTransfer",
          newOwner: Address.parse(receiver),
          amount: BigInt(amount),
        }
      );
      await sleep(6000);
      getData();
    },
  };
}
