import Link from "next/link";

/**
 * Temporary logo, Real log shall be here
 */
export const Logo = () => {
  return (
    <div className="flex justify-start">
      <Link
        href="https://directed.dev"
        target="_blank"
        className="flex flex-col text-white"
      >
        <h1 className="text-2xl font-bold sm:text-xl">DirectEd</h1>
        <i className="text-xs">Realizing Potential</i>
      </Link>
    </div>
  );
};
