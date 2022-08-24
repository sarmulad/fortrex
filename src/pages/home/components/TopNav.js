/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as Hamburger } from "assets/icons/hamburger.svg";
import { ReactComponent as Close } from "assets/icons/close.svg";
import { hideTopNav, showTopNav } from "utils/navigation";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between pt-[29px] lg:px-[80px] pd nav">
      <Logo />
      <ul className="p-0 items-center space-x-5 hidden mid:flex">
        <li>
          <HashLink
            to="/#whatis"
            className="font-vectro-bold text-white uppercase text-[18px]"
          >
            what IS
          </HashLink>
        </li>
        <li>
          <HashLink
            className="font-vectro-bold text-white uppercase text-[18px]"
            to="/#why"
          >
            WHY
          </HashLink>
        </li>
        <li>
          <HashLink
            className="font-vectro-bold text-white uppercase text-[18px]"
            to="/#features"
          >
            FEATURES
          </HashLink>
        </li>
        <li>
          <HashLink
            className="font-vectro-bold text-white uppercase text-[18px]"
            to="/#nftandgame"
          >
            NFT AND GAME
          </HashLink>
        </li>
        <li>
          <HashLink
            className="font-vectro-bold text-white uppercase text-[18px]"
            to="/#roadmap"
          >
            ROADMAP
          </HashLink>
        </li>
        <li>
          <Link
            className="font-vectro-bold text-white uppercase text-[18px]"
            to="/tokenomics"
          >
            Tokenomics
          </Link>
        </li>
      </ul>
     
      <div
        className="mid:hidden cursor-pointer translate-y-[-5px]"
        onClick={showTopNav}
      >
        <Hamburger />
      </div>
      <div
        className="hidden fixed top-0 h-screen w-screen bg-dark left-0 z-[1000] duration-100 transition-all"
        id="mini-topnav"
      >
        <div className="flex items-center justify-between mt-5 mb-[100px] px-5">
          <Logo />
          <div className="cursor-pointer" onClick={hideTopNav}>
            <Close className="h-[30px] w-[30px]" />
          </div>
        </div>
        <ul className="flex flex-col space-y-[20px] justify-center items-center">
          <li>
            <HashLink
              className="font-vectro-bold text-white uppercase text-[24px]"
              to="/#whatis"
              onClick={hideTopNav}
            >
              what IS
            </HashLink>
          </li>
          <li>
            <HashLink
              className="font-vectro-bold text-white uppercase text-[24px]"
              to="/#why"
              onClick={hideTopNav}
            >
              WHY
            </HashLink>
          </li>
          <li>
            <HashLink
              className="font-vectro-bold text-white uppercase text-[24px]"
              to="/#features"
              onClick={hideTopNav}
            >
              FEATURES
            </HashLink>
          </li>
          <li>
            <HashLink
              className="font-vectro-bold text-white uppercase text-[24px]"
              to="/#nftandgame"
              onClick={hideTopNav}
            >
              NFT AND GAME
            </HashLink>
          </li>
          <li>
            <HashLink
              className="font-vectro-bold text-white uppercase text-[24px]"
              to="/#roadmap"
              onClick={hideTopNav}
            >
              ROADMAP
            </HashLink>
          </li>
          <li>
            <Link
              className="font-vectro-bold text-white uppercase text-[24px]"
              to="/tokenomics"
              onClick={hideTopNav}
            >
              Tokenomics
            </Link>
          </li>
          <li>
            <a
              className="bg-blue flex items-center justify-center h-[39px] rounded-[4px] font-vectro-bold px-5 py-[10px] text-white"
              href="#"
              onClick={hideTopNav}
            >
              LOGIN
            </a>
          </li>
          <li>
            <a
              className="bg-white flex items-center justify-center h-[39px] rounded-[4px] font-vectro-bold px-5 py-[10px] text-black"
              href="#"
              onClick={hideTopNav}
            >
              Read whitepaper
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
