import estilo from "./style.module.css";
const Button = ({
  className,
  value,
  disabled = false,
  onClick,
  type = "button",
}) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export const ButtonsGroup = ({ campoEmail = true, resposta }) => {
  return (
    <div className={estilo.buttons__container}>
      <Button
        className={estilo.button__login}
        type={"submit"}
        value={"Login"}
        disabled={campoEmail}
        resposta={resposta}
      />

      <Button className={estilo.button__cancel} value={"Voltar"} />
    </div>
  );
};
