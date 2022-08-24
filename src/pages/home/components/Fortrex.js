import React from 'react'
// import  electricTower  from "../../../assets/images/electricTower.svg";
// import  rifleTower  from "../../../assets/images/rifleTower.svg";
// import  cannonTower from "../../../assets/images/cannonTower.svg";
import  cannons from "../../../assets/images/cannons.svg";



function Fortrex() {
  return (
       <div className="mt-[40px] pd flex flex-col items-center" >
            <h1 className="text-header md:text-large uppercase leading-none text-white text-center">
             Your fortrex
            </h1>
            <p className="text-white text-[14px] max-w-[900px] md:text-[16px] font-zona-semibold text-center">
            An RTS game with deck building and detailed progression system that lets you customize 
            Fortrex to your playstyle. Create a unique deck and destroy your enemies
            </p>
            <div className='relative'>
                {/* <img src={rifleTower}/>
                <img src={electricTower}/>
                <img src={cannonTower}/> */}
                <img src={cannons} className='max-w-[1350px] '/>
            </div>

       </div>
  )
}

export default Fortrex