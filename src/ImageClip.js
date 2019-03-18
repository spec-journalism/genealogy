import React from 'react';
import { clipId, imagesId } from './constants';

const ImageClip = () => {
  return (
    <use
      xlinkHref={`#${imagesId}`}
      clipPath={`url(#${clipId})`}
    />
  );
};

export default ImageClip;