import styled from "styled-components";
import howToEarnBg from "../../../assets/images/itembg.svg";
import Dates from "./Dates";



const howToEarnList = [
  { header: "Quests", text: "Complete in-game quests to have a chance to earn COL tokens" },
  {  header: "Ranked Matches", text: "Win ranked matches and climb the leaderboard. Earn COL tokens based on your rank at the end of the season" },
  { header: "Battlepass Rewards", text: "Progress through your battlepass to earn COL tokens, NFTs and more" },
  { header: "Tournaments", text: "Fight your way through the ranks and become the champion. Earn COL tokens based on your position on the ladder" },
  { header: "NFT Marketplace", text: "Sell your NFTs in the marketplace for COL tokens. Try to find unique NFTs to earn more tokens" },

];

const HowToEarnWrapper = styled.div`
  background: url(${howToEarnBg });
  background-size: cover;
  height: 270px;
  padding:3rem 2rem;
  width: 246px;
  display: flex;
  align-items: start;
  justify-content: start;
    
`;

const EarnList = ({ header, text }) => {
  return (
    <HowToEarnWrapper id="earn">
      <div className="flex flex-col space-y-[10px] items-center justify-center">
        <div className="flex flex-col items-center">
          <h3 className="font-Passion-One  text-white text-2xl">{header}</h3>
          <p className="font-zona-semibold  text-white text-base">{text}</p>
        </div>
      </div>
    </HowToEarnWrapper>
  );
};

const EarnLists = () => {
  return (
    <div className="  space-y-[18px] flex justify-center ">
      <div className="flex flex-col roadmap ">
        <div className="metrics flex space-x-[20px]">
          {howToEarnList.map((earnList, index) => (
            <EarnList {...earnList} key={index} />
          ))}
        </div>
         <Dates/>
      </div>
    </div>
  );
};

export default EarnLists;
