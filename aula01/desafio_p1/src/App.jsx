/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { ButtonsGroup } from "./components/button/Buttons";
import { Footer } from "./components/footer/Footer";
import { Inputs } from "./components/inputs/Inputs";
import { Navbar } from "./components/navbar/Navbar";

export const App = () => {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");

  const [resposta, setResposta] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const [enviado, setEnviado] = useState(false);

  const validar = email.trim().length > 0;

  const emailPadrao = "lucasleal00100@gmail.com";
  const senhaPadrao = "1234";

  useEffect(() => {
    if (!enviado) return;

    if (emailPadrao === email && senhaPadrao === senha) {
      setResposta(true);
      alert("Login realizado com sucesso!");
      setMensagem(
        `Usuário válido!\nUsuário certo: ${email}\nSenha certa: ${senha}`,
      );
    } else {
      setResposta(false);
      alert("Login inválido! Tente novamente.");
      setMensagem(
        `Usuário inválido!\nUsuário informado: ${email}\nSenha informado: ${senha}`,
      );
    }

    setEnviado(false);
  }, [enviado, email, senha, emailPadrao, senhaPadrao]);

  useEffect(() => {
    if (mensagem) {
      console.log(mensagem);
    }
  }, [mensagem]);

  const dispararValidacao = (event) => {
    event.preventDefault();
    setEnviado(true);
  };

  return (
    <>
      <Navbar />

      <section>
        <form className="container" onSubmit={dispararValidacao}>
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
      </section>

      <Footer />
    </>
  );
};
