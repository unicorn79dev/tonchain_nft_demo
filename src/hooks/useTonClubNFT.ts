import { useEffect, useState } from "react";
import { NftCollection } from "../contracts/HypersonicNFT";
import { NftItem } from "../contracts/NFTItem";
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
  const [NFTItems, setNFTitems] = useState<any>([]);

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
    // const collection_content = await collectionData.collection_content.asSlice().loadStringTail();
    const collection_content = await fetchData(
      "https://ipfs.filebase.io/ipfs/Qmcys3NyGWBW7NMgVwsV1zky6yvEQ595SgtNdLS5EU2Dxw/meta.json"
    );
    setOwner(owner.toString());
    setCollectionData(collectionData);
    setCollectionContent(collection_content);

    const content = "https://ipfs.filebase.io/ipfs/Qmcys3NyGWBW7NMgVwsV1zky6yvEQ595SgtNdLS5EU2Dxw/";
    const count = parseInt(collectionData?.next_item_index.toString());
    const data: any[] = [];
    for (let i = 0; i < count; i++) {
      console.log("data=>",i);
      let contentUrl = content + i + ".json";
      if (client) {
        const contract = await NftItem.fromInit(
          collectionData.owner_address,
          nftCollection.address,
          BigInt(i)
        );
        const NFTItemContract = client.open(
          contract
        ) as OpenedContract<NftItem>;
        const nft_data = await fetchData(contentUrl);
        const NFTowner = await NFTItemContract.getOwner();
        data.push({ ...nft_data, owner: NFTowner.toString() });
      }
    }
    setNFTitems(data);
  }

  useEffect(() => {
    getData();
  }, [nftCollection]);

  return {
    address: nftCollection?.address.toString(),
    owner: collectionOwner,
    collectionData,
    collectionContent,
    NFTItems,
    mintNFT: async (amount: number) => {
      await nftCollection?.send(
        sender,
        {
          value: toNano((amount * 0.05).toString()),
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
          value: toNano((amount * 0.05).toString()),
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
