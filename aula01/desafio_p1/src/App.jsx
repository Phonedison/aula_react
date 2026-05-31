import { useState } from "react";
import { Buttons } from "./components/Buttons";
import { Footer } from "./components/Footer";
import { Inputs } from "./components/inputs";
import "./style/main.css";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const [texto, setTexto] = useState("");

  const campoPreenchido = texto.trim().length > 0;

  return (
    <>
      <Navbar />
      <section>
        <form className="container">
          <h2>Login</h2>
          <Inputs
            label_name={"email"}
            label_valor={"Digite sua email"}
            tipo={"email"}
            metodo={(email) => setTexto(email.target.value)}
          />
          <Inputs
            label_name={"senha"}
            label_valor={"Digite sua senha"}
            tipo={"password"}
          />
          <div className="buttons__container">
            <Buttons
              style={"button-login"}
              value={"Login"}
              disabled={campoPreenchido ? "true" : "false"}
            />
            <Buttons style={"button-cancel"} value={"Voltar"} />
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};
