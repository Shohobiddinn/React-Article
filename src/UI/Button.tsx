interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset" | "link"; 
}

const Button = ({ children, type = "button" }: ButtonProps) => {
  return (
    <button className={`btn btn-sm btn-primary h-0 ${type}`}>{children}</button>
  );
};

export default Button;
