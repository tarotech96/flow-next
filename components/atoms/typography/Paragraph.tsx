import React from 'react';
import { TypoPropType } from '../../../types/types';

const Paragraph: React.FC<TypoPropType> = ({ content }) => {
  return (
    <div className="format">
      <p>{content}</p>
    </div>
  );
};

export default Paragraph;
