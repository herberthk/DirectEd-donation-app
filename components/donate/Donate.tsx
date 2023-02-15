import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, PopoverAlert, TextInput } from "..";
import useDonationStore from "../../store/store";
import { ImageZoom } from "./ImageZoom";
import { NavButton } from "./SelectDonation";

/**
 * Renders donation card
 */
export const DonateCard = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertOpen, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  /**
   * Getting values from global zustand store
   */
  const amount = useDonationStore((state) => state.amount);
  const school = useDonationStore((state) => state.school);
  const image = useDonationStore((state) => state.image);
  const router = useRouter();
  const closeAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const donate = async () => {
    // console.log("email", email);
    if (!email) return;
    setLoading(true);
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setLoading(false);
    setAlertMessage(data.message);
    setOpen(true);

    setTimeout(() => router.push("/confirmation"), 2000);
  };
  return (
    <>
      <PopoverAlert
        handleClose={closeAlert}
        isOpen={alertOpen}
        status="success"
      >
        {alertMessage}
      </PopoverAlert>
      <div className="flex h-24 w-full justify-center">
        <NavButton />
        <p className="text-primary medium-text my-auto mx-auto flex-grow text-3xl capitalize">
          Donate to {school}
        </p>
      </div>
      <div className="full-width mx-auto mt-1 flex w-1/2 flex-col space-y-4">
        <p className="mx-auto text-2xl font-bold capitalize">
          Donation amount{" "}
        </p>
        <Button
          text={`$${amount}`}
          rounded={false}
          backgroundColor="primary"
          paddingX="px-5"
          otherClasses="mx-auto mt-3"
        />
        <p className="">Convert to ADA: 33456478566 ADA</p>
        <p className="">Total fees: $0.4674667</p>
        {image && <ImageZoom src={image} altText="Picture" />}
        <p className="mt-3">
          Click to view exclusive NFT you will receive for your donation
        </p>
        <p className="text-lg font-bold">Tax benefits</p>
        <div className="mx-auto flex w-full flex-col">
          <TextInput
            label="Enter email for order confirmation"
            placeholder="Enter email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            otherClasses="rounded-xl shadow-2xl transition duration-500 ease-in-out"
          />
        </div>
        <Button
          disabled={loading}
          onClick={donate}
          text={loading ? "Loading.." : "Donate"}
          backgroundColor="primary"
          otherClasses="mx-auto mt-7 shadow-2xl"
        />
      </div>
    </>
  );
};
