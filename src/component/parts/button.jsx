import { cva } from 'class-variance-authority';
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none  data-[state=open]:bg-slate-100 ',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        social: 'bg-white text-secondary hover:bg-gray-100',
        outline:
          'bg-transparent border border-primary hover:bg-gray-100 text-primary',
        clean: 'bg-white text-primary hover:bg-gray-100',
        ghost: 'hover:bg-gray-100 data-[state=open]:bg-transparent ',
        link: 'bg-transparent underline-offset-4 hover:underline text-slate-900  ',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 ',
        lg: 'h-12 px-8 ',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
