import React from "react";
interface NFTProps {
  image: string;
  name: string;
  description: string;
  owner: string;
}
const NFTItem: React.FC<NFTProps> = ({image,name,description,owner}) => {
  return (
    <div className="w-[250px] rounded-lg overflow-hidden bg-[#f5f5f5] shadow-md">
      <div className="overflow-hidden">
      <img src={image} className="w-full hover:scale-110 duration-700 ease-in-out " />
      </div>
      <div className="px-3 py-2 ">
        <div className="text-[10px]"><b>Name:</b> {name}</div>
        <hr />
        <div className="text-[10px]"><b>Description:</b> {description}</div>
        <hr />
        <div className="text-[10px]"><b>Owner:</b> {owner.slice(0,10)}...{owner.slice(owner.length-10, owner.length)}</div>
      </div>
    </div>
  );
};

export default NFTItem;
