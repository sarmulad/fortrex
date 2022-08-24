import { useCountdown } from "hooks/useCountdown";

const PresaleCountDownItem = ({ type, value }) => {
  return (
    <div className="flex items-center space-x-[7px] md:space-x-[47px]">
      <span className="font-vectro-bold text-white text-mid md:text-[25px]">
        {type}
      </span>
      <div className="h-[38px] w-[38px] md:h-[65px] md:w-[65px] rounded-[50%] flex items-center justify-center countdown-outer">
        <div className="h-[35px] w-[35px] flex items-center justify-center bg-dark md:h-[60px] md:w-[60px] rounded-[50%]">
          <span className="font-vectro-bold text-[17px] md:text-[30px] text-white text-center">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

const PresaleCountdown = () => {
  const [days, hours, minutes, seconds] = useCountdown(new Date(2022, 10, 10));
  const presaleCountdownItems = [
    { type: "days", value: days },
    { type: "hours", value: hours },
    { type: "minutes", value: minutes },
    { type: "seconds", value: seconds },
  ];
  return (
    <div className="flex-col space-y-[30px] mid:space-y-0 mid:flex-row flex items-center justify-center space-x-[21px] my-[30px]">
      <p className="font-vectro-bold text-center text-[23.5px] text-white md:text-[40px] uppercase">
        presale ends in :
      </p>
      <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-12">
        {presaleCountdownItems.map((item, index) => (
          <PresaleCountDownItem
            key={index}
            type={item.type}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
};

export default PresaleCountdown;
