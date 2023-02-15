/* eslint-disable prettier/prettier */
import React, { FC, useState } from "react";
import Image from "next/image";
import { Button } from "../components";
import Link from "next/link";
import { progressData } from "../util/progressData";

const IconRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="mt-1 h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const IconDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="mt-1 h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6 text-slate-800"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

/**
 * Milestones to select from
 */

type MileStone = {
  milestone: 0 | 1 | 2 | 3 | 4 | 5;
};
/**
 * Milestone component
 */
const MilestoneProgress: FC<MileStone> = ({ milestone }) => {
  let result = (
    <>
      <div className="h-2 w-11 bg-gray-300"></div>
      <div className="h-2 w-11 bg-gray-300"></div>
      <div className="h-2 w-11 bg-gray-300"></div>
      <div className="h-2 w-11 bg-gray-300"></div>
      <div className="h-2 w-11 bg-gray-300"></div>
    </>
  );

  switch (milestone) {
  case 1:
    result = (
      <>
        <div className="accent1 h-2 w-11"></div>
        <div className="h-2 w-11 bg-gray-300"></div>
        <div className="w-11 bg-gray-300"></div>
        <div className="h-2 w-11 bg-gray-300"></div>
        <div className="h-2 w-11 bg-gray-300"></div>
      </>
    );
    break;
  case 2:
    result = (
      <>
        <div className="accent1 h-2 w-11"></div>
        <div className="accent1 h-2 w-11"></div>
        <div className="w-11 bg-gray-300"></div>
        <div className="h-2 w-11 bg-gray-300"></div>
        <div className="h-2 w-11 bg-gray-300"></div>
      </>
    );
    break;
  case 3:
    result = (
      <>
        <div className="accent1 h-2 w-11"></div>
        <div className="accent1 h-2 w-11"></div>
        <div className="accent1 w-11"></div>
        <div className="h-2 w-11 bg-gray-300"></div>
        <div className="h-2 w-11 bg-gray-300"></div>
      </>
    );
    break;
  case 4:
    result = (
      <>
        <div className="accent1 h-2 w-11"></div>
        <div className="accent1 h-2 w-11"></div>
        <div className="accent1 w-11"></div>
        <div className="accent1 h-2 w-11"></div>
        <div className="h-2 w-11 bg-gray-300"></div>
      </>
    );
    break;
  case 5:
    result = (
      <>
        <div className="accent1 h-2 w-11"></div>
        <div className="accent1 h-2 w-11"></div>
        <div className="accent1 w-11"></div>
        <div className="accent1 h-2 w-11"></div>
        <div className="accent1 h-2 w-11"></div>
      </>
    );
    break;
  default:
    break;
  }
  return (
    <div className="relative flex justify-between space-x-1">{result}</div>
  );
};

export type ProgressProps = {
  /**
   * Name of the student
   */
  name: string;
  /**
   * Students picture URL
   */
  picUrl: string;
  /**
   * Alt text for picture
   */
  picAltText: string;
  /**
   * Current milestone
   */
  milestone: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Location of student
   */
  location: string;
  /**
   * Url for more information
   */
  webUrl?: string;
  /**
   * Details of the student
   */
  details: string;
  /**
   * Student's linkedIn URL
   */
  linkedInUrl?: string;
  /**
   * Student's telegram URL
   */
  telegramUrl?: string;
};
const ProgressCard: FC<ProgressProps> = ({
  details,
  location,
  milestone,
  name,
  picUrl,
  linkedInUrl,
  telegramUrl,
  webUrl,
  picAltText,
}) => {
  const [expanded, setExpanded] = useState(false);
  // Expands and closes the collapsible
  const expand = () => setExpanded(!expanded);
  return (
    <>
      <div className="flex-column flex justify-between space-x-4 pt-3">
        <div className="space-y flex px-3">
          <Image
            alt={picAltText}
            style={{ borderRadius: "100%" }}
            width={35}
            height={35}
            src={picUrl}
          />
          <p className="px-4 text-center text-slate-800">{name}</p>
        </div>
        <div className="space-y px-3">
          <MilestoneProgress milestone={milestone} />
        </div>
        <div className="px-3">
          <Button
            onClick={expand}
            paddingY="py-0"
            backgroundColor="bg-transparent"
            suffixIcon={expanded ? <IconDown /> : <IconRight />}
            textColor="text-primary"
            rounded={false}
            text="More"
          />
        </div>
      </div>
      {expanded && (
        <div className="mx-auto ml-9 flex flex-col justify-center">
          <div className="flex px-5 pt-2">
            <LocationIcon />
            <p className="mb-2 px-5 font-semibold text-slate-800">{location}</p>
          </div>
          <p className="px-5 text-slate-800">{details}</p>
          <div className="mt-5 flex justify-between px-5">
            <p>
              <Link className="text-slate-800" href={webUrl!}>
                {webUrl}
              </Link>
            </p>
            <div>
              <Link href={linkedInUrl!} className="px-2">
                <Image
                  alt="Linkedin"
                  src="/linkedin.png"
                  width={27}
                  height={25}
                />
              </Link>
              <Link href={telegramUrl!} className="px-2">
                <Image
                  alt="Telegram"
                  src="/telegram.png"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Progress = () => {
  return (
    <div className="padding-0 mt-7 flex w-full flex-col p-7">
      <p className="mx-auto text-4xl font-bold capitalize">Schools progress </p>
      <p className="medium-text mx-auto mt-5 text-xl font-bold capitalize">
        Progress Track for St. Peters High School
      </p>
      <div className="accent2 full-width mx-auto mt-2 flex w-2/3 flex-col justify-center space-y-4 divide-y-2 divide-white rounded p-4 shadow-xl">
        <div className="flex justify-around">
          <p className="text-slate-800">Name</p>
          <p className="text-slate-800">Milestone progress</p>
          <p className="text-slate-800">Contact</p>
        </div>
        {progressData.map((d) => (
          <ProgressCard
            key={d.id}
            details={d.details}
            location={d.location}
            milestone={d.milestone}
            name={d.name}
            picUrl={d.picUrl}
            picAltText={d.picAltText}
            linkedInUrl={d.linkedInUrl}
            telegramUrl={d.telegramUrl}
            webUrl={d.webUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Progress;
