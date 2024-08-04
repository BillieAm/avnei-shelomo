import { Volume2 } from "lucide-react";

import MediaModal from "./MediaModal";

export default function AudioLesson({ url, title }) {
  return (
    <MediaModal contentSrc={url}>
      <div className="flex cursor-pointer items-center gap-2 rounded-md">
        <div className="flex w-12 items-center justify-center">
          <Volume2 size={24} />
        </div>
        <h4>{title}</h4>
      </div>
    </MediaModal>
  );
}
