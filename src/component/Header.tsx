import  {useState, useEffect} from 'react';
import {TonConnectButton} from '@tonconnect/ui-react'

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`top-0 left-0 right-0 z-50 transition-all duration-300 mb-6 ${scrollPosition < 50 ? "bg-transparent py-2 shadow-md" : "bg-white shadow-xl py-2 fixed"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="rounded-full w-16 mr-4" src="/logo.png" alt="logo" />
            <div className="text-2xl font-bold text-[#1C2B46] hidden sm:inline">
              Ton Club App NFT
            </div>
          </div>
          <div className="flex items-center space-x-2">
              <TonConnectButton/> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
