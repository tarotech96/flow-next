import React from 'react';
import { TypoPropType } from '../../../types/types';

const Heading2: React.FC<TypoPropType> = ({ title }) => {
  return (
    <div className='format'>
      <h2>{title}</h2>
    </div>
  ) 
};

export default Heading2;
