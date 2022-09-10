import React from 'react';
import { TypoPropType } from '../../../types/types';

const Heading6: React.FC<TypoPropType> = ({ title }) => {
  return (
    <div className='format'>
      <h6>{title}</h6>
    </div>
  );
};

export default Heading6;
