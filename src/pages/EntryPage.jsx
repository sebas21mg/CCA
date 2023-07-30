import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalsContext } from "../api/GlobalsContext";
import { dateToString, dateToValue } from "../api/dateFormating";

export default function EntryPage() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [sheetEntries] = useContext(GlobalsContext).sheetEntries;
  const [entry] = sheetEntries.filter((e) => e.id == id);

  const onSave = (formData) => {
    // google.script.run.withSuccessHandler(() => navigate("/")).postFormDataInSheet(formData);
    navigate("/");
  };

  const onCancel = () => {
    navigate("/home");
  };

  return (
    <>
      <form>
        <div className="w-[90%] mx-auto my-4">
          <input
            type="date"
            id="date"
            {...register("date")}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-px"
          />
        </div>

        <div className="w-[90%] mx-auto my-4">
          <input
            type="number"
            id="amount"
            {...register("amount")}
            step={0.01}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-px"
            placeholder={entry.amount}
          />
        </div>

        {/* <div className="w-[90%] mx-auto my-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-900">
            Tipo
          </label>

          <select
            id="type"
            {...register("type")}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-px">
            <option value="" key={0}></option>

            {types.map((type, index) => (
              <option value={type} key={index + 1}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="w-[90%] mx-auto my-4">
          <label htmlFor="account" className="block text-sm font-medium text-gray-900">
            Cuenta
          </label>

          <select
            id="account"
            {...register("account")}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-px">
            <option value="" key={0}></option>

            {accounts.map((account, index) => (
              <option value={account} key={index + 1}>
                {account}
              </option>
            ))}
          </select>
        </div>

        <div className="w-[90%] mx-auto my-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-900">
            Categoría
          </label>

          <select
            id="category"
            {...register("category")}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-px">
            <option value="" key={0}></option>

            {categories.map((category, index) => (
              <option value={category} key={index + 1}>
                {category}
              </option>
            ))}
          </select>
        </div> */}

        <div className="w-[90%] mx-auto my-4">
          <input
            type="text"
            id="description"
            {...register("description")}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-px"
            placeholder={entry.description}
          />
        </div>

        <div className="w-[90%] mx-auto my-4">
          <input
            type="text"
            id="plc"
            {...register("plc")}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-px"
            placeholder={entry.plc}
          />
        </div>

        <div className="mt-4 flex items-center justify-center">
          <button
            type="button"
            onClick={handleSubmit(onSave)}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Guardar
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <button
            type="button"
            onClick={handleSubmit(onCancel)}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
}
