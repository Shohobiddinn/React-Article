import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="btn btn-primary">{children}</button>
  );
};

export default Button;
