import { useState, useEffect } from "preact/hooks";

import Tabs from "@components/Tabs";

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
        images = import.meta.glob("/src/assets/gallery/test/*.jpg");
        break;

      default:
        images = import.meta.glob("/src/assets/gallery/the-beginning/*.jpg");
    }

    return Object.values(images).map((image) => image.name);
  }

  // Fetch the images for the selected album
  useEffect(() => {
    const images = importImages(selectedAlbum);
    setAlbumImages(images);
  }, [selectedAlbum]);

  function handleClick(album) {
    setSelectedAlbum(album);
  }

  return (
    <div className="content-wrapper m-8 flex flex-col items-center gap-8 rounded-xl bg-primary-300">
      <Tabs
        tabs={albums}
        activeTab={selectedAlbum}
        setActiveTab={setSelectedAlbum}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {albumImages.map((image, index) => (
          <div className=" bg-white p-2 pb-6 transition-all hover:scale-105 hover:shadow-xl">
            <img key={index} src={image} alt={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
