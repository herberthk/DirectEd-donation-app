import { DonateMain } from "../../components";
import useDonationStore from "../../store/store";

/**
 * Renders select donation amount
 */
const Donate = () => {
  // get school from global state
  const school = useDonationStore((state) => state.school);
  return (
    <>
      <div className="flex h-24 w-full justify-center bg-gray-300 text-center font-extrabold text-gray-500">
        <h1 className="my-auto text-3xl">Banner here</h1>
      </div>
      <DonateMain school={school} />
    </>
  );
};

export default Donate;
