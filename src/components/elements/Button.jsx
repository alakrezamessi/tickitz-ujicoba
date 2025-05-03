import { Link } from "react-router";

const Button = ({ title, classname, to = "" }) => {
  return (
    <>
      <Link
        to={to}
        className={`${classname} active:scale-95 transition-all hover:cursor-pointer shadow-2xl`}
      >
        {title}
      </Link>
    </>
  );
};

export default Button;
