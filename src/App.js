import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalsContext } from "./api/GlobalsContext";

export default function App() {
  // const [, setSheetEntries] = useContext(GlobalsContext).sheetEntries;
  // const [, setFormOptions] = useContext(GlobalsContext).formOptions;
  // const navigate = useNavigate();

  // useEffect(() => {
  //   google.script.run
  //     .withSuccessHandler((data) => {
  //       let temp = data;
  //       setFormOptions(temp);
  //     })
  //     .getFormOptions("Configuración", "Captura");

  //   google.script.run
  //     .withSuccessHandler((data) => {
  //       let temp = orderEntries(sheetDataToEntries(data), "date");
  //       setSheetEntries(temp);
  //       navigate("/home");
  //     })
  //     .getData("Captura", "A2:J");
  // }, []);

  // const sheetDataToEntries = (sheetData) => {
  //   const entries = [];
  //   sheetData.forEach((e) => {
  //     const date = new Date();
  //     date.setDate(e[1]);
  //     date.setMonth(e[2] - 1);
  //     date.setFullYear(e[3]);
  //     entries.push({ id: e[0], date: date, amount: e[4], type: e[5], account: e[6], category: e[7], description: e[8], plc: e[9] });
  //   });
  //   return entries;
  // };

  // const orderEntries = (entries, property) => {
  //   return entries.sort((a, b) => b[property] - a[property]);
  // };

  return <div>Cargando...</div>;
}
