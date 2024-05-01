import { useRef } from "react";

import Dialog from "@components/Dialog";

export default function Testimonial({ tesData, btnText }) {
  const dialogRef = useRef(null);

  return (
    <article className="grid gap-4 rounded-2xl bg-gradient-to-b from-primary/50 p-4 shadow">
      <h4 class="font-bold">{tesData.name}</h4>
      {tesData.title && <p>{tesData.title}</p>}
      <button
        onClick={() => dialogRef.current.showModal()}
        className="self-end rounded-lg border border-foreground px-4 py-1 hover:bg-background"
      >
        {btnText}
      </button>
      <Dialog ref={dialogRef}>
        <img src={tesData.image.src} alt={`${tesData.name}'s testimonial`} />
      </Dialog>
    </article>
  );
}
