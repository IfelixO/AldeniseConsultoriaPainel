import logo from "../img/logo.png";
import '../estilos/Menu.css'

export default function Menu() {
  return (
    <aside className="clientesMenu">
      <img
        src={logo}
        alt="Aldenise Consultoria Pessoal"
        title="Aldenise Consultoria Pessoal"
        className="clientesLogo"
      />
      <div className="clientesMenuNav">
        <div className="clientesMenuNavDiv">
          <a href="/Clientes" className="clientesMenuNavItem">
            Clientes
          </a>
          <a href="https://www.personalidades.mobi/Perfil_Comportamental/" className="clientesMenuNavItem">
            Análise comportamental
          </a>
          {/* <a href="" className="clientesMenuNavItem">
            Provérbios
          </a> */}
        </div>
        <div className="clientesMenuNavDiv">
          {/* <a href="" className="clientesMenuNavItem">
            Configurações
          </a> */}
          <a
            href="mailto:ifelixl.oliveira@gmail.com"
            className="clientesMenuNavItem"
          >
            Suporte
          </a>
          <a href="/" className="clientesMenuNavItem">
            Sair
          </a>
        </div>
      </div>
    </aside>
  );
}
