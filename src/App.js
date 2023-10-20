import React from "react";
import HeaderNav from "./components/HeaderNav/HeaderNav.js";
import SectionFeatures from "./components/SectionFeatures/SectionFeatures.js";
import SectionWorks from "./components/SectionWorks/SectionWorks.js";
import SectionTeam from "./components/SectionTeam/SectionTeam.js";
import SectionDonwload from "./components/SectionDownload/SectionDownload.js";

function App() {
  return (
    <>
      <HeaderNav />
      <SectionFeatures />
      <SectionWorks />
      <SectionTeam />
      <SectionDonwload />
    </>
  );
}

export default App;
