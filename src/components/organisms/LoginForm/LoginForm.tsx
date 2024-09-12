import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography, Button } from '@components/atoms';
import { FormField } from '@/components/molecules';
import { IFormInputs } from '@/model/interfaces';
import './_login-form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/store/store';
import { login } from '@/store/slices/authSlice';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
});

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    dispatch(login({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/movies');
    }
  }, [isAuthenticated, navigate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <Typography as="h1" size="medium" textAlign="center">
        Login
      </Typography>

      <FormField
        type="email"
        id="email"
        placeholder="E-mail"
        register={register}
        error={errors.email?.message}
      />

      <FormField
        type="password"
        id="password"
        placeholder="Password"
        register={register}
        error={errors.password?.message}
      />

      {errorMessage ? (
        <Typography color="error" size="small" textAlign="center">
          {errorMessage}
        </Typography>
      ) : null}

      <Button type="submit" variant="primary">
        Login Now
      </Button>
    </form>
  );
};

export default LoginForm;
