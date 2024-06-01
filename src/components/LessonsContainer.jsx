import { useState } from "react";

import Tabs from "./Tabs";
import AudioLesson from "./AudioLesson";

export default function LessonsContainer({ translatedTabs, audioFiles }) {
  const [selectedTab, setSelectedTab] = useState(translatedTabs[0]);
  return (
    <div className="content-wrapper m-8 flex flex-col items-center gap-8 rounded-xl bg-orange-300">
      <Tabs
        tabs={translatedTabs}
        activeTab={selectedTab}
        setActiveTab={setSelectedTab}
      />
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {audioFiles.map((fileObj, index) => (
          <AudioLesson key={index} url={fileObj.url} title={fileObj.name} />
        ))}
      </div>
    </div>
  );
}
