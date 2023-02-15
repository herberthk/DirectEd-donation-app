import { FC } from "react";
import { ButtonLink } from "../";

interface Props {
  school: string;
  details: string;
}
/**
 * Renders after confirmation of donation
 */
export const ThankyouCard: FC<Props> = ({ details, school }) => {
  return (
    <div className="mx-auto flex flex-col justify-center p-3">
      <p className="text-center text-lg">
        Your donation to {school} was confirmed{" "}
      </p>
      <p className="m-4 text-center text-sm">{details}</p>
      <div className="flex">
        <ButtonLink
          to="/progress"
          backgroundColor="accent2"
          text="View progress"
          textColor="text-primary"
          otherClasses="mx-auto border-primary"
        />
      </div>
    </div>
  );
};
