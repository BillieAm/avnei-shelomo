import { useState } from "react";

export default function NavMobile({ routesList, transContact }) {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div>
      <button
        aria-label={!isNavMobileOpen ? "פתיחת תפריט" : "סגירת תפריט"}
        aria-expanded={isNavMobileOpen}
        aria-controls="mainNav"
        onClick={() => setIsNavMobileOpen(!isNavMobileOpen)}
        className={`relative z-50 flex h-6 w-6 flex-col items-center justify-between justify-self-start ${
          isNavMobileOpen && "open"
        }`}
      >
        <span className="line top" aria-hidden="true"></span>
        <span className="line middle" aria-hidden="true"></span>
        <span className="line bottom" aria-hidden="true"></span>
      </button>
      {!isNavMobileOpen ? null : (
        <nav
          id="mainNav"
          className="absolute inset-x-0 top-0 z-10 border-b-4 border-b-primary bg-nav pb-8 pt-28"
        >
          <ul className="flex flex-col items-center gap-6 text-center">
            {routesList.map((route, index) => (
              <li className="w-full">
                {route.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      aria-expanded={openDropdown}
                    >
                      {route.name}
                    </button>
                    {openDropdown === index && (
                      <ul className="">
                        {route.children.map((route) => (
                          <li className="py-2 text-accent">
                            <a href={route.path}>{route.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={route.path}
                    onClick={() => setIsNavMobileOpen(!isNavMobileOpen)}
                    className="block w-full uppercase outline-offset-4 outline-accent"
                  >
                    {route.name}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setIsNavMobileOpen(!isNavMobileOpen)}
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
