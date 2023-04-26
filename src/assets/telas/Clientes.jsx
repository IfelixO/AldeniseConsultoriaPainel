import { useState } from "react";
import "../estilos/Clientes.css";
import Menu from "../componentes/Menu";
import Cabecalho from "../componentes/CabecalhoClientes";
import Tabela from "../componentes/TabelaClientes";
import NovoCliente from "../componentes/NovoCliente";
import Dashboard from "../componentes/Dashboard";

export default function Clientes() {
  const [addVisibilidade, setAddVisibilidade] = useState(false);
  const [dashboardVisibilidade, setDashboardVisibilidade] = useState(false);
  const [cliente, setCliente] = useState();

  const [pesquisa, setPesquisa] = useState('');
  const [definirPesquisa, setDefinePesquisa] = useState(false);

  const [atualiza, setAtualiza] = useState(false);


  function cuidarNovoClienteMostrar() {
    setAddVisibilidade(true);
  }

  function cuidarNovoClienteEsconder() {
    setAddVisibilidade(false);
    setAtualiza(true)
  }

  function cuidarDashboardEntrar(el) {
    setCliente(el);
    setDashboardVisibilidade(true);
  }

  function cuidarDashboardSair() {
    setDashboardVisibilidade(false);
  }

  function cuidarPesquisa() {

  }

  return (
    <section className="clientesTela">
      <Menu />
      <section className="clientesConteudo">
        {addVisibilidade ? (
          <NovoCliente setAtualiza={setAtualiza} cuidarNovoClienteEsconder={cuidarNovoClienteEsconder} />
          ) : null}
        {dashboardVisibilidade ? (
          <Dashboard
          cliente={cliente}
          cuidarDashboardSair={cuidarDashboardSair}
          />
        ) : (
          <>
            <Cabecalho setDefinePesquisa={setDefinePesquisa} setPesquisa={setPesquisa} cuidarNovoClienteMostrar={cuidarNovoClienteMostrar} />
            <Tabela atualiza={atualiza} pesquisa={pesquisa} definirPesquisa={definirPesquisa} cuidarDashboardEntrar={cuidarDashboardEntrar} />
          </>
        )}
      </section>
      {/* <div className="clientesFundo"></div> */}
    </section>
  );
}
