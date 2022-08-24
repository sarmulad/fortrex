import React from 'react'
import member1 from '../../../assets/images/member1.svg'
import member2 from '../../../assets/images/member2.svg'
// import member3 from '../../../assets/images/member3.svg'
// import member4 from '../../../assets/images/member4.svg'
// import member5 from '../../../assets/images/member5.svg'
// import member6 from '../../../assets/images/member6.svg'
// import member7 from '../../../assets/images/member7.svg'
// import member8 from '../../../assets/images/member8.svg'
// import member9 from '../../../assets/images/member9.svg'
// import member10 from '../../../assets/images/member10.svg'
// import member11 from '../../../assets/images/member11.svg'
// import member12 from '../../../assets/images/member12.svg'




const Members = [
    member1,member2,member2,member2,member2,member2,member2,member2
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