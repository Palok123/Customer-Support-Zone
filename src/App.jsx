import Navbar  from "./Componants/Navbar/Navbar.jsx";
import BannerSection from "./Componants/BannerSection/BannerSection.jsx";
import AllCard from "./Componants/AllCard/AllCard.jsx";
import Footer from "./Componants/Footer/FooteerSection.jsx"
import { Suspense, useState } from "react";
const getDataPromise = async ()=>{
  const response = await fetch('/Data.json');
  return response.json();
}

const dataPromise = getDataPromise();
console.log(dataPromise);



function App() {
  const [currentTskCnt,setCurrentTskCnt] = useState(0);
  const [completeTskCnt,setCompleteTskCnt] = useState(0);
  
  return (
    <>
        <div className="max-w-[95%]  h-[100%] mx-auto mb-8 ">
           <Navbar></Navbar>
           <BannerSection currentTskCnt={currentTskCnt} completeTskCnt={completeTskCnt} ></BannerSection>
           <Suspense fallback={<div>Loading ....</div>}>
               <AllCard dataPromise={dataPromise} setCurrentTskCnt={setCurrentTskCnt} currentTskCnt={currentTskCnt} completeTskCnt={completeTskCnt} setCompleteTskCnt={setCompleteTskCnt} ></AllCard>
           </Suspense>
           
        </div>
        <Footer></Footer>
          
    </>
  )
}

export default App
