import { ConnectMenu } from "./ConnectMenu";
import { Languages } from "./Language";
import { Logo } from "./Logo";
import { MenuIcon } from "./MenuIcon";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { useTranslation } from "react-i18next";

/**
 * Main header for large screens
 */
export const Header = () => {
  const { t } = useTranslation("", { useSuspense: false });
  return (
    <div className="primary fixed top-0 left-0 right-0 z-10 shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <Logo />
          {/* Only shows on small screens */}
          <div className="md:hidden">
            <ConnectMenu />
          </div>

          {/* This Icon only shows on small screens */}
          <MenuIcon />
          {/* Navigation links on big screens */}
          <nav className="hidden space-x-10 md:flex">
            <Link
              href="/"
              className="text-base font-medium uppercase text-white transition duration-500 ease-in-out hover:scale-110 hover:font-bold hover:underline"
            >
              {t("scholarship_pools")}
            </Link>

            <Link
              href="/progress"
              className="text-base font-medium uppercase text-white transition duration-500 ease-in-out hover:scale-110 hover:font-bold hover:underline"
            >
              {t("scholar_progress")}
            </Link>

            <Link
              href="/transactions"
              className="text-base font-medium uppercase text-white transition duration-500 ease-in-out hover:scale-110 hover:font-bold hover:underline"
            >
              {t("transactions")}
            </Link>
          </nav>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <ConnectMenu />
          </div>
          <Languages />
        </div>
      </div>
      {/* Menu for small screens */}
      <MobileMenu />
    </div>
  );
};
