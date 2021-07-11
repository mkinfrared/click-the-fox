import React, { useEffect, useRef, useState } from "react";

import ImagePlaceholder from "ui/ImagePlaceholder";

import css from "./Image.module.scss";
import { ImageProps } from "./Image.type";

const Image = ({
  alt = "image",
  loadWidth,
  loadHeight,
  loadThreshold = 0,
  onClick,
  src
}: ImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const placeholderRef = useRef<HTMLDivElement | null>(null);

  const loadImage = () => {
    if (imageRef.current) {
      imageRef.current.src = src;
    }
  };

  const config = {
    root: null,
    rootMargin: "0px",
    threshold: loadThreshold
  };

  const observer = useRef(
    new IntersectionObserver((entries, obsvr) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();

          obsvr.unobserve(entry.target);
        }
      });
    }, config)
  );

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageFailed(true);

    setImageLoaded(true);
  };

  useEffect(() => {
    const { current } = observer;

    if (placeholderRef.current) {
      current.observe(placeholderRef.current);
    }

    return () => {
      current.disconnect();
    };
  }, []);

  const className = imageLoaded ? "" : css.loading;

  return (
    <>
      {!imageFailed && (
        <img
          className={className}
          alt={alt}
          ref={imageRef}
          onLoad={handleImageLoad}
          onError={handleImageError}
          onClick={onClick}
        />
      )}
      {!imageLoaded && (
        <ImagePlaceholder
          width={loadWidth}
          height={loadHeight}
          forwardRef={placeholderRef}
        />
      )}
      {imageFailed && (
        <div
          className={css.failed}
          style={{ width: loadWidth, height: loadHeight }}
        >
          <p>Failed to load content</p>
        </div>
      )}
    </>
  );
};

export { Image };

export default React.memo(Image);
