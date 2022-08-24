import React from "react";
import styled from "styled-components";

import   Running  from "../../../assets/images/run.svg";
import  Bnb  from "../../../assets/images/bnb.svg";


const Wrapper = styled.div`
    background: url(${Running});
    background-position: bottom bottom;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    padding-right:6rem;
    @media (max-width: 1024px){
     padding-right:0rem;
     background:none;
     height:auto;
     }
    }
    .presale-item{
     margin-top: 30vh;
    }
  .project-container{
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    background: rgba(255, 255, 255, 0.02);
    box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(80px);
    border-radius: 8px;
    padding:2rem 0rem;

  }
  @media (max-width: 1024px) {
    .presale-container {
      flex-direction: column;
      gap: 38px;
      p,
      h2 {
        text-align: center;
      }
    }
  }
  @media (max-width: 700px){
    .project-container{
        grid-template-columns: repeat(2, 1fr);
      }
    .presale-item{
        margin-top:0vh;
    }
    .item-1{
      border-bottom:1px solid white;
    }
    .item-2{
        border-right:0;
    }
  }
  @media (max-width: 500px) {
    .project-container{
      margin: 0px;
      svg {
        height: 300px;
      }
    }
   
  }
`;

const OurVision = () => {
  return (
    <Wrapper className="mt-[80px]">
      <div className="wrapped-content presale">
        <div className="flex items-center justify-end presale-container">
          <div className="flex flex-col space-y-[10px] max-w-[700px] presale-item">
           <h3 className="metrics-header font-Passion-One text-center mid:text-start text-white text-[36px]">Presale Stages</h3>
            <div className="project-container ">
                <div className="p-[2rem] border-r-[1px] border-white item-1">
                    <p className="text-white">Total Supply</p>
                    <h3 className="text-white text-[20px]">10.000.000</h3>
                </div>
                <div className="p-[2rem] border-r-[1px] border-white item-1 item-2">
                    <p className="text-white">Total Supply</p>
                    <h3 className="text-white text-[20px]">10.000.000</h3>
                </div>
                <div className="p-[2rem] border-r-[1px] border-white">
                    <p className="text-white">Total Supply</p>
                    <h3 className="text-white text-[20px]">10.000.000</h3>
                </div>
                <div className="p-[2rem]">
                    <p className="text-white">Total Supply</p>
                    <h3 className="text-white text-[20px]">10.000.000</h3>
                </div>
            </div>
             <div>
              <img src={Bnb} className="mt-[2rem] max-w-[280px]"/>
             </div>
          </div>
          <img src={Running} className="lg:hidden"/>

        </div>
      </div>
     
    </Wrapper>
  );
};

export default OurVision;
