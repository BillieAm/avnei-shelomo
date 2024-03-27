import { useStore } from "@nanostores/preact";
import { isNavMobileOpen } from "../store";

export default function NavMobile({ routesList, transContact }) {
  const $isNavMobileOpen = useStore(isNavMobileOpen);

  return (
    <div>
      <button
        aria-label={!isNavMobileOpen ? "פתיחת תפריט" : "סגירת תפריט"}
        aria-expanded={isNavMobileOpen}
        aria-controls="mainNav"
        onClick={() => isNavMobileOpen.set(!$isNavMobileOpen)}
        className={`relative z-50 flex h-6 w-6 flex-col items-center justify-between justify-self-start ${
          $isNavMobileOpen && "open"
        }`}
      >
        <span className="line top" aria-hidden="true"></span>
        <span className="line middle" aria-hidden="true"></span>
        <span className="line bottom" aria-hidden="true"></span>
      </button>
      {!$isNavMobileOpen ? null : (
        <nav
          id="mainNav"
          className="absolute inset-x-0 top-0 z-10 border-b-4 border-b-primary bg-nav pb-8 pt-28"
        >
          <ul className="flex flex-col items-center gap-6 text-center">
            {routesList.map((route) => (
              <li className="w-full">
                <a
                  href={route.path}
                  className="block w-full uppercase outline-offset-4 outline-accent"
                >
                  {route.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block w-full uppercase outline-offset-4 outline-accent"
              >
                {transContact}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
