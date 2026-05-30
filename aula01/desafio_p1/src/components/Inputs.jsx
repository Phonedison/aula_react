export const Inputs = ({ label_name, label_valor, tipo }) => {
  return (
    <div>
      <label htmlFor={label_name}>{label_valor}</label>
      <input name={label_name} type={tipo} />
    </div>
  );
};
