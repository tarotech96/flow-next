import React, { ReactNode } from 'react';

const Form: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <form className="flex flex-col w-1/2 max-w-1/2" autoComplete="off">
      {children}
    </form>
  );
};

export default Form;
