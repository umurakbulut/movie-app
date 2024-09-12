import React, { ElementType, ReactNode } from 'react';
import './_typography.scss';

interface ITypographyProps<C extends ElementType> {
  children: ReactNode;
  as?: C;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error';
  fontWeight?: 'normal' | 'bold';
  textAlign?: 'left' | 'center' | 'right';
}

const Typography = <C extends ElementType = 'p'>({
  as,
  children,
  size = 'medium',
  color = 'primary',
  fontWeight = 'normal',
  textAlign = 'left',
  ...props
}: ITypographyProps<C> & React.ComponentPropsWithoutRef<C>) => {
  const Component = as || 'p';

  return (
    <Component
      className={`typography ${size} ${color} ${fontWeight} ${textAlign}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
