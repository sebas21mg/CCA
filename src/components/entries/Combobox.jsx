import { useMemo, useState } from "react";

export default function Combobox({ register, name, placeholder, options, icon }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const [defaultIsChecked, setDefaultCheck] = useState(true);
  const name2 = name + "2";

  const filteredOptions = useMemo(() => {
    return options.filter((option) => option.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const changeSearch = (event) => {
    setSearch(event.target.value);
    if (defaultIsChecked) setResult(event.target.value);
  };

  const selectDefault = () => {
    setDefaultCheck(true);
    setResult(search);
  };

  const selectOption = (event) => {
    setSearch(event.target.value);
    setDefaultCheck(false);
    setResult(event.target.value);
  };

  const className = {
    iconContainer: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1.5",
    icon: "material-icons-round text-base",
    searcher: "block w-full py-1.5 pl-7 pr-1.5 border-0 rounded-md bg-neutral-200 focus:outline-none",
    resultsContainer: "w-full rounded-md bg-neutral-200",
  };

  return (
    <>
      <div className="relative">
        <div className={className.iconContainer}>
          <span className={className.icon}>{icon}</span>
        </div>
        <input
          type="text"
          value={search}
          placeholder={placeholder}
          {...register(name)}
          onChange={changeSearch}
          autoComplete="off"
          className={className.searcher}
        />
      </div>

      <div className={className.resultsContainer}>
        {result != search && (
          <div>
            <span className="text-gray-500 material-icons-round text-base">done</span>
            <span>{result}</span>
          </div>
        )}

        {result != search && (
          <>
            <input type="radio" id="default" {...register(name2)} name={name2} onClick={selectDefault} value="" />
            <label htmlFor="default">{search}</label>
          </>
        )}

        {filteredOptions.map(
          (option, index) =>
            search !== "" &&
            result != option && (
              <span key={index} className="block">
                <input type="radio" id={option} value={option} name={name2} {...register(name2)} onClick={selectOption} />
                <label htmlFor={option}>{option}</label>
              </span>
            )
        )}
      </div>
    </>
  );
}
