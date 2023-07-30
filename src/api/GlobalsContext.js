import { createContext, useState } from "react";

export const GlobalsContext = createContext();

export const GlobalsProvider = ({ children }) => {
  const [sheetEntries, setSheetEntries] = useState([]);
  const [formOptions, setFormOptions] = useState([]);

  return (
    <GlobalsContext.Provider
      value={{
        sheetEntries: [sheetEntries, setSheetEntries],
        formOptions: [formOptions, setFormOptions],
      }}>
      {children}
    </GlobalsContext.Provider>
  );
};
