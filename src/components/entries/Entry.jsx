import { Link } from "react-router-dom";

export default function Entry({ id, date, amount, type, account, category, description, plc }) {
  return (
    <Link to={`/entry/${id}`}>
      <div className="w-[90%] mx-auto my-5">
        <p className="text-accent">{date}</p>
        <div className="bg-primary-300 dark:bg-primary-700 flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <span>{account}</span>
              <span>{type}</span>
              <span>{category}</span>
              <span>{category}</span>
            </div>
            <div className="flex flex-row">
              <span>{description}</span>
              <span>{plc}</span>
            </div>
          </div>
          <span className="flex items-center">{amount}</span>{" "}
        </div>
      </div>
    </Link>
  );
}
