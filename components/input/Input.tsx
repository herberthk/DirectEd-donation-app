import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  otherClasses?: string;
}

export const TextInput: FC<Props> = ({ label, otherClasses, ...rest }) => {
  return (
    <div className="mx-auto flex w-full flex-col">
      <p className="text-lg">{label}</p>
      <input
        className={classNames(
          "focus:border-primary border border-transparent bg-gray-200 py-3 px-4 text-base outline-none",
          otherClasses
        )}
        {...rest}
      />
    </div>
  );
};
