'use client';

// component
import AuthLayout from '@/components/modules/layouts/AuthLayout';

// libs
import React, { Suspense, useEffect } from 'react';
import { Input, Button, addToast } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

// types
import { RequestSignIn } from '@/types/models/signIn';
import useAuthSignIn from '@/hooks/useMutation/useAuthSignIn';
import { useAuth } from '@/store/userAuth';
import { AxiosError } from 'axios';

const SignIn = () => {
  // router
  const router = useRouter();

  const { mutate, isPending } = useAuthSignIn();
  const { authenticate, isAuthenticated } = useAuth();

  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestSignIn>({
    // defaultValues: {
    //   username: 'admin',
    //   password: '1234',
    // },
  });

  const handleSubmitLogin = handleSubmit((data) => {
    mutate(data, {
      onSuccess: (response) => {
        authenticate(response.data.data.access_token);
        router.push('/dashboard');
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          addToast({ title: err.response?.data.message, color: 'danger' });
        }
      },
    });
  });

  // useEffect(() => {
  //   if (isAuthenticated) router.push('/dashboard');
  // }, [isAuthenticated]);

  return (
    <AuthLayout>
      <div className="border rounded-lg bg-transparent max-w-[640px] w-full p-8 backdrop-blur-lg">
        <div className="text-center text-4xl font-bold mb-6">Hieinspect Login</div>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmitLogin}>
          <Input
            {...register('username', {
              required: { value: true, message: 'Request!' },
            })}
            autoComplete="off"
            errorMessage={errors.username?.message}
            isInvalid={!!errors.username?.message}
            aria-label="username"
            label="Username / Email"
          />
          <Input
            {...register('password', {
              required: { value: true, message: 'Request!' },
            })}
            autoComplete="off"
            errorMessage={errors.password?.message}
            isInvalid={!!errors.password?.message}
            aria-label="password"
            label="Password"
            type="password"
          />
          <Button color="primary" type="submit" className="p-2 text-white" isLoading={isPending}>
            Login
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
