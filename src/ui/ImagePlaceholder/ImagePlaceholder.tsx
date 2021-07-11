import React from "react";
import ContentLoader from "react-content-loader";

import css from "./ImagePlaceholder.module.scss";
import { ImagePlaceholderProps } from "./ImagePlaceholder.type";

const ImagePlaceholder = ({
  forwardRef,
  height,
  width
}: ImagePlaceholderProps) => {
  const foregroundColor = "#ffb74d";
  const backgroundColor = "#f57c00";

  return (
    <div className={css.ImagePlaceholder} ref={forwardRef}>
      <ContentLoader
        foregroundColor={foregroundColor}
        backgroundColor={backgroundColor}
        speed={1.6}
        width={width}
        height={height}
      >
        <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
      </ContentLoader>
    </div>
  );
};

export { ImagePlaceholder };

export default React.memo(ImagePlaceholder);
