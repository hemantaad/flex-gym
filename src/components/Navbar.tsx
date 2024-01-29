import { useState } from "react";
import Logo from "../assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "../hooks/useMediaQuery";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import ActionButton from "./ActionButton";
import { SelectedPage } from "../configs/enums";


interface Props {
  selectedPage: SelectedPage;
  setSelectedPage(page: SelectedPage): void;
  isTopOfPage: boolean
}


const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery('(min-width:1024px)')
  const [isMenuToogled, setIsMenuToogled] = useState<boolean>(false)
  const navbarBackground = isTopOfPage ? "": "bg-primary-100 drop-shadow"

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-100 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6 gap-16`}>
          <img src={Logo} alt="logo" />
          {isAboveMediumScreen ? (
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link page={'Home'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page={'Benefits'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page={'Classes'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page={'Contact'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
            <div className={`${flexBetween} gap-8`}>
              <span>Sign In</span>
              <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
            </div>
          </div>
          ):(
          <div className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToogled(!isMenuToogled)}>
            <FaBars className="h-6 w-6 text-white" />
          </div>
          )}
          
        </div>
      </div>

      { !isAboveMediumScreen && isMenuToogled && (
        <div className="fixed right-0 bottom-0 z-150 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToogled(!isMenuToogled)}>
              <FaXmark className="h-6 w-6 text-gray-400"/>
            </button>
          </div>

          <div className={`ml-[33%] flex flex-col gap-8 text-xl`}>
            <Link page={'Home'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page={'Benefits'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page={'Classes'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page={'Contact'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
