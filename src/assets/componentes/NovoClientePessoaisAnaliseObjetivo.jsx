import { useState } from "react";
import { IMaskInput } from "react-imask";
import "../estilos/NovoClientePessoaisAnaliseObjetivo.css";
import { Chart } from "react-google-charts";
import { useEffect } from "react";

export default function NovoClientePessoaisAnaliseObjetivo({
  setValoresPessoais,
  setValoresAnalise,
  setValoresObjetivo,
  erroNome,
  erroTelefone,
  erroEmail,
  erroOcupacao,
  erroGrafico,
  erroTitulo,
  erroMotivacao,
  erroFinal,
  erroInicial,
  erroParcela,
}) {
  const [tubaraoPorc, setTubaraoPorc] = useState(0);
  const [gatoPorc, setGatoPorc] = useState(0);
  const [loboPorc, setLoboPorc] = useState(0);
  const [aguiaPorc, setAguiaPorc] = useState(0);

  const cuidarInsercaoDadosPessoais = (e) => {
    setValoresPessoais((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const cuidarInsercaoDadosObjetivo = (e) => {
    setValoresObjetivo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const cuidarInputMoeda = (e) => {
    let valor = e.target.value;
    valor = valor.replace(/\D/g, "");
    if (Number(valor)) {
      valor = valor.replace(/(\d)(\d{2})$/, "$1,$2");
      valor = valor.replace(/(?=(\d{3})+(\D))\B/g, ".");
      valor = "R$ " + valor;
      e.target.value = valor;
    } else {
      e.target.value = "";
    }
    cuidarInsercaoDadosObjetivo(e);
    return e;
  };

  const cuidarInputTelefone = (e) => {
    let valor = e.target.value;
    valor = valor.replace(/\D/g, "");
    if (Number(valor)) {
      valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
      valor = valor.replace(/(?=(\d{5})+(\D))\B/g, ") ");
      {
        valor.length == 14 ? (valor = "(" + valor) : null;
      }
      e.target.value = valor;
      cuidarInsercaoDadosPessoais(e);
    } else {
      e.target.value = "";
    }
    return e;
  };

  return (
    <>
      <section className="novoClientePessoais">
        <h2 className="novoClienteFormTitulo">Dados Pessoais</h2>
        <form className="novoClientePessoaisForm" id="dadosPessoais">
          <label className="novoClienteFormLabel">
            Nome Completo
            <input
              required
              type="text"
              className="novoClientePessoaisFormInput"
              id="nome"
              name="nome"
              form="dadosPessoais"
              tabIndex={1}
              maxLength={40}
              onChange={(e) => {
                cuidarInsercaoDadosPessoais(e);
              }}
            />
          <p className="novoClienteErroPessoais">{erroNome}</p>
          </label>
          <label className="novoClienteFormLabel">
            Telefone
            <input
              required
              type="text"
              className="novoClientePessoaisFormInput"
              id="telefone"
              name="telefone"
              form="dadosPessoais"
              tabIndex={2}
              maxLength={14}
              onChange={(e) => {
                cuidarInputTelefone(e);
              }}
            />
          <p className="novoClienteErroPessoais">{erroEmail}</p>
          </label>
          <label className="novoClienteFormLabel">
            E-mail
            <input
              required
              type="email"
              className="novoClientePessoaisFormInput"
              id="email"
              name="email"
              form="dadosPessoais"
              tabIndex={3}
              maxLength={40}
              onChange={(e) => {
                cuidarInsercaoDadosPessoais(e);
              }}
            />
          <p className="novoClienteErroPessoais">{erroTelefone}</p>
          </label>
          <label className="novoClienteFormLabel">
            Ocupação
            <input
              required
              type="text"
              className="novoClientePessoaisFormInput"
              id="ocupacao"
              name="ocupacao"
              form="dadosPessoais"
              tabIndex={4}
              maxLength={40}
              onChange={(e) => {
                cuidarInsercaoDadosPessoais(e);
              }}
            />
          <p className="novoClienteErroPessoais">{erroOcupacao}</p>
          </label>
        </form>
      </section>
      <div className="novoClienteDiv">
        <section className="novoClienteAnalise">
          <h2 className="novoClienteFormTitulo">Análise Comportamental</h2>
          <div className="novoClienteAnaliseGrafico">
            <Chart
              width={"200px"}
              height={"200px"}
              chartType="PieChart"
              data={[
                ["Gráfico", "DISC"],
                ["Tubarão", tubaraoPorc],
                ["Gato", gatoPorc],
                ["Lobo", loboPorc],
                ["Águia", aguiaPorc],
              ]}
              options={{ legend: "none" }}
            />
          </div>
          <form className="novoClienteAnaliseForm" id="analiseComportamental">
            <label className="novoClienteFormLabel">
              Tubarão
              <IMaskInput
                mask="00.00"
                required
                type="number"
                className="novoClienteAnaliseFormInput"
                id="tubarao"
                name="tubarao"
                form="analiseComportamental"
                tabIndex={5}
                maxLength={4}
                onChange={(v) => {
                  setTubaraoPorc(Number(v.target.value));
                  setValoresAnalise({
                    tubarao: tubaraoPorc,
                    gato: gatoPorc,
                    lobo: loboPorc,
                    aguia: aguiaPorc,
                  });
                }}
              />
              %
            </label>
            <label className="novoClienteFormLabel">
              Gato
              <IMaskInput
                mask="00.00%"
                required
                type="number"
                className="novoClienteAnaliseFormInput"
                id="gato"
                name="gato"
                form="analiseComportamental"
                tabIndex={6}
                maxLength={4}
                onChange={(v) => {
                  setGatoPorc(Number(v.target.value));
                  setValoresAnalise({
                    tubarao: tubaraoPorc,
                    gato: gatoPorc,
                    lobo: loboPorc,
                    aguia: aguiaPorc,
                  });
                }}
              />
              %
            </label>
            <label className="novoClienteFormLabel">
              Lobo
              <IMaskInput
                mask="00.00%"
                required
                type="number"
                className="novoClienteAnaliseFormInput"
                id="lobo"
                name="lobo"
                form="analiseComportamental"
                tabIndex={7}
                maxLength={4}
                onChange={(v) => {
                  setLoboPorc(Number(v.target.value));
                  setValoresAnalise({
                    tubarao: tubaraoPorc,
                    gato: gatoPorc,
                    lobo: loboPorc,
                    aguia: aguiaPorc,
                  });
                }}
              />
              %
            </label>
            <label className="novoClienteFormLabel">
              Águia
              <IMaskInput
                mask="00.00"
                required
                type="number"
                className="novoClienteAnaliseFormInput"
                id="aguia"
                name="aguia"
                form="analiseComportamental"
                tabIndex={8}
                maxLength={4}
                onChange={(v) => {
                  setAguiaPorc(Number(v.target.value));
                  setValoresAnalise({
                    tubarao: tubaraoPorc,
                    gato: gatoPorc,
                    lobo: loboPorc,
                    aguia: aguiaPorc,
                  });
                }}
              />
              %
            </label>
          </form>
          <p className="novoClienteErroAnalise">{erroGrafico}</p>
        </section>
        <section className="novoClienteObjetivo">
          <h2 className="novoClienteFormTitulo">Objetivo Guia</h2>
          <form className="novoClienteObjetivoForm" id="objetivo">
            <label className="novoClienteFormLabel">
              Título
              <input
                required
                type="text"
                className="novoClienteObjetivoFormInput"
                id="titulo"
                name="titulo"
                form="objetivo"
                tabIndex={9}
                maxLength={20}
                onChange={(e) => {
                  cuidarInsercaoDadosObjetivo(e);
                }}
              />
          <p className="novoClienteErroObjetivo">{erroTitulo}</p>
            </label>
            <label className="novoClienteFormLabel">
              Motivação
              <input
                required
                type="text"
                className="novoClienteObjetivoFormInput"
                id="motivacao"
                name="motivacao"
                form="objetivo"
                tabIndex={9}
                maxLength={20}
                onChange={(e) => {
                  cuidarInsercaoDadosObjetivo(e);
                }}
              />
          <p className="novoClienteErroObjetivo">{erroMotivacao}</p>
            </label>
            <label className="novoClienteFormLabel">
              Valor final
              <input
                required
                type="text"
                className="novoClienteObjetivoFormInput"
                id="valorFinal"
                name="valorFinal"
                form="objetivo"
                tabIndex={10}
                maxLength={20}
                onChange={(e) => {
                  cuidarInputMoeda(e);
                }}
              />
          <p className="novoClienteErroObjetivo">{erroFinal}</p>
            </label>
            <label className="novoClienteFormLabel">
              Valor inicial
              <input
                required
                type="text"
                className="novoClienteObjetivoFormInput"
                id="valorInicial"
                name="valorInicial"
                form="objetivo"
                tabIndex={11}
                maxLength={20}
                onChange={(e) => {
                  cuidarInputMoeda(e);
                }}
              />
          <p className="novoClienteErroObjetivo">{erroInicial}</p>
            </label>
            <label className="novoClienteFormLabel">
              Valor da parcela
              <input
                required
                type="text"
                className="novoClienteObjetivoFormInput"
                id="valorParcela"
                name="valorParcela"
                form="objetivo"
                tabIndex={12}
                maxLength={20}
                onChange={(e) => {
                  cuidarInputMoeda(e);
                }}
              />
          <p className="novoClienteErroObjetivo">{erroParcela}</p>
            </label>
          </form>
        </section>
      </div>
    </>
  );
}
