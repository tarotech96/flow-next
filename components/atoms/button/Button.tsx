import React, { ReactNode } from 'react';
import { Button as FlowbiteButton } from 'flowbite-react';

export type ButtonPropsType = {
  buttonLabel: string;
  color: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  handleFn?: () => void;
  pill?: boolean;
  gradientMonochrome?: string;
  gradientDuoTone?: string;
  outline?: boolean;
  label?: string;
  children?: ReactNode;
  disabled?: boolean;
  styles?: React.CSSProperties;
};

const Button: React.FC<ButtonPropsType> = ({
  buttonLabel,
  color,
  size,
  handleFn,
  pill,
  gradientMonochrome,
  gradientDuoTone,
  outline,
  label,
  children,
  disabled = false,
  styles
}) => {
  return (
    <FlowbiteButton
      color={color}
      size={size}
      onClick={handleFn}
      pill={pill}
      gradientMonochrome={gradientMonochrome}
      gradientDuoTone={gradientDuoTone}
      outline={outline}
      label={label}
      disabled={disabled}
      style={styles}
    >
      {children}
      {buttonLabel}
    </FlowbiteButton>
  );
};

export default Button;
