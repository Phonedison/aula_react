export const Inputs = ({ label_name, label_valor, tipo, metodo }) => {
  return (
    <>
      <div className="input__wrapper">
        <div className="input__container">
          <input
            className="input__field"
            id={label_name}
            type={tipo}
            placeholder=" "
            onChange={metodo}
          />
          <label className="input__label" htmlFor={label_name}>
            {label_valor}
          </label>
          <div className="input__highlight"></div>
        </div>
        {tipo === "password" && (
          <div className="input__forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>
        )}
      </div>
    </>
  );
};
