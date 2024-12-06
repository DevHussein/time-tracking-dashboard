import TimeTrackingCard from "./components/time-tracking-card";
import data from "data/data.json";
import TimeTrackingHeadCard from "./components/time-tracking-head-card";
import { useLoaderData } from "react-router";

type Timeframe = {
  current: number;
  previous: number;
};

type Timeframes = {
  daily: Timeframe;
  weekly: Timeframe;
  monthly: Timeframe;
};

type DataItem = {
  title: string;
  timeframes: Timeframes;
};

const backgroundColors = (title: string): string => {
  switch (title.toLowerCase()) {
    case "work":
      return "bg-light-red-work";
    case "play":
      return "bg-soft-blue-play";
    case "study":
      return "bg-light-red-study";
    case "exercise":
      return "bg-lime-green-exercise";
    case "social":
      return "bg-violet-social";
    case "self care":
      return "bg-soft-orange-self-care";
    default:
      return "bg-soft-blue-play";
  }
};

const backgroundIcon = (title: string): string => {
  switch (title.toLowerCase()) {
    case "work":
      return "bg-icon-work";
    case "play":
      return "bg-icon-play";
    case "study":
      return "bg-icon-study";
    case "exercise":
      return "bg-icon-exercise";
    case "social":
      return "bg-icon-social";
    case "self care":
      return "bg-icon-self-care";
    default:
      return "bg-icon-play";
  }
};

export function Dashboard() {
  const loaderData = useLoaderData<{ timeFrame: string }>();
  const { timeFrame } = loaderData;

  return (
    <div className="p-6 flex flex-col gap-4 desktop:flex-row">
      <TimeTrackingHeadCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
        {data.map((item: DataItem, index: number) => {
          const { current, previous } =
            item.timeframes[timeFrame as keyof Timeframes];
          return (
            <TimeTrackingCard
              key={index}
              backgroundIcon={`${backgroundIcon(item.title)}`}
              backgroundColor={`${backgroundColors(item.title)}`}
              title={item.title}
              timeFrame={timeFrame!}
              current={current}
              previous={previous}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
