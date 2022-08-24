import styled from "styled-components";
import howToEarnBg from "../../../assets/images/itembg.svg";



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
    <HowToEarnWrapper >
      <div className="flex flex-col space-y-[20px] items-center justify-center">
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
    <div className="mt-[-200px] mid:mt-[200px] space-y-[18px] flex justify-center">
      <div className="flex flex-col ">
        <h3 className="font-Passion-One text-center text-white text-[36px]">How to earn</h3>
        <div className="flex space-x-[20px]">
          {howToEarnList.map((earnList, index) => (
            <EarnList {...earnList} key={index} />
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default EarnLists;
