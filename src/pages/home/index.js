/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as Fortrex } from "assets/images/fortrex.svg";

import Join from "assets/images/join.svg";
import Play from "assets/images/play.svg";
import UserIcon from "assets/images/user.svg";
import SubIcon from "assets/images/Subtract.svg";
import AppIcon from "assets/images/apple.svg";
import GoogleIcon from "assets/images/google.svg";
import LeafLeft from 'assets/images/leaf-left.svg'
import LeafRight from 'assets/images/leaf-right.svg'
import Star from 'assets/images/star.svg'
import  Magg  from "assets/images/magg.svg";

import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import How from "./components/How";
import Presale from "./components/Presale";
import Fort from "./components/Fortrex";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";


const Home = () => {
  return (
    <div>
      <TopNav />
      <div >     
        <div className="pd hero">
         <div className="h-[160px] md:h-[380px] ">
          <Fortrex className="w-full h-full " />
         </div>
         <div className="pd mt-5 flex flex-col items-center justify-center">
          <a
            className="text-white flex items-center justify-between text-mid uppercase py-[10px] px-[20px] rounded-lg font-Passion-One"
            href="#"
          >
            <img src={Join} alt="button" className="w-full h-full"/>
           
          </a>
          <a
            className="text-white flex items-center justify-between text-mid  uppercase py-[10px] px-[20px] rounded-lg font-Passion-One"
            href="#"
          >
            <img src={Play} alt="button" className="w-full h-full"/>
          </a>
        </div>

        <div className="pd mt-5 flex items-center justify-center gap-8">
          <a
            className="text-white md:w-[160px] md:h-[56px]  flex items-center justify-center btn text-mid uppercase py-[10px] px-[20px] rounded-lg font-Passion-One"
            href="#"
          >
            <span className="flex items-center gap-2">
               <img src={UserIcon} alt="button" className="w-full h-full"/>
              Register
            </span> 
          </a>
          <a
            className="text-white md:w-[160px] md:h-[56px] flex items-center justify-center gap-2 btn text-mid uppercase py-[10px] px-[20px] rounded-lg font-Passion-One"
            href="#"
          >
            <span className="flex items-center gap-2">
              <img src={SubIcon} alt="button" className="w-full h-full"/>
              Tutorial
            </span> 
          </a>
        </div>

        <div className="pd flex items-center justify-center gap-8 mt-12">
          <a
            className=" flex items-center justify-center"
            href="#"
          >
            <img src={AppIcon} alt="button" className="w-full h-full"/>
          </a>
          <a
            className=" flex items-center justify-center"
            href="#"
          >
            <img src={GoogleIcon} alt="button" className="w-full h-full"/>
          </a>
          </div>
        </div>

        <div className="flex flex-col items-center relative justify-center conquer xl:min-h-[500px] md:min-h-[300px] mid:min-h-[400px] pt-[100px] pb-[100px] ">
              <span className="text-white text-center font-Passion-One">
                 Welcome to the Islands, Challanger
              </span>
              <p className="text-white text-[18px] max-w-[70%] md:text-[30px] xl:text-[64px] xl:max-w-[900px] font-Passion-One text-center leading-[1.5]">
                Make your way through your opponents and conquer the Island
              </p>
             <img src={LeafLeft} alt="button" className="absolute  left-[20px] mid:left-[100px] top-[100px]  overflow-hidden xl:overflow-visible h-[100px] sm:h-[200px] xl:h-[280px]"/>
             <img src={LeafRight} alt="button" className="absolute right-[20px] mid:right-[100px] top-[100px] ms:left-0 overflow-hidden xl:overflow-visible h-[100px] sm:h-[200px] xl:h-[280px]"/>
             <img src={Star} alt="button" className="absolute bottom-[50px] top-[auto] ms:left-0 overflow-hidden  w-[150px] sm:w-[200px] lg:w-[100] "/>
        </div>
        
      <div className="flex space-x-2 mt-[5%] items-center justify-center magg-container p-[1rem]">
        <div className="flex-shrink-0">
        <h1 className="text-white text-center text-[30px] mid:text-[64px] sm:text-start leading-none">Play & Earn</h1>
        <p className="leading-8 mt-[33px] font-zona-semibold text-white text-[16px] mid:text-[18px] max-w-[533px]">
        Fortrex: Color Duels is an RTS game where players can earn COL 
        token through their battles. While battling their way up to the conquest, 
        players can unlock different Fortrexes, customize their talents to your 
        playstyle. As you grow and challange harder foes, you will earn more COL 
        tokens, NFTs and more rewards.
        </p>
      </div>
      <div className=" pointer-events-none max-h-[800px] max-w-[675px]">
        <img src={Magg} className="max-h-[750px] mid:max-h-full"/>
      </div>
    </div>
     <How/>
     <Presale/>
     <Fort/>
     <Roadmap/>
     <Team/>
     <Footer />

        {/* <div className="roadmap pt-[100px]" id="roadmap">
          <div className="pd">
            <h1 className="text-header md:text-large md:text-center text-white mb-[76.61px]">
              ROADMAP
            </h1>
            <div className="flex flex-col space-y-[76.61px] pb-[137px] xl:max-w-[1000px] xl:mx-auto">
              {roadmaps.map((roadmap, index) => (
                <div
                  className="flex flex-col xl:flex-row xl:space-x-[55px]"
                  key={index}
                >
                  <Diamond className="xl:hidden" />
                  <div className="flex flex-col xl:flex-1">
                    <h1 className="text-white text-header md:text-[48px] mt-[45px] mb-4 xl:m-0">
                      {roadmap.timeline}
                    </h1>
                    <p className="font-zona-semibold text-green text-[26.34px] mb-[23.52px] xl:m-0">
                      {roadmap.header}
                    </p>
                  </div>
                  <LargeDiamond className="hidden xl:block xl:flex-1" />
                  <div className="flex flex-col space-y-[16.94px] xl:flex-1">
                    {roadmap.paths.map((path, index) => (
                      <div className="flex space-x-2" key={index}>
                        <div className="flex-shrink-0">
                          {path.passed ? <Completed /> : <Uncompleted />}
                        </div>
                        <p className="text-white font-zona-regular text-[15.05px]">
                          {path.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
