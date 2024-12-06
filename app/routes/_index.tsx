import { redirect } from "react-router";

export function loader() {
  return redirect("/daily");
}

export default function Home() {
  return null;
}
