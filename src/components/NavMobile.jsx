import { useStore } from "@nanostores/preact";
import { isNavMobileOpen } from "../store";

export default function NavMobile({ routesList }) {
  const $isNavMobileOpen = useStore(isNavMobileOpen);

  return (
    <div>
      <button
        aria-label={!isNavMobileOpen ? "פתיחת תפריט" : "סגירת תפריט"}
        onClick={() => isNavMobileOpen.set(!$isNavMobileOpen)}
        className={`relative z-50 flex h-6 w-6 flex-col items-center justify-between justify-self-start ${
          $isNavMobileOpen && "open"
        }`}
      >
        <span className="line top"></span>
        <span className="line middle"></span>
        <span className="line bottom"></span>
      </button>
      {!$isNavMobileOpen ? null : (
        <nav>
          <ul>
            {routesList.map((route) => (
              <li>
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
