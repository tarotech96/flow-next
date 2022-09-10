import React from 'react';
import { Avatar as FlowbiteAvatar } from 'flowbite-react';

const Avatar: React.FC<{
  img: string;
  rounded?: boolean;
}> = ({ img, rounded = true }) => {
  return <FlowbiteAvatar img={img} rounded={rounded} />;
};

export default Avatar;
