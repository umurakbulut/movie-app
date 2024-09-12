import React from 'react';

interface IIconProps {
  name: string;
  onClick?: () => void;
}

const Icon: React.FC<IIconProps> = ({ name, onClick }) => {
  return <i className={name} onClick={onClick} role="button" tabIndex={0} />;
};

export default Icon;
