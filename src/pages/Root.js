import { Outlet } from "react-router-dom";
import Footer from "../compoment/Footer";
import Header from "../compoment/Header";
import LiveChat from "./Livechat";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
      <LiveChat />
    </>
  );
}
