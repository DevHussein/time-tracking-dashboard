import Dashboard from "../dashboard/dashboard";

export function loader({ params }: { params: { dashboard: string } }) {
  const timeFrameValue = params.dashboard;
  const validTimeFrame =
    timeFrameValue && ["daily", "weekly", "monthly"].includes(timeFrameValue)
      ? timeFrameValue
      : "daily";
  return { timeFrame: validTimeFrame };
}

export default function DashboardRoute() {
  return <Dashboard />;
}
