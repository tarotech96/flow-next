import React from 'react';

const Span: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <div className="format">
      <span>{title}</span>
    </div>
  );
};

export default Span;
