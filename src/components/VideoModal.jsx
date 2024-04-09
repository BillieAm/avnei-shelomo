import { useRef, useEffect } from "preact/hooks";

import { X } from "lucide-preact";

export default function VideoModal({ contentSrc, btnText, btnClass }) {
  const dialogRef = useRef(null);
  const videoRef = useRef(null);

  const openModal = () => {
    dialogRef.current.showModal();
  };

  const closeModal = () => {
    dialogRef.current.close();
    // stop video when modal closed
    let iframeSrc = videoRef.current.src;
    videoRef.current.src = iframeSrc;
  };

  const handleClickOutside = (event) => {
    if (event.target === dialogRef.current) {
      closeModal();
    }
  };

  function handleKeydown(event) {
    if (event.code === "Escape") {
      closeModal();
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div>
      <button onClick={openModal} className={btnClass}>
        {btnText}
      </button>
      <dialog
        ref={dialogRef}
        onClick={handleClickOutside}
        className="rounded-xl backdrop:backdrop-blur-xl"
      >
        <button onClick={closeModal} aria-label="close" className="p-2">
          <X strokeWidth={3} />
        </button>
        <div className="flex">
          <iframe
            width="560"
            height="315"
            src={contentSrc}
            title="WizzoStream video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            ref={videoRef}
          ></iframe>
        </div>
      </dialog>
    </div>
  );
}
