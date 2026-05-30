export const Inputs = ({ label_name, label_valor, tipo }) => {
  return (
    <div className="input__container">
      <input
        className="input__field"
        name={label_name}
        type={tipo}
        required=""
      />
      <label className="input__label" htmlFor={label_name}>
        {label_valor}
      </label>
      <span className="input__highlight"></span>
    </div>
  );
};
