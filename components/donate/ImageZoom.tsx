import classNames from "classnames";
import { FC, useState } from "react";

interface Props {
  /**
   * Width of the image default 150px
   */
  width?: number;
  /**
   * Image URL
   */
  src: string;
  /**
   * Alternative text of the image
   */
  altText?: string;
}

/**
 * Renders component that zooms the Image
 */
export const ImageZoom: FC<Props> = ({ src, altText, width = 150 }) => {
  const [zoomed, setZoom] = useState<boolean>(false);
  return (
    <div
      style={{ width }}
      className={classNames(
        "relative mx-auto cursor-pointer rounded-xl shadow-2xl",
        {
          zoom: zoomed,
        }
      )}
      onClick={() => (zoomed ? setZoom(false) : setZoom(true))}
    >
      {zoomed && (
        <span
          onClick={() => setZoom(false)}
          className="absolute top-0 right-0 h-3 w-3 cursor-pointer font-mono text-xs text-white"
        >
          x
        </span>
      )}
      <img alt={altText} src={src} width="100%" />
    </div>
  );
};
