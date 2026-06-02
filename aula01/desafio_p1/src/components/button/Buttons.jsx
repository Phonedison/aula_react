import style from "./style.module.css";
const Button = ({ style, value, disabled = false, onClick }) => {
  return (
    <input
      className={style}
      type="button"
      value={value}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export const ButtonsGroup = ({ campoEmail = true, resposta, contagem }) => {
  return (
    <div className={style.buttons__container}>
      <Button
        style={style.button__login}
        value={"Login"}
        disabled={campoEmail}
        resposta={resposta}
        onClick={contagem}
      />

      <Button style={style.button__cancel} value={"Voltar"} />
    </div>
  );
};
