import styled from "styled-components";
import { ReactComponent as Mark } from "assets/icons/mark.svg";

const BenefitWrapper = styled.div`
  padding: 1.5px;
  background: linear-gradient(180deg, #957aff, #2b1aa3);
  border-radius: 7.52573px;

  .inner {
    background: #040022;
    padding: 14.17px 22.58px;
    border-radius: 7.52573px;
    span {
      font-family: VectroBold;
      color: #fff;
      text-transform: uppercase;
      font-size: 16.9329px;
    }
  }
`;

const Benefit = ({ text }) => {
  return (
    <BenefitWrapper>
      <div className="inner flex items-center space-x-[13.17px]">
        <Mark />
        <span>{text}</span>
      </div>
    </BenefitWrapper>
  );
};

export default Benefit;
