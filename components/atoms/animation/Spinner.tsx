import React from 'react';
import { Spinner as SP } from 'flowbite-react';
import Button from '../button/Button';

const Spinner: React.FC<{
  color: 'success' | 'failure' | 'info' | 'warning' | 'purple';
  size?: 'sx' | 'sm' | 'md' | 'lg' | 'xl';
  label: string;
}> = ({ color, size, label }) => {
  return (
    <Button 
      buttonLabel={label}
      color='success'
      size='md'
      gradientDuoTone='purpleToBlue'
    >
     <SP color={color} size={size} aria-label={label} />
    </Button>
  );
};

export default Spinner;
