import React, { ReactNode } from 'react';
import './_link.scss';

interface ILinkProps extends React.ComponentPropsWithoutRef<'a'> {
  children: ReactNode;
  color?: 'primary' | 'secondary';
  fontWeight?: 'normal' | 'bold';
  textAlign?: 'left' | 'center' | 'right';
}

const Link: React.FC<ILinkProps> = ({
  children,
  color = 'primary',
  ...props
}) => {
  return (
    <a className={`custom-link ${color}`} {...props}>
      {children}
    </a>
  );
};
export default Link;
