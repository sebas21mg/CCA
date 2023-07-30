import { useContext } from "react";
import { GlobalsContext } from "../api/GlobalsContext";
import { dateToString } from "../api/dateFormating";
import IncomeBtn from "../components/buttons/IncomeBtn";
import Entry from "../components/entries/Entry";

export default function HomePage() {
  const [entries] = useContext(GlobalsContext).sheetEntries;

  return (
    <>
      <IncomeBtn />
      {entries.map((e) => (
        <Entry
          key={e.id}
          id={e.id}
          date={dateToString(e.date)}
          amount={e.amount}
          type={e.type}
          account={e.account}
          category={e.category}
          description={e.description}
          plc={e.plc}
        />
      ))}
    </>
  );
}
