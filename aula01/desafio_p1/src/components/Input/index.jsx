import style from "./style.module.css";

export const Inputs = ({ label_name, label_valor, tipo, metodo }) => {
  return (
    <>
      <div className={style.input__wrapper}>
        <div className={style.input__container}>
          <input
            className={style.input__field}
            id={label_name}
            type={tipo}
            placeholder=" "
            onChange={metodo}
          />
          <label className={style.input__label} htmlFor={label_name}>
            {label_valor}
          </label>
          <div className={style.input__highlight}></div>
        </div>
        {tipo === "password" && (
          <div className={style.input__forgot_password}>
            <a href="#">Esqueceu a senha?</a>
          </div>
        )}
      </div>
    </>
  );
};

/*
    <Div type="wrapper">
        <Div type="container">
          <Input
            id={label_name}
            type={tipo}
            placeholder=" "
            onChange={metodo}
          />
          <Label htmlFor={label_name}>{label_valor}</Label>
          <Div type="highlight" />
        </Div>
        {tipo === "password" && (
          <Div type="forgot">
            <a href="#">Esqueceu a senha?</a>
          </Div>
        )}
      </Div>

*/
