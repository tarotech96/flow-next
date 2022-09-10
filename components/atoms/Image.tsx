import React from 'react';

const Image: React.FC<{
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}> = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-${width} h-${height} object-cover`}
    />
  );
};

export default Image;
