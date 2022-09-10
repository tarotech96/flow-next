import React, { ReactNode } from 'react';
import { Checkbox as FlowbiteCheckbox, Label } from 'flowbite-react';

const Checkbox: React.FC<{
  id: string;
  children?: ReactNode;
}> = ({ id, children }) => {
  return (
    <div className="flex items-center gap-2">
      <FlowbiteCheckbox id={id} />
      <Label htmlFor={id}>{children}</Label>
    </div>
  );
};

export default Checkbox;
