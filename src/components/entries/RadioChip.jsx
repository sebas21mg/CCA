export default function RadioChip({ value, register, name }) {
  const className = {
    input: `appearance-none peer`,
    label: `cursor-pointer flex whitespace-nowrap p-0.5 px-2.5 rounded-full text-center items-center bg-neutral-200 peer-checked:bg-violet-200`,
  };

  return (
    <div className="flex items-center">
      <input type="radio" id={value} {...register(name)} value={value} className={className.input} />
      <label htmlFor={value} className={className.label}>
        {value}
      </label>
    </div>
  );
}
