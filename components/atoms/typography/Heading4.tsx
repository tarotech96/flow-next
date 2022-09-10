import React from 'react';
import { TypoPropType } from '../../../types/types';

const Heading4: React.FC<TypoPropType> = ({ title }) => {
  return (
    <div className='format'>
      <h4>{title}</h4>
    </div>
  );
};

export default Heading4;
