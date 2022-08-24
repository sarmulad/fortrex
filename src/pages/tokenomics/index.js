import TopNav from "pages/home/components/TopNav";
import { ReactComponent as TokenomicsImage } from "assets/images/tokenomics.svg";
import spaceship from "assets/images/large-spaceship.png";
import smallSpaceship from "assets/images/spaceship2.png";
import earth from "assets/images/bodies/earth.png";
import game from "assets/images/bodies/game.png";
import jupiter from "assets/images/bodies/jupiter.png";
import liquidity from "assets/images/bodies/liquidity.png";
import presale from "assets/images/bodies/presale.png";
import sun from "assets/images/bodies/sun.png";
import team from "assets/images/bodies/team.png";
import TokenomicsTable from "./components/TokenomicsTable";

const breakdown = [
  { image: sun, text: "token supply", value: "1,000,000,000" },
  { image: presale, text: "presale", value: "300,000,000" },
  { image: game, text: "game development", value: "250,000,000" },
  { image: liquidity, text: "liquidity", value: "250,000,000" },
  { image: team, text: "team", value: "50,000,000" },
  { image: jupiter, text: "marketing", value: "50,000,000" },
  { image: earth, text: "airdrop", value: "100,000,000" },
];

const BreakDown = ({ item: { image, text, value } }) => {
  return (
    <div className="flex space-x-[26px] md:space-x-[36px] items-center">
      <img src={image} alt={text} />
      <span className="text-[21px] md:text-[24px] text-white/[.8] font-vectro-bold uppercase">
        {text} : {value}
      </span>
    </div>
  );
};

const Tokenomics = () => {
  return (
    <div>
      <TopNav />
      <div className="mt-[41px] md:mt-[61px]">
        <h1 className="text-center text-white uppercase font-vectro-bold text-[40px] md:text-[80px]">
          tokenomics
        </h1>
        <div className="mt-[68px] md:mt-[61px]">
          <div className="flex flex-col md:flex-row md:space-x-[147px]">
            <div className="md:w-[55%] relative">
              <TokenomicsImage className="relative z-[1] w-full h-full" />
              <img
                className="hidden md:block absolute bottom-[-450px] left-[-400px]"
                src={spaceship}
                alt="Spaceship"
              />
              <img
                className="md:hidden absolute bottom-[-400px] left-[-150px]"
                src={smallSpaceship}
                alt="Spaceship"
              />
            </div>
            <div className="md:w-[45%]">
              <h3 className="uppercase text-white text-center text-[28px] font-vectro-bold mt-[30px]">
                token allocation
              </h3>
              <ul className="mt-[47px] md:mt-[37px] ml-[22px] flex flex-col space-y-[31px] md:space-y-[44px]">
                {breakdown.map((item, index) => (
                  <BreakDown item={item} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-[27px] md:text-[48px] text-white font-vectro-bold mt-[166px]">
            Hurry up and shoot for the moon before{" "}
            <span className="text-blue">presale</span> ends!
          </p>
          <div className="tokenomics-bg-wrapper pt-[65px] pb-[133px]">
            <TokenomicsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
