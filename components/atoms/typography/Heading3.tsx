import React from 'react';
import { TypoPropType } from '../../../types/types';

const Heading3: React.FC<TypoPropType> = ({ title }) => {
  return (
    <div className='format'>
      <h3>{title}</h3>
    </div>
  );
};

export default Heading3;
