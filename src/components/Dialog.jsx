import { useRef } from "preact/hooks";

import { X } from "lucide-preact";

export default function Dialog(props) {
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
    <>
      <div onClick={openModal} className={props.wrapperClass}>
        {props.trigger}
      </div>
      <dialog
        ref={dialogRef}
        onClick={handleClickOutside}
        className="rounded-xl bg-foreground p-2 backdrop:backdrop-blur-xl"
      >
        <button onClick={closeModal} aria-label="close" className="block p-2">
          <X color="white" strokeWidth={4} />
        </button>
        {props.content}
      </dialog>
    </>
  );
}
