import { forwardRef } from "react";

import { X } from "lucide-react";

const Dialog = forwardRef(function Dialog({ children }, ref) {
  const openModal = () => {
    ref.current.showModal();
  };

  const closeModal = () => {
    ref.current.close();
  };

  const handleClickOutside = (event) => {
    if (event.target === ref.current) {
      closeModal();
    }
  };

  return (
    <dialog
      ref={ref}
      onClick={handleClickOutside}
      className="rounded-xl bg-foreground p-2 backdrop:backdrop-blur-xl"
    >
      <button onClick={closeModal} aria-label="close" className="block p-2">
        <X color="white" strokeWidth={4} />
      </button>
      {children}
    </dialog>
  );
});

export default Dialog;
