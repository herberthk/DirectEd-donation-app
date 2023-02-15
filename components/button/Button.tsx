import classNames from "classnames";
import Link from "next/link";
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Text value of the button
   */
  text: string;
  /**
   *  Custom text color of the button default `white`
   */
  textColor?: string;
  /**
   *  Whether the button is rounded default `true`
   */
  rounded?: boolean;
  /**
   * background color of button `required`
   */
  backgroundColor: string;
  /**
   * whether text is uppercase default `false`
   */
  uppercase?: boolean;
  /**
   * Other custom classes
   */
  otherClasses?: string;
  /**
   * Icon on the left of the button
   */
  prefixIcon?: React.ReactNode;
  /**
   * Icon on the right of the button
   */
  suffixIcon?: React.ReactNode;
  /**
   * Styles for padding left and right
   */
  paddingX?: string;
  /**
   * Styles for padding top and bottom
   */
  paddingY?: string;
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Text value of the button
   */
  text: string;
  /**
   *  Custom text color of the button default `white`
   */
  textColor?: string;
  /**
   *  Whether the button is rounded default `true`
   */
  rounded?: boolean;
  /**
   * background color of button `required`
   */
  backgroundColor: string;
  /**
   * whether text is uppercase default `false`
   */
  uppercase?: boolean;
  /**
   * The URL for the linkButton
   */
  to: string;
  /**
   * Other custom classes
   */
  otherClasses?: string;
  /**
   * For nextjs as prop use cases
   */
  as?: string;
  /**
   * Styles for padding left and right
   */
  paddingX?: string;
  /**
   * Styles for padding top and bottom
   */
  paddingY?: string;
}

/**
 * Custom styled button component
 */
export const Button: FC<ButtonProps> = ({
  backgroundColor,
  textColor = "text-white",
  uppercase = false,
  rounded = true,
  text,
  otherClasses,
  prefixIcon,
  suffixIcon,
  paddingX = "px-4",
  paddingY = "py-2",
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "flex border border-transparent text-base font-bold shadow-2xl transition duration-500 ease-in-out hover:scale-110",
        backgroundColor,
        paddingX,
        paddingY,
        textColor,
        otherClasses,
        {
          uppercase: uppercase,
          "rounded-full": rounded,
          "rounded-lg": !rounded,
        }
      )}
      {...rest}
    >
      {prefixIcon ? prefixIcon : null} <span>{text}</span>{" "}
      {suffixIcon ? suffixIcon : null}
    </button>
  );
};

/**
 * Custom styled link component
 */
export const ButtonLink: FC<ButtonLinkProps> = ({
  backgroundColor,
  textColor = "text-white",
  uppercase = false,
  rounded = true,
  text,
  otherClasses,
  to,
  as,
  paddingX = "px-4",
  paddingY = "py-2",
  ...rest
}) => {
  return (
    <Link
      href={to}
      as={as}
      className={classNames(
        "border border-transparent text-base font-bold shadow-2xl transition duration-500 ease-in-out hover:scale-110",
        backgroundColor,
        textColor,
        paddingX,
        paddingY,
        otherClasses,
        {
          uppercase: uppercase,
          "rounded-full": rounded,
          "rounded-lg": !rounded,
        }
      )}
      {...rest}
    >
      {text}
    </Link>
  );
};
