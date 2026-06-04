/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Formulario } from "./components/Form";
import { Navbar } from "./components/Navbar";

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
      {/*   <GlobalStyle /> */}
      <Navbar />
      <section>
        <Formulario
          dispararValidacao={dispararValidacao}
          setEmail={setEmail}
          email={email}
          setSenha={setSenha}
          resposta={resposta}
          validar={validar}
        />
      </section>

      <Footer />
    </>
  );
};
