import { useState } from "react";
import "../estilos/NovoClienteFinanceiros.css";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

export default function NovoClienteFinanceiros({
  setValoresFinanceiros,
  erroDespesas,
  erroReceita,
  cuidarAddCliente,
}) {
  const cuidarInsercaoDados = (e) => {
    setValoresFinanceiros((prev) => ({
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
    cuidarInsercaoDados(e);
    return e;
  };

  return (
    <section className="novoClienteFinanceiros">
      <h2 className="novoClienteFormTitulo">Dados financeiros</h2>
      <form className="novoClienteFinanceirosForm" id="financeiros">
        <label className="novoClienteFormLabelFin">
          Receita mensal
          <input
            type="text"
            className="novoClienteFinanceirosFormInputReceita"
            id="receita"
            name="receita"
            form="financeiros"
            tabIndex={1}
            maxLength={20}
            onChange={(e) => {
              cuidarInputMoeda(e);
            }}
          />
          <p className="novoClienteErroFinanceirosReceita">{erroReceita}</p>
        </label>
        <div className="novoClienteFinanceirosTabela">
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 1</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa1"
              name="tituloDespesa1"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa1"
              name="valorDespesa1"
              form="financeiros"
              tabIndex={3}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 2</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa2"
              name="tituloDespesa2"
              form="financeiros"
              tabIndex={4}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa2"
              name="valorDespesa2"
              form="financeiros"
              tabIndex={5}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 3</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa3"
              name="tituloDespesa3"
              form="financeiros"
              tabIndex={6}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa3"
              name="valorDespesa3"
              form="financeiros"
              tabIndex={7}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 4</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa4"
              name="tituloDespesa4"
              form="financeiros"
              tabIndex={8}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa4"
              name="valorDespesa4"
              form="financeiros"
              tabIndex={9}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 5</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa5"
              name="tituloDespesa5"
              form="financeiros"
              tabIndex={10}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa5"
              name="valorDespesa5"
              form="financeiros"
              tabIndex={11}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 6</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa6"
              name="tituloDespesa6"
              form="financeiros"
              tabIndex={12}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa6"
              name="valorDespesa6"
              form="financeiros"
              tabIndex={13}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 7</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa7"
              name="tituloDespesa7"
              form="financeiros"
              tabIndex={14}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa7"
              name="valorDespesa7"
              form="financeiros"
              tabIndex={15}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 8</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa8"
              name="tituloDespesa8"
              form="financeiros"
              tabIndex={16}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa8"
              name="valorDespesa8"
              form="financeiros"
              tabIndex={17}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 9</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa9"
              name="tituloDespesa9"
              form="financeiros"
              tabIndex={18}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa9"
              name="valorDespesa9"
              form="financeiros"
              tabIndex={19}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 10</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa10"
              name="tituloDespesa10"
              form="financeiros"
              tabIndex={20}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa10"
              name="valorDespesa10"
              form="financeiros"
              tabIndex={21}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 11</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa11"
              name="tituloDespesa11"
              form="financeiros"
              tabIndex={22}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa11"
              name="valorDespesa11"
              form="financeiros"
              tabIndex={23}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 12</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa12"
              name="tituloDespesa12"
              form="financeiros"
              tabIndex={24}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa12"
              name="valorDespesa12"
              form="financeiros"
              tabIndex={24}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 13</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa13"
              name="tituloDespesa13"
              form="financeiros"
              tabIndex={26}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa13"
              name="valorDespesa13"
              form="financeiros"
              tabIndex={27}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 14</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa14"
              name="tituloDespesa14"
              form="financeiros"
              tabIndex={28}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa14"
              name="valorDespesa14"
              form="financeiros"
              tabIndex={28}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
          <div className="novoClienteFinanceirosDiv2">
            <p className="novoClienteFinanceirosLabel2">Despesa 15</p>
            <input
              type="text"
              placeholder="Nome"
              className="novoClienteFinanceirosFormInput2"
              id="tituloDespesa15"
              name="tituloDespesa15"
              form="financeiros"
              tabIndex={30}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta2" />
            <input
              type="text"
              placeholder="Valor"
              className="novoClienteFinanceirosFormInput3"
              id="valorDespesa15"
              name="valorDespesa15"
              form="financeiros"
              tabIndex={30}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </div>
        </div>

        <p className="novoClienteErroFinanceirosDespesas">{erroDespesas}</p>
      </form>
      <div className="botao">
        <button
          type="submit"
          className="novoClienteFBotoesBotao"
          onClick={cuidarAddCliente}
        >
          Próximo
        </button>
      </div>
    </section>
  );
}
