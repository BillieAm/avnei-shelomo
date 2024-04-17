import { useState, useEffect } from "preact/hooks";

import Tabs from "@components/Tabs";

function importImages(album) {
  let images;
  switch (album) {
    case "album1":
      images = import.meta.glob("/src/assets/gallery/the-beginning/*.jpg");
      break;
    case "album2":
      images = import.meta.glob("/src/assets/gallery/test/*.jpg");
      break;

    default:
      images = import.meta.glob("/src/assets/gallery/the-beginning/*.jpg");
  }
  return Object.values(images).map((image) => image.name);
}

export default function GalleryContainer() {
  const albums = ["album1", "album2"];
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [albumImages, setAlbumImages] = useState([]);

  // Fetch the images for the selected album
  useEffect(() => {
    const images = importImages(selectedAlbum);
    setAlbumImages(images);
  }, [selectedAlbum]);

  function handleClick(album) {
    setSelectedAlbum(album);
  }

  return (
    <div class="content-wrapper flex flex-col items-center">
      <Tabs
        tabs={albums}
        activeTab={selectedAlbum}
        setActiveTab={setSelectedAlbum}
      />
      {albumImages.map((image, index) => (
        <img key={index} src={image} alt={index} />
      ))}
    </div>
  );
}
