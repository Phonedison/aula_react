export const Inputs = ({ label_name, label_valor, tipo }) => {
  return (
    <div className="input__container">
      <input
        className="input__field"
        id={label_name}
        type={tipo}
        placeholder=" "
      />
      <label className="input__label" htmlFor={label_name}>
        {label_valor}
      </label>
      <div className="input__highlight"></div>
      {tipo === "password" && <a href="#">Esqueceu a senha?</a>}
    </div>
  );
};
