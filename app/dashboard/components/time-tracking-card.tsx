function TimeTrackingCard({
  backgroundIcon,
  title,
  timeFrame,
  current,
  previous,
  backgroundColor,
}: {
  backgroundIcon: string;
  title: string;
  timeFrame: string;
  current: number;
  previous: number;
  backgroundColor: string;
}) {
  const timeFrameLabel =
    timeFrame.toLowerCase() === "daily"
      ? "Yesterday"
      : timeFrame.toLowerCase() === "weekly"
      ? "Last Week"
      : "Last Month";

  return (
    <div>
      <div
        className={`${backgroundColor} rounded-[15px] w-[327px] h-[160px] desktop:w-[255px] relative`}
      >
        <div
          className={`${backgroundIcon} h-[78px] bg-right-top top-[-1px] bg-no-repeat absolute inset-0 right-4`}
        ></div>
        <div className="w-full h-[122px] desktop:h-[190px] absolute bottom-0 desktop:-bottom-16 bg-dark-blue rounded-[15px] px-6 py-7 overflow-hidden space-y-[6px] desktop:space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-[18px] font-medium">{title}</span>
            <img src="/images/icon-ellipsis.svg" alt="" />
          </div>
          <div className="flex desktop:flex-col desktop:items-start justify-between items-center">
            <span className="text-[32px] font-light">{current}hrs</span>
            <span className="text-pale-blue text-[15px]">
              {timeFrameLabel} - {previous} hrs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeTrackingCard;
