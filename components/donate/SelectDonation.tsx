import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { Button } from "..";
import { ImageZoom } from "./ImageZoom";
import useDonationStore from "../../store/store";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="inline-flex h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

export const NavButton = () => {
  return (
    <Link
      href="/"
      className="my-auto bg-transparent p-4 text-xl font-bold outline-none"
    >
      <ArrowIcon />
    </Link>
  );
};

interface Props {
  school: string;
}

/**
 * Renders component that selects the donation
 */
export const DonateMain: FC<Props> = ({ school }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [amount, setDonation] = useState(0);
  const setAmount = useDonationStore((state) => state.setAmount);
  const setImage = useDonationStore((state) => state.setImage);

  const handleClick = (amount: number, src: string) => {
    setDonation(amount);
    setImageSrc(src);
  };
  const router = useRouter();
  const donate = () => {
    if (!amount) return;

    setAmount({ amount });
    setImage({ image: imageSrc });
    router.push("/donation/donate");
  };

  return (
    <>
      <div className="flex h-24 w-full justify-center">
        <NavButton />
        <p className="medium-text medium-text text-primary my-auto mx-auto flex-grow text-3xl capitalize">
          Donate to {school}
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex w-full p-2">
          <p className="medium-text mx-auto text-2xl font-bold capitalize">
            Select donation amount{" "}
          </p>
        </div>
        <div className="flex w-full justify-center">
          <Button
            text="$1000"
            onClick={() => handleClick(1000, "/p1.jpg")}
            backgroundColor={
              amount === 1000 ? "primary" : "bg-gray-300 text-black"
            }
            rounded={false}
          />
          <Button
            text="$500"
            onClick={() => handleClick(500, "/p2.jpg")}
            backgroundColor={
              amount === 500 ? "primary" : "bg-gray-300 text-black"
            }
            otherClasses="ml-4 sm:ml-1"
            rounded={false}
          />
          <Button
            text="$100"
            onClick={() => handleClick(100, "/p3.jpg")}
            backgroundColor={
              amount === 100 ? "primary" : "bg-gray-300 text-black"
            }
            otherClasses="ml-4 sm:ml-1"
            rounded={false}
          />
          <Button
            text="custom"
            onClick={() => handleClick(0, "")}
            backgroundColor={"bg-gray-300 text-black"}
            otherClasses="ml-4 sm:ml-1"
            rounded={false}
          />
        </div>
        <div className="mx-auto mt-4 flex flex-col">
          <p className="mx-auto">Convert to ADA: 33456478566 ADA</p>
          <p className="mx-auto">Total fees: $0.4674667</p>
        </div>
        <div className="mx-auto mt-3 flex flex-col">
          {imageSrc && <ImageZoom src={imageSrc} altText="Picture" />}

          <p className="mt-3 text-center">
            Click to view exclusive NFT you will receive for your donation
          </p>
        </div>
        <div className="flex">
          <Button
            onClick={donate}
            text="Donate"
            disabled={amount === 0}
            backgroundColor="primary"
            otherClasses="mx-auto mt-7"
          />
        </div>
      </div>
    </>
  );
};
