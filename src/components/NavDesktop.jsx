import { useState, useEffect, useRef } from "react";

export default function NavDesktop({ routesList }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <ul className="flex">
        {routesList.map((route, index) => (
          <li key={index} className="relative hover:text-accent">
            {route.children ? (
              <div ref={dropdownRef}>
                <button onClick={() => toggleDropdown(index)} className="px-8">
                  {route.name}
                </button>
                {openDropdown === index && (
                  <ul className="absolute inset-x-0 top-full flex flex-col bg-white text-center text-nav">
                    {route.children.map((route) => (
                      <li className="border border-accent hover:bg-primary hover:text-white">
                        <a href={route.path} className="block">
                          {route.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a key={index} href={route.path} className="block px-8">
                {route.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
