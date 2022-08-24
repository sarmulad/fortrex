import React from 'react'
import { ReactComponent as Roadmap} from "assets/images/roadmap.svg";
import { ReactComponent as RoadmapMobile} from "assets/images/road-mobile.svg";


function Dates() {
  return (
    <div className='dates mt-[100px] '>
        <h1 className="font-Passion-One text-white text-center text-3xl mid:text-[64px]">Roadmap</h1>
        <Roadmap className=' max-w-[1100px] m-[auto] web-roadmap'/>
        <RoadmapMobile className=' lg:hidden mx-[auto] my-[2rem]'/>

    </div>
  )
}

export default Dates