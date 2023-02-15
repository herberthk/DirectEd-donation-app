import Link from "next/link";

/**
 * Renders mobile menu
 */
export const MobileMenu = () => {
  return (
    <div
      className="mobile-menu absolute -inset-x-96 z-20 p-2 md:hidden"
      id="mobileMenu"
    >
      <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="px-5 pt-5 pb-6">
          <nav className="grid gap-y-8">
            <Link
              href="/"
              className="-m-3 flex items-center rounded-md p-3 uppercase hover:bg-gray-50"
            >
              <span className="ml-3 text-base font-bold text-gray-900">
                Scholarship pools
              </span>
            </Link>
            <Link
              href="/progress"
              className="-m-3 flex items-center rounded-md p-3 uppercase hover:bg-gray-50"
            >
              <span className="ml-3 text-base font-bold text-gray-900">
                Scholars&apos; progress
              </span>
            </Link>
            <Link
              href="/transactions"
              className="-m-3 flex items-center rounded-md p-3 uppercase hover:bg-gray-50"
            >
              <span className="ml-3 text-base font-bold text-gray-900">
                Transactions
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
