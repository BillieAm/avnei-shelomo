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
    <div className="bg-red-300 p-16">
      {isFolder ? (
        <div className="flex flex-col items-center gap-8">
          <Tabs
            tabs={tabsList}
            activeTab={selectedTab}
            setActiveTab={setSelectedTab}
          />
          <div className="grid auto-rows-[minmax(0,_2fr)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentFolderLessons.map((lesson) => (
              <AudioLesson
                key={lesson.id}
                url={`https://drive.google.com/file/d/${lesson.id}/preview`}
                title={lesson.name}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categoryData.children.map((lesson) => (
            <AudioLesson
              key={lesson.id}
              url={`https://drive.google.com/file/d/${lesson.id}/preview`}
              title={lesson.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}
