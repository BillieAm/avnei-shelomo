import { Volume2 } from "lucide-react";

import MediaModal from "./MediaModal";

export default function AudioLesson({ url, title }) {
  return (
    <MediaModal contentSrc={url}>
      <div className="cursor-pointer rounded-md bg-background p-2 pb-6 ">
        <Volume2 />
        <h4>{title}</h4>
      </div>
    </MediaModal>
  );
}
