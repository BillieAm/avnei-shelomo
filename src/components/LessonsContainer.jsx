import { useState } from "react";

import Tabs from "./Tabs";
import ComingSoon from "../assets/gallery/test/coming-soon.webp";

export default function LessonsContainer({ translatedTabs }) {
  const [selectedTab, setSelectedTab] = useState(translatedTabs[0]);
  return (
    <div className="content-wrapper m-8 flex flex-col items-center gap-8 rounded-xl bg-accent-200">
      <Tabs
        tabs={translatedTabs}
        activeTab={selectedTab}
        setActiveTab={setSelectedTab}
      />
      <img src={ComingSoon.src} alt="Coming Soon" />
    </div>
  );
}
