import { menu, toggle } from "../signals";

export default function Hamburger() {
  return (
    <button
      aria-label={menu.value === "closed" ? "פתיחת תפריט" : "סגירת תפריט"}
      onClick={toggle}
      class={`relative z-50 flex h-6 w-6 flex-col items-center justify-between justify-self-start ${
        menu.value === "open" && "open"
      }`}
    >
      <span class="line top"></span>
      <span class="line middle"></span>
      <span class="line bottom"></span>
    </button>
  );
}
