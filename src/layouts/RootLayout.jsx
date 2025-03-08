import { Outlet } from "react-router-dom";
import Navbar from "../components/user/shared/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar  />
      <Outlet />
    </>
  )
}
