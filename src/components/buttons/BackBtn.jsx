import { Link } from "react-router-dom";

export default function BackBtn({ location }) {
  const className = {
    div: "w-12 aspect-square flex items-center justify-center rounded-full hover:shadow-lg",
    span: "material-icons-round text-3xl",
  };

  return (
    <Link to={`/${location}`}>
      <div className={className.div}>
        <span className={className.span}>arrow_back</span>
      </div>
    </Link>
  );
}
