import { useRef } from "preact/hooks";

import { X } from "lucide-preact";

export default function ImageModal({
  children,
  wrapperClass,
  btnClass,
  btnText,
}) {
  const dialogRef = useRef(null);

  const openModal = () => {
    dialogRef.current.showModal();
  };

  const closeModal = () => {
    dialogRef.current.close();
  };

  const handleClickOutside = (event) => {
    if (event.target === dialogRef.current) {
      closeModal();
    }
  };

  return (
    <div className={wrapperClass}>
      <button onClick={openModal} className={btnClass}>
        {btnText}
      </button>
      <dialog
        ref={dialogRef}
        onClick={handleClickOutside}
        className="rounded-xl bg-foreground p-2 backdrop:backdrop-blur-xl"
      >
        <button onClick={closeModal} aria-label="close" className="block p-2">
          <X color="white" strokeWidth={4} />
        </button>
        {children}
      </dialog>
    </div>
  );
}
