
interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="btn btn-primary">{children}</button>
  );
};

export default Button;
