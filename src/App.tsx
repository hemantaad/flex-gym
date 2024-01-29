import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { SelectedPage } from "./configs/enums";
import Home from './components/Home';


function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const handleSelectedPage = (page: SelectedPage) => {
    setSelectedPage(page)
  }
  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY === 0 ) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else setIsTopOfPage(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return <div className="app">
    <Navbar selectedPage={selectedPage} setSelectedPage={handleSelectedPage}  isTopOfPage={isTopOfPage} />
    <Home setSelectedPage={handleSelectedPage} />
    </div>;
}

export default App;
