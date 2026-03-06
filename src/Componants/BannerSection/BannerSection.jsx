import bgImg1 from "../../assets/vector1.png";

export default function BannerSection({currentTskCnt,completeTskCnt}) {

    return (

       <div className="flex max-sm:flex-col max-sm:gap-5 gap-[4%] mt-10">
           <div className="w-[48%] max-sm:w-[100%] max-sm:h-[250px] h-[400px] bg-center bg-cover bg-no-repeat rounded-xl flex flex-col items-center justify-center gap-2 "
      style={{
        backgroundImage: `
          linear-gradient(to bottom left, #632EE3, #9F62F2),
          url(${bgImg1})
        `,
        backgroundBlendMode: "overlay"
      }}>
       
          <p className="text-white text-[24px]">In-Progress</p>
          <p className="text-white text-[60px] font-semibold">{currentTskCnt}</p>
  
        </div>
         <div className="w-[48%] max-sm:w-[100%] max-sm:h-[250px] h-[400px] bg-center bg-cover bg-no-repeat  rounded-xl  flex flex-col items-center justify-center gap-2"
      style={{
        backgroundImage: `
          linear-gradient(to right, #54CF68, #00827A),
          url(${bgImg1})
        `,
        backgroundBlendMode: "overlay"
      }}>
        
         <p className="text-white text-[24px]">Resolved</p>
          <p className="text-white text-[60px] font-semibold">{completeTskCnt}</p>
  
        </div>
       </div>
    )

}