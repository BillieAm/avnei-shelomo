import { Volume2 } from "lucide-react";

import MediaModal from "./MediaModal";

export default function AudioLesson({ url, title }) {
  return (
    <MediaModal contentSrc={url}>
      <div className="cursor-pointer rounded-md bg-background p-2 pb-6 transition-all hover:scale-105 hover:shadow-xl">
        <Volume2 />
        <h4>{title}</h4>
      </div>
    </MediaModal>
  );
}
