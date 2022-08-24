import styled from "styled-components";

const Wrapper = styled.div`
  ::-webkit-scrollbar {
    background: #ffffff;
    height: 5px;
    width: 300px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(43, 26, 163, 0.8);
    border-radius: 3px;
  }
`;

const StyledTable = styled.table`
  background: linear-gradient(
    180deg,
    rgba(42, 76, 126, 0.188) 0%,
    rgba(42, 38, 62, 0.32) 100%
  );
  border-radius: 30px;
  margin: auto;
  width: calc(100% - 40px);
  overflow-x: scroll;
  border-collapse: collapse;
  border-spacing: 0;
  tbody {
    width: 100%;
  }
  td,
  th {
    padding: 20px;
  }
  white-space: nowrap;
  @media (min-width: 1388px) {
    width: 1388px;
  }
`;

const data = [
  {
    stage_name: "stage 1",
    amount: 180000000,
    percentage: 18,
    start_date: "TBC",
    end_date: "TBC",
    weeks: 0,
    bonus: "8%",
  },
  {
    stage_name: "stage 2",
    amount: 75000000,
    percentage: 7.5,
    start_date: "TBC",
    end_date: "TBC",
    weeks: 0,
    bonus: "5%",
  },
  {
    stage_name: "stage 3",
    amount: 45000000,
    percentage: 4.5,
    start_date: "TBC",
    end_date: "TBC",
    weeks: 0,
    bonus: "3%",
  },
];

const TokenomicsTable = () => {
  return (
    <Wrapper className="overflow-x-auto ml-5 md:ml-0 pb-5">
      <StyledTable>
        <thead>
          <tr>
            <th>{""}</th>
            <th className="text-center text-white font-vectro-bold text-[27px] md:text-[35px] pb-[38px]">
              amount
            </th>
            <th className="text-center text-white font-vectro-bold text-[27px] md:text-[35px] pb-[38px]">
              percentage
            </th>
            <th className="text-center text-white font-vectro-bold text-[27px] md:text-[35px] pb-[38px]">
              start dATE
            </th>
            <th className="text-center text-white font-vectro-bold text-[27px] md:text-[35px] pb-[38px]">
              start dATE
            </th>
            <th className="text-center text-white font-vectro-bold text-[27px] md:text-[35px] pb-[38px]">
              WEEKS
            </th>
            <th className="text-center text-white font-vectro-bold text-[27px] md:text-[35px] pb-[38px]">
              bonus
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="">
              <td className="text-white text-center text-[27px] md:text-[35px] uppercase font-vectro-bold pb-[65px]">
                {row.stage_name}
              </td>
              <td className="text-white text-center text-[27px] md:text-[35px] uppercase font-vectro-bold pb-[65px]">
                {row.amount}
              </td>
              <td className="text-white text-center text-[27px] md:text-[35px] uppercase font-vectro-bold pb-[65px]">
                {row.percentage}
              </td>
              <td className="text-white text-center text-[27px] md:text-[35px] uppercase font-vectro-bold pb-[65px]">
                {row.start_date}
              </td>
              <td className="text-white text-center text-[27px] md:text-[35px] uppercase font-vectro-bold pb-[65px]">
                {row.end_date}
              </td>
              <td className="text-white text-center text-[27px] md:text-[35px] uppercase font-vectro-bold pb-[65px]">
                {row.weeks}
              </td>
              <td className="text-white text-center text-[27px] md:text-[35px] uppercase font-vectro-bold pb-[65px]">
                {row.bonus}
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default TokenomicsTable;
