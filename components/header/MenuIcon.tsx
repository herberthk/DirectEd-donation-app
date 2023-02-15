export const MenuIcon = () => {
  const openMenu = () => {
    // Select mobile menu
    const menu = document.getElementById("mobileMenu");
    // Select overlay that shows after menu is open
    const overly = document.getElementById("overlay");
    //check if menu is closed, open it and show overlay
    if (menu?.classList.contains("-inset-x-96")) {
      menu!.classList.remove("-inset-x-96");
      menu!.classList.add("inset-x-0");
      overly!.style.display = "block";
    } else {
      // If Menu is open, close it and remove overlay
      menu!.classList.remove("inset-x-0");
      menu!.classList.add("-inset-x-96");
      overly!.style.display = "none";
    }
  };

  return (
    <>
      <div className="overly" onClick={openMenu} id="overlay"></div>
      <div className="z-20 -my-2 -mr-2 md:hidden" onClick={openMenu}>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
        >
          <span className="sr-only">Open menu</span>
          {/* <!-- Heroicon name: outline/bars-3 --> */}
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
