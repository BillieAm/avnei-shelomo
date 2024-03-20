import { menu, toggle } from "../signals";

function menuLinkClick() {
  toggle();
}

export default function MobileMenu({ children }) {
  if (menu.value === "closed") return null;
  return <nav>{children}</nav>;
}
