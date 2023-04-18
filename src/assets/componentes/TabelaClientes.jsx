import { MdDashboard } from "react-icons/md";
import { TbMenuOrder } from "react-icons/tb";
import "../estilos/TabelaClientes.css";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Tabela({
  cuidarDashboardEntrar,
  pesquisa,
  definirPesquisa,
}) {
  const [usuarios, setUsuarios] = useState([]);

  function listar() {
    api
      .get("usuario/listar")
      .then((res) => {
        setUsuarios(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <table className="clientesTabela">
      <thead className="clientesTabelaCabecalho">
        <tr>
          <th className="clientesTabelaCabecalhoItem">
            Nome
            <TbMenuOrder className="clientesTabelaCabecalhoItemOrdenar" />
          </th>
          <th className="clientesTabelaCabecalhoItem">
            E-mail
            <TbMenuOrder
              className="clientesTabelaCabecalhoItemOrdenar"
              id="ordem-email"
            />
          </th>
          <th className="clientesTabelaCabecalhoItem">
            Telefone
            <TbMenuOrder
              className="clientesTabelaCabecalhoItemOrdenar"
              id="ordem-telefone"
            />
          </th>
          <th className="clientesTabelaCabecalhoItem">
            Saúde financeira
            <TbMenuOrder
              className="clientesTabelaCabecalhoItemOrdenar"
              id="ordem-ocupacao"
            />
          </th>
          <th className="clientesTabelaCabecalhoAcoes">Dashboard</th>
        </tr>
      </thead>
      <tbody className="clientesTabelaCorpo">
        {usuarios.map((el, i) => {
          if (definirPesquisa) {
            if (el.nome.startsWith(pesquisa)) {
              return (
                <tr key={i}>
                  <td className="clientesTabelaCorpoItem">{el.nome}</td>
                  <td className="clientesTabelaCorpoItem">{el.email}</td>
                  <td className="clientesTabelaCorpoItem">{el.telefone} </td>
                  <td className="clientesTabelaCorpoItem">{el.saude} </td>
                  <td className="clientesTabelaCorpoAcoes">
                    <MdDashboard
                      className="clientesTabelaCorpoAcoesBt"
                      onClick={() => {
                        cuidarDashboardEntrar(el);
                      }}
                    />
                  </td>
                </tr>
              );
            }
          } else {
            return (
              <tr key={i}>
                <td className="clientesTabelaCorpoItem">{el.nome}</td>
                <td className="clientesTabelaCorpoItem">{el.email}</td>
                <td className="clientesTabelaCorpoItem">{el.telefone} </td>
                <td className="clientesTabelaCorpoItem">{el.saude} </td>
                <td className="clientesTabelaCorpoAcoes">
                  <MdDashboard
                    className="clientesTabelaCorpoAcoesBt"
                    onClick={() => {
                      cuidarDashboardEntrar(el);
                    }}
                  />
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}
