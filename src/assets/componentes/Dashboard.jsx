import { useEffect, useState } from "react";
import "../estilos/Dashboard.css";
import termoInicial from "../img/termo_0.0.png";
import agulhaInicial from "../img/agulha_alerta.png";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Chart from "react-google-charts";
import termo0 from "../img/termo_0.0.png";
import termov from "../img/termo_0.6.png";
import termo1 from "../img/termo_1.6.png";
import termo2 from "../img/termo_2.6.png";
import termo3 from "../img/termo_3.6.png";
import termo4 from "../img/termo_4.6.png";
import termo5 from "../img/termo_5.6.png";
import termo6 from "../img/termo_6.6.png";
import agulha0 from "../img/agulha_alerta.png";
import agulha1 from "../img/agulha_muitoruim.png";
import agulha2 from "../img/agulha_ruim.png";
import agulha3 from "../img/agulha.png";
import agulha4 from "../img/agulha_boa.png";
import agulha5 from "../img/agulha_muitoboa.png";
import agulha6 from "../img/agulha_otima.png";
import api from "../services/api";
import { FaCheckCircle } from "react-icons/fa";

export default function Dashboard({ cuidarDashboardSair, cliente }) {
  const tubarao = JSON.parse(cliente.disc).tubarao;
  const gato = JSON.parse(cliente.disc).gato;
  const lobo = JSON.parse(cliente.disc).lobo;
  const aguia = JSON.parse(cliente.disc).aguia;

  const [entradasConst, setEntradasConst] = useState([]);
  const [progressaoMeta, setProgressaoMeta] = useState(0);
  const [finalMeta, setFinalMeta] = useState(0);
  const [porcentagemMeta, setPorcentagemMeta] = useState(0);
  const [completou, setCompletou] = useState(false);

  const [receita, setReceita] = useState(0);
  const [despesasConst, setDespesasConst] = useState([]);
  const [despesasConstNomes, setDespesasConstNomes] = useState([]);
  const [despesasConstValores, setDespesasConstValores] = useState([]);
  const [despesasSobra, setDespesasSobra] = useState([]);
  const [variavel, setVariavel] = useState(0);

  const [grafico, setGrafico] = useState(termo0);
  const [agulha, setAgulha] = useState();
  const [descricaoSaude, setDescricaoSaude] = useState(cliente.descricaoSaude);
  const [descricaoAnalise, setDescricaoAnalise] = useState(
    cliente.descricaoAnalise
  );
  const [confirmaA, setConfirmaA] = useState(false);
  const [confirmaS, setConfirmaS] = useState(false);
  const [renderiza, setRenderiza] = useState(true);

  const [anotacoesConst, setAnotacoesConst] = useState([]);
  const numAnotacoes = [1,2,3,4,5,6,7,8,9,10];
  const qtdAnotacoes = 10;

  function objetivoCompletado() {
    alert("Parabéns");
  }

  function cuidarDescricaoS() {
    let data = {
      id: cliente.id,
      descricaoSaude: descricaoSaude,
    };

    api
      .put("usuario/atualizar", data)
      .then((res) => {
        setConfirmaS(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function cuidarDescricaoA() {
    let data = {
      id: cliente.id,
      descricaoAnalise: descricaoAnalise,
    };

    api
      .put("usuario/atualizar", data)
      .then((res) => {
        setConfirmaA(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function listar() {
    let data = {
      id: cliente.id,
    };
    api
      .put("meta/listarADM", data)
      .then((resMe) => {
        let final = resMe.data.final.replace(".", "");
        final = final.replace("R$", "");
        final = Number(final.replace(",", "."));
        let inicial = resMe.data.inicial.replace(".", "");
        inicial = inicial.replace("R$", "");
        let soma = Number(inicial.replace(",", "."));
        setFinalMeta(resMe.data.final);
        api
          .put("progressao/listarADM", data)
          .then((resP) => {
            let conversaoP = Object.keys(resP.data).map((key) => {
              return [String(key), resP.data[key]];
            });
            let entradasArray = [];
            conversaoP.forEach((el, i) => {
              if (el[1] != "" && i > 1) entradasArray.push(el[1]);
            });
            let valores = entradasArray.map((el, i) => {
              let separacao;
              if (el != "") {
                separacao = el.split("-");
                return separacao[1];
              }
            });
            if (valores[0]) {
              valores.forEach((el, i) => {
                soma = soma + Number(el);
              });
            }
            setProgressaoMeta(
              soma.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            );
            if (soma / (final / 100) > 100) {
              setPorcentagemMeta(100);
              setCompletou(true);
            } else {
              setPorcentagemMeta(soma / (final / 100));
            }
            setEntradasConst(entradasArray);
            api
              .put("custos/listarADM", data)
              .then((resC) => {
                let conversaoC = Object.keys(resC.data).map((key) => {
                  return [String(key), resC.data[key]];
                });
                let custosArray = [];
                conversaoC.forEach((el, i) => {
                  if (el[1] != "" && el[1] != " - ") custosArray.push(el[1]);
                });
                let valores = [];
                custosArray.forEach((el, i) => {
                  let separacao;
                  if (i > 2) {
                    separacao = el.split("-");
                    let valor = separacao[1];
                    valor = valor.replace("R$", "");
                    valor = valor.replace(".", "");
                    valor = valor.replace(",", ".");
                    valores.push(Number(valor));
                  }
                });
                let somaDespesas = 0;
                valores.forEach((el, i) => {
                  somaDespesas = somaDespesas + el;
                });
                let nomes = [];
                custosArray.forEach((el, i) => {
                  if (i > 2) {
                    let separacao;
                    separacao = el.split("-");
                    nomes.push(separacao[0]);
                  }
                });

                let receitaL = custosArray.splice(2, 1);
                setReceita(receitaL);
                setDespesasConst(custosArray);
                setDespesasConstNomes(nomes);
                setDespesasConstValores(valores);

                api
                  .put("movimentacoes/listarADM", data)
                  .then((resMo) => {
                    let conversaoMo = Object.keys(resMo.data).map((key) => {
                      return [String(key), resMo.data[key]];
                    });
                    let movimentacoesArray = [];
                    conversaoMo.forEach((el, i) => {
                      if (el[1] != "" && el[1] != " - ")
                        movimentacoesArray.push(el[1]);
                    });
                    let valores = [];
                    movimentacoesArray.forEach((el, i) => {
                      if (i > 1) {
                        let separacao = el.split(" - ");
                        valores.push(Number(separacao[1]));
                      }
                    });
                    let soma = 0;
                    valores.forEach((el) => {
                      soma = soma + el;
                    });
                    somaDespesas = somaDespesas + soma;
                    let sobra = receitaL[0].replace("R$", "");
                    sobra = sobra.replace(".", "");
                    sobra = Number(sobra.replace(",", "."));
                    sobra = sobra - somaDespesas;
                    if (sobra > 0) {
                      setDespesasSobra(["Sobra", sobra]);
                    } else {
                      setDespesasSobra(["Sobra", 0]);
                    }
                    setVariavel(soma);

                    api
                      .put("anotacoes/listarADM", data)
                      .then((resA) => {
                        let conversaoA = Object.keys(resA.data).map((key) => {
                          return [String(key), resA.data[key]];
                        });
                        conversaoA.shift();
                        setAnotacoesConst(conversaoA);
                        setRenderiza(false);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((errC) => {
                console.log(errC);
              });
          })
          .catch((errP) => {
            console.log(errP);
          });
      })
      .catch((errMe) => {
        console.log(errMe);
      });
  }

  useEffect(() => {
    listar();
    switch (cliente.saude) {
      case "Alerta vermelho":
        setGrafico(termov);
        setAgulha(agulha0);
        {
          cliente.descricaoSaude == ""
            ? setDescricaoSaude(
                "Situação crítica! A beira de um colapso financeiro. Ciclo de fragilidade, estresse e desorganização financeira. Imediata necessidade de uma atitude de mudança total nos hábitos e relações!"
              )
            : null;
        }
        break;
      case "Muito baixa":
        setGrafico(termo1);
        setAgulha(agulha1);
        {
          cliente.descricaoSaude == ""
            ? setDescricaoSaude(
                "Risco de atingir a situação crítica. Presente numa espiral negativa de dívidas e gastos. Urgente necessidade de uma atitude de mudança ampla nos hábitos e relações!"
              )
            : null;
        }
        break;
      case "Baixa":
        setGrafico(termo2);
        setAgulha(agulha2);
        {
          cliente.descricaoSaude == ""
            ? setDescricaoSaude(
                "Situação desequilibrada. Sinais de irresponsabilidade e estresse financeiro emergente. Iminente necessidade de uma atitude de mudança parcial nos hábitos e relações."
              )
            : null;
        }
        break;
      case "Razoável":
        setGrafico(termo3);
        setAgulha(agulha3);
        {
          cliente.descricaoSaude == ""
            ? setDescricaoSaude(
                'Situação contida. Equilíbrio financeiro no limite, pouco espaço para erros e/ou "escapadas". Uma atitude de mudança em alguns hábitos é sugerida.'
              )
            : null;
        }
        break;
      case "Alta":
        setGrafico(termo4);
        setAgulha(agulha4);
        {
          cliente.descricaoSaude == ""
            ? setDescricaoSaude(
                "Situação bem equilibrada. Básico sendo bem feito, pouca sobra no fim do mês. Uma atitude de revisão nos hábitos atuais e planejamento futuro a curto e médio prazo é sugerida."
              )
            : null;
        }
        break;
      case "Muito alta":
        setGrafico(termo5);
        setAgulha(agulha5);
        {
          cliente.descricaoSaude == ""
            ? setDescricaoSaude(
                "Situação favorável! Domínio completo sobre o cotidiano. A construção do patrimônio a longo prazo se faz necessária para a melhora constante!"
              )
            : null;
        }
        break;
      case "Excelente":
        setGrafico(termo6);
        setAgulha(agulha6);
        {
          cliente.descricaoSaude == ""
            ? setDescricaoSaude(
                "Situação admirável! Vida financeira sem estresse. As finanças proporcionam liberdade e segurança. O investimento em sua herança se mostra relevante!"
              )
            : null;
        }
        break;
    }
    if (cliente.descricaoAnalise == "") {
      setDescricaoAnalise(
        "Cada pessoa tem um perfil predominante que influencia seu comportamento. Baseado no teste DISC, o teste descobre a metáfora (águia, gato, lobo ou tubarão) que ilustra como você tem a tendência de se comportar!"
      );
    }
  }, []);

  return (
    <section className="dashboardTela">
      <button className="dashboardVoltar" onClick={cuidarDashboardSair}>
        <MdOutlineKeyboardBackspace className="dashboardVoltarIcone" />
        Voltar
      </button>
      <h1 className="dashboardTitulo">Cliente {cliente.nome} </h1>
      {renderiza ? (
        <section className="dashboardSkeleton">
          <div className="dashboardSkeletonColuna"></div>
          <div className="dashboardSkeletonColuna"></div>
          <div className="dashboardSkeletonColuna"></div>
          <div className="dashboardSkeletonColuna"></div>
        </section>
      ) : (
        <section className="dashboardConteinter">
          <section className="dashboard">
            <div className="dashboardColuna">
              <h2 className="dashboardColunaTitulo">Análise Comportamental</h2>
              <div className="dashboardGraficoPizza">
                <Chart
                  width={"250px"}
                  height={"250px"}
                  chartType="PieChart"
                  data={[
                    ["Gráfico", "DISC"],
                    ["Tubarão", tubarao],
                    ["Gato", gato],
                    ["Lobo", lobo],
                    ["Águia", aguia],
                  ]}
                  options={{ legend: "none" }}
                />
              </div>

              <div className="dashboardAnaliseGraficoDado">
                <div className="dashboardAnaliseGraficoDadoCorTubarao"></div>
                <p className="dashboardAnaliseGraficoDadoTitulo">Tubarão:</p>
                <p className="dashboardAnaliseGraficoDadoPorc">{tubarao}%</p>
              </div>
              <div className="dashboardAnaliseGraficoDado">
                <div className="dashboardAnaliseGraficoDadoCorGato"></div>
                <p className="dashboardAnaliseGraficoDadoTitulo">Gato:</p>
                <p className="dashboardAnaliseGraficoDadoPorc">{gato}%</p>
              </div>
              <div className="dashboardAnaliseGraficoDado">
                <div className="dashboardAnaliseGraficoDadoCorLobo"></div>
                <p className="dashboardAnaliseGraficoDadoTitulo">Lobo:</p>
                <p className="dashboardAnaliseGraficoDadoPorc">{lobo}%</p>
              </div>
              <div className="dashboardAnaliseGraficoDado">
                <div className="dashboardAnaliseGraficoDadoCorAguia"></div>
                <p className="dashboardAnaliseGraficoDadoTitulo">Águia:</p>
                <p className="dashboardAnaliseGraficoDadoPorc">{aguia}%</p>
              </div>
              <textarea
                type="text"
                className="dashboardDescricao"
                cols={25}
                rows={15}
                maxLength={255}
                placeholder={descricaoAnalise}
                onChange={(e) => setDescricaoAnalise(e.target.value)}
              />
              <div className="dashboardBotao">
                <button
                  className="dashboardDescricaoEnviar"
                  onClick={cuidarDescricaoA}
                >
                  Enviar descrição nova
                </button>
                {confirmaA ? (
                  <FaCheckCircle
                    color="green"
                    size={20}
                    className="dashboardDescricaoCheck"
                  />
                ) : null}
              </div>
            </div>
            <div className="dashboardColuna">
              <h2 className="dashboardColunaTitulo">Objetivo</h2>
              <p className="dashboardObjetivoProgressao">
                {progressaoMeta} // {finalMeta}
              </p>
              <div className="dashboardObjetivoGrafico">
                <div className="dashboardObjetivoGraficoFundo">
                  <div
                    className="dashboardObjetivoGraficoProgressao"
                    style={{ width: porcentagemMeta + "%" }}
                  ></div>
                </div>
                <p className="dashboardObjetivoGraficoLegenda">
                  {porcentagemMeta.toFixed(2)} %
                </p>
              </div>
              {entradasConst.map((el, i) => {
                if (i > 0 && el != "" && el) {
                  let separacao = el.split(" - ");
                  let valor = Number(separacao[1]).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  });
                  return (
                    <div key={i} className="dashboardObjetivoParcela">
                      <p className="dashboardObjetivoParcelaValor">{valor}</p>
                      <p className="dashboardObjetivoParcelaData">
                        {separacao[0]}
                      </p>
                    </div>
                  );
                }
              })}
              {completou ? (
                <button
                  className="dashboradObjetivoCompletouBotao"
                  onClick={objetivoCompletado}
                >
                  Objetivo completado!
                </button>
              ) : null}
            </div>
            <div className="dashboardColuna">
              <h2 className="dashboardColunaTitulo">Mapa de custos</h2>
              <div className="dashboardGraficoPizza">
                <Chart
                  width={"300px"}
                  height={"300px"}
                  chartType="PieChart"
                  data={[
                    ["Gráfico", "Mapa de Custos"],
                    ["Despesa variável", variavel],
                    [despesasConstNomes[0], despesasConstValores[0]],
                    [despesasConstNomes[1], despesasConstValores[1]],
                    [despesasConstNomes[2], despesasConstValores[2]],
                    [despesasConstNomes[3], despesasConstValores[3]],
                    [despesasConstNomes[4], despesasConstValores[4]],
                    [despesasConstNomes[5], despesasConstValores[5]],
                    [despesasConstNomes[6], despesasConstValores[6]],
                    [despesasConstNomes[7], despesasConstValores[7]],
                    [despesasConstNomes[8], despesasConstValores[8]],
                    [despesasConstNomes[9], despesasConstValores[9]],
                    [despesasConstNomes[10], despesasConstValores[10]],
                    [despesasConstNomes[11], despesasConstValores[11]],
                    [despesasConstNomes[12], despesasConstValores[12]],
                    [despesasConstNomes[13], despesasConstValores[13]],
                    [despesasConstNomes[14], despesasConstValores[14]],
                    [despesasSobra[0], despesasSobra[1]],
                  ]}
                  options={{ legend: "none" }}
                />
              </div>
              <div className="dashboardMapaRenda">
                <p className="dashboardMapaRendaTitulo">Renda mensal</p>
                <p className="dashboardMapaRendaValor">{receita}</p>
              </div>
              <div className="dashboardMapaDespesa">
                <div className="dashboardMapaDespesaCor" id="cor1"></div>
                <p className="dashboardMapaDespesaTitulo">Despesa variável</p>
                <p className="dashboardMapaDespesaValor">
                  {variavel.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              {despesasConst.map((el, i) => {
                if (i > 1) {
                  let id = "cor" + i;
                  let separacao = el.split(" - ");
                  return (
                    <div key={i} className="dashboardMapaDespesa">
                      <div className="dashboardMapaDespesaCor" id={id}></div>
                      <p className="dashboardMapaDespesaTitulo">
                        {separacao[0]}
                      </p>
                      <p className="dashboardMapaDespesaValor">
                        {separacao[1]}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
            <div className="dashboardColuna" id="colunaSaude">
              <h2 className="dashboardColunaTitulo">Saúde financeira</h2>
              <div className="dashboardColunaSaudeGrafico">
                <img src={grafico} alt="" className="dashboardGraficoSaude" />
                <img
                  src={agulha}
                  alt=""
                  title="Saúde Financeira"
                  className="dashboardGraficoSaudeAgulha"
                />
              </div>
              <textarea
                type="text"
                className="dashboardDescricao"
                cols={25}
                rows={15}
                maxLength={255}
                placeholder={descricaoSaude}
                onChange={(e) => setDescricaoSaude(e.target.value)}
              />

              <div className="dashboardBotao">
                <button
                  className="dashboardDescricaoEnviar"
                  onClick={cuidarDescricaoS}
                >
                  Enviar descrição nova
                </button>
                {confirmaS ? (
                  <FaCheckCircle
                    color="green"
                    size={20}
                    className="dashboardDescricaoCheck"
                  />
                ) : null}
              </div>
            </div>
          </section>
          <section className="dashboardAnotacoes">
            <h2 className="dashboardAnotacoesTitulo">Anotações</h2>

            {numAnotacoes.map((el, i) => {
              let indexTitulo = el + qtdAnotacoes
              let indexTexto = el 
              let indexData = el + qtdAnotacoes + qtdAnotacoes
              let titulo = anotacoesConst[indexTitulo] 
              let texto = anotacoesConst[indexTexto] 
              let data = anotacoesConst[indexData] 
              if(titulo[1] != '')

              return (
                <div className="dashboardAnotacoesNota" key={i}>
                  <h3 className="dashboardAnotacoesNotaTitulo">{titulo[1]}</h3>
                  <p className="dashboardAnotacoesNotaTexto">
                    {texto[1]}
                  </p>
                </div>
              );
              
            })}
          </section>
        </section>
      )}
    </section>
  );
}
