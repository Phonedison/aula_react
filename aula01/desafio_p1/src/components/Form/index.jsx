import { ButtonsGroup } from "../Button";
import { Inputs } from "../Input";
import style from "./style.module.css";
export const Formulario = ({
  dispararValidacao,
  setEmail,
  email,
  setSenha,
  resposta,
  validar,
}) => {
  return (
    <form className={style.container} onSubmit={dispararValidacao}>
      <h2>Login</h2>

      <Inputs
        label_name={"email"}
        label_valor={"Digite sua email"}
        tipo={"email"}
        metodo={(emailInput) => setEmail(emailInput.target.value)}
      />

      {email && (
        <Inputs
          label_name={"senha"}
          label_valor={"Digite sua senha"}
          tipo={"password"}
          metodo={(senhaInput) => setSenha(senhaInput.target.value)}
        />
      )}

      <ButtonsGroup campoEmail={!validar} resposta={resposta} />
    </form>
  );
};
