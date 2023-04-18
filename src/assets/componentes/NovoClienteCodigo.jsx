import { useEffect } from "react";
import "../estilos/NovoClienteCodigo.css";
import { Chart } from "react-google-charts";
import { useState } from "react";
import termo0 from "../img/termo_0.0.png";
import termov from "../img/termo_0.6.png";
import termo1 from "../img/termo_1.6.png";
import termo2 from "../img/termo_2.6.png";
import termo3 from "../img/termo_3.6.png";
import termo4 from "../img/termo_4.6.png";
import termo5 from "../img/termo_5.6.png";
import termo6 from "../img/termo_6.6.png";


export default function NovoClienteCodigo({
  codigo,
  valoresPessoais,
  valoresAnalise,
  estadoSaude,
}) {
  const [grafico, setGrafico] = useState(termo0);

  useEffect(() => {
    switch (estadoSaude) {
      case "Alerta vermelho":
        setGrafico(termov);
        break;
      case "Muito baixa":
        setGrafico(termo1);
        break;
      case "Baixa":
        setGrafico(termo2);
        break;
      case "Razoável":
        setGrafico(termo3);
        break;
      case "Alta":
        setGrafico(termo4);
        break;
      case "Muito alta":
        setGrafico(termo5);
        break;
      case "Excelente":
        setGrafico(termo6);
        break;
    }
  }, []);

  return (
    <section className="novoClienteCodigoTela">
      <h2 className="novoClienteCodigoTitulo">Resumo</h2>
      <section className="novoClienteCodigoDados">
        <p className="novoClienteCodigoLabel">Nome:</p>
        <p className="novoClienteCodigoValor">{valoresPessoais.nome}</p>
        <p className="novoClienteCodigoLabel">E-mail:</p>
        <p className="novoClienteCodigoValor">{valoresPessoais.email}</p>
        <p className="novoClienteCodigoLabel">Telefone:</p>
        <p className="novoClienteCodigoValor">{valoresPessoais.telefone}</p>
      </section>
      <section className="novoClienteCodigoAnalise">
        <Chart
          width={"200px"}
          height={"200px"}
          chartType="PieChart"
          data={[
            ["Gráfico", "DISC"],
            ["Tubarão", valoresAnalise.tubarao],
            ["Gato", valoresAnalise.gato],
            ["Lobo", valoresAnalise.lobo],
            ["Águia", valoresAnalise.aguia],
          ]}
          options={{ legend: "none" }}
        />
        <div className="novoClienteCodigoAnaliseLegenda">
          <div className="novoClienteCodigoAnaliseLegendaTubarao"></div>
          <p className="novoClienteCodigoAnaliseLegendaNome">Tubarão</p>
          <div className="novoClienteCodigoAnaliseLegendaGato"></div>
          <p className="novoClienteCodigoAnaliseLegendaNome">Gato</p>
          <div className="novoClienteCodigoAnaliseLegendaLobo"></div>
          <p className="novoClienteCodigoAnaliseLegendaNome">Lobo</p>
          <div className="novoClienteCodigoAnaliseLegendaAguia"></div>
          <p className="novoClienteCodigoAnaliseLegendaNome">Águia</p>
        </div>
      </section>
      <section className="novoClienteCodigoSaude">
        <p className="novoClienteCodigoLabelSaude">Saúde financeira:</p>
        <p className="novoClienteCodigoValorSaude">{estadoSaude}</p>
        <img
          className="novoClienteCodigoGrafico"
          src={grafico}
          alt="Saúde financeira"
          title="Saúde financeira"
        />
      </section>
      <section className="novoClienteCodigoFooter">
        <p className="novoClienteCodigoLabel">Código do cliente:</p>
        <p className="novoClienteCodigoCodigo">{codigo}</p>
      </section>
    </section>
  );
}
