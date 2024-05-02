import { useState, useEffect } from "react";

import Tabs from "@components/Tabs";
import GalleryImage from "./GalleryImage";

export default function GalleryContainer({ translatedTabs }) {
  const albums = translatedTabs;
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [albumImages, setAlbumImages] = useState([]);

  function importImages(album) {
    let images;
    switch (album) {
      case albums[0]:
        images = import.meta.glob("/src/assets/gallery/the-beginning/*.webp");
        break;
      case albums[1]:
        images = import.meta.glob("/src/assets/gallery/test/*.webp");
        break;
    }

    return Object.values(images).map((image) => image.name);
  }

  // Fetch the images for the selected album
  useEffect(() => {
    const images = importImages(selectedAlbum);
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
        {albumImages.map((image, index) => (
          <GalleryImage image={image} index={index} />
        ))}
      </div>
    </div>
  );
}
