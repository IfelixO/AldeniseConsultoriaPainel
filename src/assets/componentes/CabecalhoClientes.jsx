import { AiOutlineSearch } from "react-icons/ai";
import '../estilos/CabecalhoClientes.css'

export default function Cabecalho({ cuidarNovoClienteMostrar, setDefinePesquisa,setPesquisa }) {
  return (
    <>
      <h1 className="clientesCabecalhoTitulo">Lista de clientes</h1>
      <header className="clientesCabecalho">
        <button
          className="clientesCabecalhoNovoCliente"
          onClick={cuidarNovoClienteMostrar}
        >
          <p className="clientesCabecalhoNovoClienteTexto">Novo cliente</p>
        </button>
        <div className="cabecalhoPesquisa">
          <input
            type="search"
            className="cabecalhoPesquisaBarra"
            placeholder="Pesquisar um cliente por nome..."
            id="pesquisa"
            onChange={(e)=>setPesquisa(e.target.value)}
          />
          <AiOutlineSearch className="cabecalhoPesquisaIcone" onClick={()=>{setDefinePesquisa(true)}} />
        </div>
      </header>
    </>
  );
}
