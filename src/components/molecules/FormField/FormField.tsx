import React from 'react';
import { Input, Typography } from '@components/atoms';
import { UseFormRegister } from 'react-hook-form';
import { IFormInputs } from '@/model/interfaces';

interface IFormFieldProps {
  type: 'email' | 'password' | 'text';
  id: string;
  placeholder: string;
  error?: string;
  register: UseFormRegister<IFormInputs>;
}

const FormField: React.FC<IFormFieldProps> = ({
  type,
  id,
  placeholder,
  error,
  register,
}) => {
  return (
    <div>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(type)}
      />
      {error ? (
        <Typography as="p" color="error" size="small">
          {error}
        </Typography>
      ) : null}
    </div>
  );
};

export default FormField;
