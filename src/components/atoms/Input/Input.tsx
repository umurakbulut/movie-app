import React, { forwardRef } from 'react';
import './_input.scss';

interface IInputProps extends React.ComponentPropsWithoutRef<'input'> {
  variant?: 'small' | 'medium' | 'large';
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ variant = 'medium', ...props }, ref) => {
    return <input ref={ref} className={`custom-input ${variant}`} {...props} />;
  }
);

Input.displayName = 'Input';

export default Input;
