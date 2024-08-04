import { useState, useEffect } from "react";

import Tabs from "./Tabs";
import AudioLesson from "./AudioLesson";

export default function AudioLessonsContainer({ categoryData }) {
  const isFolder = categoryData.children[0].type === "folder";
  const tabsList =
    isFolder && categoryData.children.map((folder) => folder.name);
  console.log("isFolder", isFolder);
  console.log("tabsList", tabsList);
  const [selectedTab, setSelectedTab] = useState(tabsList[0]);

  return (
    <div>
      {isFolder ? (
        <div>
          <Tabs
            tabs={tabsList}
            activeTab={selectedTab}
            setActiveTab={setSelectedTab}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

/* 
 <div>
      {categoryData.children.map((lesson) =>
         (
          <AudioLesson
            key={lesson.id}
            url={`https://drive.google.com/file/d/${lesson.id}/preview`}
            title={lesson.name}
          />
        ),
      )}
    </div>
*/
