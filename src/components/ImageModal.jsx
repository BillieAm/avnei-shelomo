import { useRef } from "preact/hooks";

import { X } from "lucide-preact";

export default function ImageModal({ children, btnClass, btnText }) {
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
    <div className="self-end">
      <button onClick={openModal} className={btnClass}>
        {btnText}
      </button>
      <dialog
        ref={dialogRef}
        onClick={handleClickOutside}
        className="bg-transparent backdrop:bg-foreground/70"
      >
        <button onClick={closeModal} aria-label="close" className="mb-4">
          <X color="white" strokeWidth={4} />
        </button>
        {children}
      </dialog>
    </div>
  );
}
