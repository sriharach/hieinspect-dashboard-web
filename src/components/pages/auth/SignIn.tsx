'use client';

// component
import AuthLayout from '@/components/modules/layouts/AuthLayout';

// libs
import React from 'react';
import { Input, Button } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

// types
import { RequestSignIn } from '@/types/models/signIn';

const SignIn = () => {
  // router
  const router = useRouter();

  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestSignIn>({
    defaultValues: {
      username: 'admin',
      password: '1234',
    },
  });

  const handleSubmitLogin = handleSubmit((data) => {
    console.log('data :>> ', data);
    router.push('/dashboard');
  });

  return (
    <AuthLayout>
      <div className="text-center text-4xl font-bold mb-6">Login</div>
      <div className="border rounded-lg bg-transparent max-w-[640px] w-full p-8 backdrop-blur-lg">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmitLogin}>
          <Input
            {...register('username', { required: { value: true, message: 'Request!' } })}
            autoComplete="off"
            errorMessage={errors.username?.message}
            isInvalid={!!errors.username?.message}
            aria-label="username"
            label="Username / Email"
          />
          <Input
            {...register('password', { required: { value: true, message: 'Request!' } })}
            autoComplete="off"
            errorMessage={errors.password?.message}
            isInvalid={!!errors.password?.message}
            aria-label="password"
            label="Password"
            type="password"
          />
          <Button color="primary" type="submit" className="p-2 text-white">
            Login
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
