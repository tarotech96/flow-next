import { Rating } from 'flowbite-react';
import React from 'react';

const Star: React.FC<{
  filled: boolean;
}> = ({ filled = true }) => {
  return (
    <Rating>
      <Rating.Star filled={filled} />
    </Rating>
  );
};

export default Star;
