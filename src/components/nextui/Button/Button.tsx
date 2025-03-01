import { Button as ButtonHero } from '@heroui/button';
import { ButtonProps } from '@heroui/react';
import clsx from 'clsx';

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <ButtonHero className={clsx('h-[50px]', className)} {...props}>
      {children}
    </ButtonHero>
  );
};

export default Button;
