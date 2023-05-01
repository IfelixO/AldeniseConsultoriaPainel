import { useState } from "react";
import logo from "./assets/img/logo.png";
import "./App.css";
import api from "./assets/services/api";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState();
  const [nome, setNome] = useState();
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const [senhaR, setSenhaR] = useState();
  const [email, setEmail] = useState();
  const [visiCadastro, setVisiCadastro] = useState(false);
  const [erro, setErro] = useState(null);

  const [carregando, setCarregando] = useState(false);

  const cuidarEntrar = () => {
    setCarregando(true)
    let adm = {
      login: login,
      senha: senha,
    };
    api
      .post("usuario/loginADM", adm)
      .then((res) => {
        // console.log(res.data);
        if (res.data.status) {
          navigate("/clientes");
        } else {
          setCarregando(false)
          setErro("Administrador não encontrado");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cuidarAcesso = () => {
    setVisiCadastro(true);
  };

  const cuidarCadastrar = () => {
    if (senha == senhaR) {
    }
    let adm = {
      codigo: codigo,
      nome: nome,
      login: login,
      senha: senha,
      email: email,
    };

    api
      .post("usuario/cadastrarADM", adm)
      .then((res) => {
        navigate("/clientes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="appTela">
      <div className="appConteiner">
        <img
          src={logo}
          className="appLogo"
          alt="Logo principal"
          title="Aldenise Consultoria Pessoal"
        />
        {visiCadastro ? (
          <div className="appFormulario">
            <input
              className="appInput"
              placeholder="Código"
              onChange={(e) => {
                setCodigo(e.target.value);
              }}
            />
            <input
              className="appInput"
              placeholder="Nome"
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
            <input
              className="appInput"
              placeholder="Login"
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            />
            <input
              className="appInput"
              placeholder="Senha"
              type="password"
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
            <input
              className="appInput"
              placeholder="Repita a senha"
              type="password"
              onChange={(e) => {
                setSenhaR(e.target.value);
              }}
            />
            <input
              className="appInput"
              placeholder="E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              onClick={cuidarCadastrar}
              className="appBotao"
              title="Cadastrar"
            >
              Cadastrar
            </button>
          </div>
        ) : (
          <div className="appFormulario">
            <input
              className="appInput"
              placeholder="Login"
              onChange={(e) => {
                setErro(null);
                setLogin(e.target.value);
              }}
            />
            <input
              className="appInput"
              placeholder="Senha"
              type="password"
              onChange={(e) => {
                setErro(null);
                setSenha(e.target.value);
              }}
            />
            <p className="erro">{erro}</p>
            {carregando ? (
              <p className="carregando">Entrando...</p>
            ) : (
              <>
                {" "}
                <button
                  onClick={cuidarEntrar}
                  className="appBotao"
                  title="Entrar"
                >
                  Entrar
                </button>
                <button
                  onClick={cuidarAcesso}
                  className="appBotaoAcesso"
                  title="Primeiro acesso"
                >
                  Primeiro acesso
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
