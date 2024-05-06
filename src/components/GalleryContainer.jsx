import { useState, useEffect } from "react";

import Tabs from "./Tabs";
import GalleryImage from "./GalleryImage";

export default function GalleryContainer({ translatedTabs, imagesByAlbums }) {
  const albums = translatedTabs;
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [albumImages, setAlbumImages] = useState(imagesByAlbums[0]);

  useEffect(() => {
    const images = imagesByAlbums[albums.indexOf(selectedAlbum)];
    setAlbumImages(images);
  }, [selectedAlbum]);

  return (
    <div className="content-wrapper m-8 flex flex-col items-center gap-8 rounded-xl bg-primary-300">
      <Tabs
        tabs={albums}
        activeTab={selectedAlbum}
        setActiveTab={setSelectedAlbum}
      />
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {albumImages.map((imageObj, index) => (
          <GalleryImage
            key={index}
            image={imageObj.default.src}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
