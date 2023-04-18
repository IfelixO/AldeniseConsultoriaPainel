import { useState } from "react";
import NovoClientePessoaisAnaliseObjetivo from "./NovoClientePessoaisAnaliseObjetivo";
import NovoClienteFinanceiros from "./NovoClienteFinanceiros";
import NovoClienteCodigo from "./NovoClienteCodigo";
import "../estilos/NovoCliente.css";
import api from "../services/api";

export default function NovoCliente({ cuidarNovoClienteEsconder }) {
  const [pag, setPag] = useState(1);
  const [codigo, setCodigo] = useState("");
  const [valoresPessoais, setValoresPessoais] = useState({});
  const [valoresAnalise, setValoresAnalise] = useState({});
  const [valoresObjetivo, setValoresObjetivo] = useState({});
  const [valoresFinanceiros, setValoresFinanceiros] = useState({
    tituloDespesa10: "",
    valorDespesa10: "",
    tituloDespesa2: "",
    valorDespesa2: "",
    tituloDespesa3: "",
    valorDespesa3: "",
    tituloDespesa4: "",
    valorDespesa4: "",
    tituloDespesa5: "",
    valorDespesa5: "",
    tituloDespesa6: "",
    valorDespesa6: "",
    tituloDespesa7: "",
    valorDespesa7: "",
    tituloDespesa8: "",
    valorDespesa8: "",
    tituloDespesa9: "",
    valorDespesa9: "",
  });
  const [erroNome, setErroNome] = useState(null);
  const [erroTelefone, setErroTelefone] = useState(null);
  const [erroEmail, setErroEmail] = useState(null);
  const [erroOcupacao, setErroOcupacao] = useState(null);
  const [erroGrafico, setErroGrafico] = useState(null);
  const [erroTitulo, setErroTitulo] = useState(null);
  const [erroMotivacao, setErroMotivacao] = useState(null);
  const [erroFinal, setErroFinal] = useState(null);
  const [erroInicial, setErroInicial] = useState(null);
  const [erroParcela, setErroParcela] = useState(null);
  const [erroReceita, setErroReceita] = useState(null);
  const [erroDespesas, setErroDespesas] = useState(null);
  const [estadoSaude, setEstado] = useState();

  function transformarMoeda(el) {
    let valor = el.replace("R$ ", "");
    valor = valor.replace(".", "");
    valor = valor.replace(",", ".");
    return valor;
  }

  function calcularSaude() {
    let soma = 0;
    let receita = Number(transformarMoeda(valoresFinanceiros.receita));
    let despesa1 = transformarMoeda(valoresFinanceiros.valorDespesa1);
    let despesa2 = transformarMoeda(valoresFinanceiros.valorDespesa2);
    let despesa3 = transformarMoeda(valoresFinanceiros.valorDespesa3);
    let despesa4 = transformarMoeda(valoresFinanceiros.valorDespesa4);
    let despesa5 = transformarMoeda(valoresFinanceiros.valorDespesa5);
    let despesa6 = transformarMoeda(valoresFinanceiros.valorDespesa6);
    let despesa7 = transformarMoeda(valoresFinanceiros.valorDespesa7);
    let despesa8 = transformarMoeda(valoresFinanceiros.valorDespesa8);
    let despesa9 = transformarMoeda(valoresFinanceiros.valorDespesa9);
    let despesa10 = transformarMoeda(valoresFinanceiros.valorDespesa10);
    {
      Number(despesa1) ? (soma = soma + Number(despesa1)) : null;
    }
    {
      Number(despesa2) ? (soma = soma + Number(despesa2)) : null;
    }
    {
      Number(despesa3) ? (soma = soma + Number(despesa3)) : null;
    }
    {
      Number(despesa4) ? (soma = soma + Number(despesa4)) : null;
    }
    {
      Number(despesa5) ? (soma = soma + Number(despesa5)) : null;
    }
    {
      Number(despesa6) ? (soma = soma + Number(despesa6)) : null;
    }
    {
      Number(despesa7) ? (soma = soma + Number(despesa7)) : null;
    }
    {
      Number(despesa8) ? (soma = soma + Number(despesa8)) : null;
    }
    {
      Number(despesa9) ? (soma = soma + Number(despesa9)) : null;
    }
    {
      Number(despesa10) ? (soma = soma + Number(despesa10)) : null;
    }
    let porc = soma / (receita / 100);
    let estado  
    if (porc > 85) {
      estado = "Alerta vermelho"
    }
    if (porc >= 70 && porc < 85) {
      estado = "Muito baixa"
    }
    if (porc >= 55 && porc < 70) {
      estado = "Baixa"
    }
    if (porc >= 40 && porc < 55) {
      estado = "Razoável"
    }
    if (porc >= 25 && porc < 40) {
      estado = "Alta"
    }
    if (porc >= 10 && porc < 25) {
      estado = "Muito alta"
    }
    if (porc <= 10) {
      estado = "Excelente"
    }
    setEstado(estado)
    return estado
  }

  const cuidarProxima = () => {
    let erro = false;
    if (valoresObjetivo.motivacao) {
      setErroMotivacao(null);
    } else {
      erro = true;
      setErroMotivacao("Preencha a motivação corretamente");
    }
    if (valoresPessoais.nome) {
      setErroNome(null);
    } else {
      erro = true;
      setErroNome("Preencha o nome corretamente");
    }
    if (valoresPessoais.telefone) {
      setErroTelefone(null);
    } else {
      erro = true;
      setErroTelefone("Preencha o telefone corretamente");
    }
    if (valoresPessoais.email) {
      setErroEmail(null);
    } else {
      erro = true;
      setErroEmail("Preencha o e-mail corretamente");
    }

    if (valoresPessoais.ocupacao) {
      setErroOcupacao(null);
    } else {
      erro = true;
      setErroOcupacao("Preencha a ocupação corretamente");
    }
    if (
      valoresAnalise.tubarao ||
      valoresAnalise.gato ||
      valoresAnalise.lobo ||
      valoresAnalise.aguia
    ) {
      setErroGrafico(null);
    } else {
      erro = true;
      setErroGrafico("Preencha os valores corretamente");
    }
    if (valoresObjetivo.titulo) {
      setErroTitulo(null);
    } else {
      erro = true;
      setErroTitulo("Preencha o título correntamente");
    }
    if (valoresObjetivo.valorFinal) {
      setErroFinal(null);
    } else {
      erro = true;
      setErroFinal("Preencha o valor final correntamente");
    }
    if (valoresObjetivo.valorInicial) {
      setErroInicial(null);
    } else {
      erro = true;
      setErroInicial("Preencha o valor inicial correntamente");
    }
    if (valoresObjetivo.valorParcela) {
      setErroParcela(null);
    } else {
      erro = true;
      setErroParcela("Preencha o valor da parcela correntamente");
    }
    if (!erro) {
      setPag(2);
    }
  };

  const cuidarAddCliente = () => {
    let erro = false;
    let despesa1 = false;
    let despesa2 = false;
    let despesa3 = false;
    let despesa4 = false;
    let despesa5 = false;
    let despesa6 = false;
    let despesa7 = false;
    let despesa8 = false;
    let despesa9 = false;
    let despesa10 = false;

    if (valoresFinanceiros.receita) {
      setErroReceita(null);
    } else {
      erro = true;
      setErroReceita("Preencha um valor de receita válido");
    }
    if (valoresFinanceiros.tituloDespesa1 && valoresFinanceiros.valorDespesa1) {
      despesa1 = true;
    }
    if (valoresFinanceiros.tituloDespesa2 && valoresFinanceiros.valorDespesa2) {
      despesa2 = true;
    }
    if (valoresFinanceiros.tituloDespesa3 && valoresFinanceiros.valorDespesa3) {
      despesa3 = true;
    }
    if (valoresFinanceiros.tituloDespesa4 && valoresFinanceiros.valorDespesa4) {
      despesa4 = true;
    }
    if (valoresFinanceiros.tituloDespesa5 && valoresFinanceiros.valorDespesa5) {
      despesa5 = true;
    }
    if (valoresFinanceiros.tituloDespesa6 && valoresFinanceiros.valorDespesa6) {
      despesa6 = true;
    }
    if (valoresFinanceiros.tituloDespesa7 && valoresFinanceiros.valorDespesa7) {
      despesa7 = true;
    }
    if (valoresFinanceiros.tituloDespesa8 && valoresFinanceiros.valorDespesa8) {
      despesa8 = true;
    }
    if (valoresFinanceiros.tituloDespesa9 && valoresFinanceiros.valorDespesa9) {
      despesa9 = true;
    }
    if (
      valoresFinanceiros.tituloDespesa10 &&
      valoresFinanceiros.valorDespesa10
    ) {
      despesa10 = true;
    }
    if (
      despesa1 ||
      despesa2 ||
      despesa3 ||
      despesa4 ||
      despesa5 ||
      despesa6 ||
      despesa7 ||
      despesa8 ||
      despesa9 ||
      despesa10
    ) {
      setErroDespesas(null);
    } else {
      erro = true;
      setErroDespesas("Preencha ao menos uma despesa");
    }

    if (!erro) {
      
      let dataUsuario = {
        nome: valoresPessoais.nome,
        email: valoresPessoais.email,
        telefone: valoresPessoais.telefone,
        ocupacao: valoresPessoais.ocupacao,
        disc: JSON.stringify(valoresAnalise),
        saude: calcularSaude()
      };
      api
        .post("usuario/adicionar", dataUsuario)
        .then((resU) => {
          let idObj = { id: resU.data.id };
          setCodigo(resU.data.codigo);
          let dataCustos = {
            id: idObj.id,
            receita: valoresFinanceiros.receita,
            despesa1:
              valoresFinanceiros.tituloDespesa1 +
              " - " +
              valoresFinanceiros.valorDespesa1,
            despesa2:
              valoresFinanceiros.tituloDespesa2 +
              " - " +
              valoresFinanceiros.valorDespesa2,
            despesa3:
              valoresFinanceiros.tituloDespesa3 +
              " - " +
              valoresFinanceiros.valorDespesa3,
            despesa4:
              valoresFinanceiros.tituloDespesa4 +
              " - " +
              valoresFinanceiros.valorDespesa4,
            despesa5:
              valoresFinanceiros.tituloDespesa5 +
              " - " +
              valoresFinanceiros.valorDespesa5,
            despesa6:
              valoresFinanceiros.tituloDespesa6 +
              " - " +
              valoresFinanceiros.valorDespesa6,
            despesa7:
              valoresFinanceiros.tituloDespesa7 +
              " - " +
              valoresFinanceiros.valorDespesa7,
            despesa8:
              valoresFinanceiros.tituloDespesa8 +
              " - " +
              valoresFinanceiros.valorDespesa8,
            despesa9:
              valoresFinanceiros.tituloDespesa9 +
              " - " +
              valoresFinanceiros.valorDespesa9,
            despesa10:
              valoresFinanceiros.tituloDespesa10 +
              " - " +
              valoresFinanceiros.valorDespesa10,
          };
          let dataMeta ={
            id: idObj.id,
            titulo: valoresObjetivo.titulo,
            motivacao: valoresObjetivo.motivacao,
            final: valoresObjetivo.valorFinal,
            inicial: valoresObjetivo.valorInicial,
            parcela: valoresObjetivo.valorParcela,
          }
          api
            .post("custos/adicionarADM", dataCustos)
            .then((resC) => {
              api
                .post("progressao/adicionarADM", idObj)
                .then((resP) => {
                  api
                    .post("meta/adicionarADM", dataMeta)
                    .then((resMe) => {
                      api
                        .post("movimentacoes/adicionarADM", idObj)
                        .then((resMo) => {
                          setPag(3);
                        })
                        .catch((errMo) => {
                          console.log(errMo);
                        });
                    })
                    .catch((errMe) => {
                      console.log(errMe);
                    });
                })
                .catch((errP) => {
                  console.log(errP);
                });
            })
            .catch((errC) => {
              console.log(errC);
            });
        })
        .catch((errU) => {
          console.log(errU);
        });
    }
  };

  return (
    <section className="novoClienteTela">
      <section
        className="novoClienteFundo"
        onClick={cuidarNovoClienteEsconder}
      ></section>
      <section className="novoClienteModal">
        <header className="novoClienteCabecalho">
          <h1 className="novoClienteCabecalhoTitulo">Adicionar novo cliente</h1>
        </header>
        {pag == 1 ? (
          <NovoClientePessoaisAnaliseObjetivo
            erroNome={erroNome}
            erroTelefone={erroTelefone}
            erroEmail={erroEmail}
            erroOcupacao={erroOcupacao}
            erroGrafico={erroGrafico}
            erroTitulo={erroTitulo}
            erroFinal={erroFinal}
            erroInicial={erroInicial}
            erroParcela={erroParcela}
            erroMotivacao={erroMotivacao}
            setValoresPessoais={setValoresPessoais}
            setValoresObjetivo={setValoresObjetivo}
            setValoresAnalise={setValoresAnalise}
          />
        ) : null}
        {pag == 2 ? (
          <NovoClienteFinanceiros
            setValoresFinanceiros={setValoresFinanceiros}
            erroReceita={erroReceita}
            erroDespesas={erroDespesas}
          />
        ) : null}
        {pag == 3 ? (
          <NovoClienteCodigo
            codigo={codigo}
            valoresPessoais={valoresPessoais}
            valoresObjetivo={valoresObjetivo}
            valoresAnalise={valoresAnalise}
            valoresFinanceiros={valoresFinanceiros}
            estadoSaude={estadoSaude}
          />
        ) : null}

        <section className="novoClienteBotoes">
          {pag != 3 ? (
            <button
              className="novoClienteBotoesCancelar"
              onClick={cuidarNovoClienteEsconder}
            >
              Cancelar
            </button>
          ) : null}
          {pag == 1 ? (
            <button
              type="submit"
              className="novoClienteBotoesBotao"
              onClick={cuidarProxima}
            >
              Próximo
            </button>
          ) : null}
          {pag == 2 ? (
            <button
              className="novoClienteBotoesBotao"
              onClick={cuidarAddCliente}
            >
              Adicionar
            </button>
          ) : null}

          {pag == 3 ? (
            <button
              className="novoClienteBotoesBotao"
              onClick={cuidarNovoClienteEsconder}
            >
              Confirmar
            </button>
          ) : null}
        </section>
      </section>
    </section>
  );
}
