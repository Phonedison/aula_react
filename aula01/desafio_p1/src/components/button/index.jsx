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

/* import { Button, Div } from "./styles";

const Inputs = ({
  value,
  disabled = false,
  onClick,
  type = "button",
  login = false,
}) => {
  return (
    <Button
      type={type}
      value={value}
      disabled={disabled}
      onClick={onClick}
      login={login}
    />
  );
};

export const ButtonsGroup = ({ campoEmail = true, resposta }) => {
  return (
    <Div>
      <Inputs
        type={"submit"}
        value={"Login"}
        disabled={campoEmail}
        resposta={resposta}
        login={true}
      />

      <Inputs value={"Voltar"} />
    </Div>
  );
};
 */
