import { Outlet } from "react-router-dom";

export default function GeneralLayout() {
  return (
    <h1>
      General Layout
      <Outlet />
    </h1>
  );
}