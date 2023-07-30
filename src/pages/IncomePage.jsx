import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GlobalsContext } from "../api/GlobalsContext";
import { dateToValue } from "../api/dateFormating";
import BackBtn from "../components/buttons/BackBtn";
import Combobox from "../components/entries/Combobox";
import RadioChip from "../components/entries/RadioChip";

export default function IncomePage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [{ types, accounts, categories, descriptions, plcs }] = useContext(GlobalsContext).formOptions;

  const [date, setDate] = useState(dateToValue(new Date()));
  const updateDate = (event) => {
    setDate(event.target.value);
  };

  const onSubmit = (form) => {
    if (form.description2 != "" && form.description2 != null) form.description = form.description2;
    if (form.plc2 != "" && form.plc2 != null) form.plc = form.plc2;
    google.script.run.withSuccessHandler(() => navigate("/")).postFormInSheet(form, "Captura");
  };

  const onCancel = () => {
    navigate("/home");
  };

  const className = {
    topContainer: "w-full h-16 p-2 fixed top-0 flex flex-row items-center justify-between bg-neutral-50",
    mainContainer: "w-[90%] my-16 mx-auto py-2",
    bottomContainer: "w-full h-16 p-2 fixed bottom-0 flex flex-row items-center justify-between bg-neutral-50",

    dateInput: "block w-fit h-12 p-0.5 px-5 m-0 text-center align-middle rounded-full bg-violet-200 appearance-none focus:outline-none",

    // amountContainer: "w-full min-h-[20vh] mt-2 flex items-center",
    amountInput:
      "block w-full mt-[10vh] text-center text-6xl rounded-none font-black appearance-none bg-transparent text-violet-800 focus:outline-none placeholder:text-violet-200",

    accountsContainer: "w-full mt-[5vh] flex gap-x-1 gap-y-2 flex-wrap justify-center",

    textsContainer: "w-full mt-[5vh] flex flex-col gap-2",

    submitBtn: "h-12 w-[40%] mx-[5%] rounded-full text-center align-middle shadow",
  };

  return (
    <form>
      <div className={className.topContainer}>
        <BackBtn location={"home"} />
        <div className="relative">
          <input type="date" id="date" {...register("date")} value={date} onChange={updateDate} className={className.dateInput} />
        </div>
      </div>
      <div className={className.mainContainer}>
        {/* <div className={className.amountContainer}> */}
        <input type="number" id="amount" {...register("amount")} step={0.01} placeholder="Monto" className={className.amountInput} />
        {/* </div> */}

        <div className={className.accountsContainer}>
          {accounts.map((account, index) => (
            <RadioChip value={account} register={register} key={index} name={"account"} />
          ))}
        </div>

        <div className={className.textsContainer}>
          <Combobox register={register} name={"description"} placeholder={"Descripción"} options={descriptions} icon={"format_align_left"} />
          <Combobox register={register} name={"plc"} placeholder={"Persona, lugar o cuenta"} options={plcs} icon={"person"} />
        </div>

        <div className="w-[90%] mx-auto my-4">
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
        </div>
      </div>

      <div className={className.bottomContainer}>
        <button type="button" onClick={handleSubmit(onCancel)} className={className.submitBtn + " "}>
          Cancelar
        </button>

        <button type="button" onClick={handleSubmit(onSubmit)} className={className.submitBtn + " "}>
          Guardar
        </button>
      </div>
    </form>
  );
}
