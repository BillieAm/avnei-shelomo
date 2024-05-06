import { useRef } from "react";

import Dialog from "./Dialog";

export default function GalleryImage({ image, index }) {
  const imageRef = useRef(null);

  return (
    <div>
      <div
        onClick={() => imageRef.current.showModal()}
        className="cursor-pointer bg-white p-2 pb-6 transition-all hover:scale-105 hover:shadow-xl"
      >
        <img src={image} alt={index} />
      </div>
      <Dialog ref={imageRef}>
        <img src={image} alt={index} />
      </Dialog>
    </div>
  );
}
