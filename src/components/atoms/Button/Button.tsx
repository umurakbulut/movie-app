import React from 'react';
import './_button.scss';

interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}) => {
  return (
    <button
      className={`custom-button ${variant} ${size}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
