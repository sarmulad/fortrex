import React from 'react'
import member1 from '../../../assets/images/member1.png'
import member2 from '../../../assets/images/member2.png'
import member3 from '../../../assets/images/member3.png'
import member4 from '../../../assets/images/member4.png'
import member5 from '../../../assets/images/member5.png'
import member6 from '../../../assets/images/member6.png'
import member7 from '../../../assets/images/member7.png'
import member8 from '../../../assets/images/member8.png'




const Members = [
    member1,member2,member3,member4,member5,member6,member7,member8
  ];

function Team() {
  return (
    <div className='team max-w-[1200px] m-[auto] mt-10'>
         <h1 className="text-header md:text-large text-center text-white mb-[30px]">
             Our team
        </h1>
        <div className="team-container">
                {Members.map((member, index) => (
                    <img src={member} alt='team-member' key={index}/>
                    
                ))}                
            </div>
    </div>
  )
}

export default Team