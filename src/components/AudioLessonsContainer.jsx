import { useState, useEffect } from "react";

import Tabs from "./Tabs";
import AudioLesson from "./AudioLesson";

export default function AudioLessonsContainer({ categoryData }) {
  const isFolder = categoryData.children[0].type === "folder";
  const tabsList = categoryData.children.map((folder) => folder.name);

  const [selectedTab, setSelectedTab] = useState(tabsList[0]);
  const [currentFolderLessons, setCurrentFolderLessons] = useState(
    categoryData.children[0].children,
  );

  useEffect(() => {
    const index = tabsList.indexOf(selectedTab);
    setCurrentFolderLessons(categoryData.children[index].children);
  }, [selectedTab]);

  return (
    <div>
      {isFolder ? (
        <div>
          <Tabs
            tabs={tabsList}
            activeTab={selectedTab}
            setActiveTab={setSelectedTab}
          />
          {currentFolderLessons.map((lesson) => (
            <AudioLesson
              key={lesson.id}
              url={`https://drive.google.com/file/d/${lesson.id}/preview`}
              title={lesson.name}
            />
          ))}
        </div>
      ) : (
        categoryData.children.map((lesson) => (
          <AudioLesson
            key={lesson.id}
            url={`https://drive.google.com/file/d/${lesson.id}/preview`}
            title={lesson.name}
          />
        ))
      )}
    </div>
  );
}
