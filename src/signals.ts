import { signal } from "@preact/signals";

export const menu = signal("closed");
export const toggle = () => {
  menu.value = menu.value === "closed" ? "open" : "closed";
};
