import React from 'react';
import { TypoPropType } from '../../../types/types';

const Heading5: React.FC<TypoPropType> = ({ title }) => {
  return (
    <div className='format'>
      <h5>{title}</h5>
    </div>
  );
};

export default Heading5;
