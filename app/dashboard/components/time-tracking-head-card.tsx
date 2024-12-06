import { NavLink } from "react-router";

function TimeTrackingHeadCard() {
  return (
    <div className="bg-dark-blue w-[327px] rounded-[15px] desktop:w-[255px]">
      <div className="bg-blue flex desktop:flex-col items-center desktop:items-start gap-5 desktop:gap-0 pl-[32px] rounded-[15px]">
        <img
          className="h-16 w-16 desktop:w-[78px] desktop:h-[78px] border-[3px] desktop:mt-[37px] border-white rounded-full shadow-custom"
          src="/images/image-jeremy.png"
          alt="Avatar image"
        />
        <div className="flex flex-col gap-1 desktop:gap-[3px] pt-[35px] desktop:pt-[43px] pb-[34px] desktop:pb-20 pr-[39px] desktop:pr-[84px]">
          <span className="text-[15px] tracking-[0px] font-normal text-pale-blue desktop:mb-[3px]">
            Report for
          </span>
          <h3 className="text-[24px] desktop:text-[40px] font-light tracking-[0px] desktop:space-y-4">
            <span className="desktop:block desktop:leading-[21px]">Jeremy</span>
            <span className="desktop:block desktop:leading-[21px]">Robson</span>
          </h3>
        </div>
      </div>
      <nav className="text-desaturated-blue text-[18px] font-normal flex desktop:flex-col desktop:pl-8 desktop:gap-y-[21px] justify-evenly pt-6 pb-[25px] desktop:pb-[33px] desktop:pr-[88px] desktop:leading-[21px]">
        {["daily", "weekly", "monthly"].map((label) => (
          <NavLink
            key={label}
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-desaturated-blue"
            }
            to={`/${label.toLowerCase()}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default TimeTrackingHeadCard;
