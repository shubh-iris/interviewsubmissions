import React from "react";
import Topbar from "./Components/topbar/Topbar";
import Mainbody from "./Components/mainbody/Mainbody";
import SideMenu from "./Components/Sidemenu/SideMenu";
import Description from "./Components/Description/Description";
import Article from "./Components/Articles/Article";
import Footer from "./Components/footer/footer";
export default function App() {
  return (
    <div>
      <Topbar />
      <Mainbody />
      <SideMenu />
      <Description />
      <Article />
      <Footer />
    </div>
  );
}
