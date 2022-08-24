import React from "react";
import logo from "../../../assets/images/duel.svg";
import twitter from "../../../assets/images/twitter.svg";
import facebook from "../../../assets/images/facebook.svg";
import instagram from "../../../assets/images/ig.svg";
import discord from "../../../assets/images/discord.svg";
import telegram from "../../../assets/images/telegram.svg";

export default function Footer() {
  const links = [
    {
      title: "Contact Info",
      data: [
        {
          title:"admin@fortrexcolorduel.com",
          link:''
        },
        {
          title:"support@fortrexcolorduel.com",
          link:''
        },
        {
          title:"+10249592034825",
          link:'#'
        },
        {
          title:"+10249592034825",
          link:'#'
        },
      ]
    },
   
    
  ];
  const socialLink = [
    {
      social: twitter,
      link: ""
    },
    {
      social: telegram,
      link: ""
    },
    {
      social: discord,
      link: ""
    },
    {
      social: facebook,
      link: ""
    },
    {
      social: instagram,
      link: ""
    },
  ];
  return (
    <>
    <footer className="mt-[3rem] mid:mt-[5rem]">
      <div className="container max-w-[1200px] m-[auto] py-[3rem]">
       <div className="upper flex justify-between">
         <img src={logo} alt='logo' className="basis-3/12 max-w-[300px]"/>
         <div className="flex flex-col">
          <form >
            <label className="font-Passion-One text-white text-2xl ">Newsletter subscription</label>
            <div className="flex input-container mt-4">
             <input type='email' placeholder="Your email address" className="bg-black text-white p-1"/>
             <button type='submit' className="submit-btn">Submit</button>
            </div>
            <ul className="flex flex-col gap-4 mt-[2rem]">
              <h3 className="font-Passion-One text-white text-2xl">Social</h3>
              <div className="flex gap-4" >
               {socialLink.map((icon, index) => (
                  <a href={icon.link} target='_blank' rel="noreferrer" key={index}><img src={icon.social} key={index} alt='social-icon'/></a>
                ))}
              </div>
           </ul>
          </form>
         </div>
         <div className="links">
           {links.map(({ title, data }, index) => {
            return (
              <div className="link flex flex-col gap-4" key={index}>
                 <h3 className="font-Passion-One text-white text-2xl">{title}</h3>
                <ul className="flex flex-col gap-4">
                  {data.map((link, index2) => (
                    <a href={link.link} className=" text-white" key={index2}><li key={index2}>{link.title}</li></a>
                  ))}
                </ul>
              </div>
            );
          })}
          </div>
        </div>
        
      </div>
    </footer>
    <div className="lower text-center text-white">
     <p>© Copyright by <span className="text-[#226ADD]">Fortrex Color Duel</span> All rights reserved.</p>
    </div>
  </>
  );
}
