import { useState } from "react";
import "../estilos/NovoClienteFinanceiros.css";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

export default function NovoClienteFinanceiros({
  setValoresFinanceiros,
  erroDespesas,
  erroReceita,
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
        <div className="novoClienteFinanceirosDiv">
          <label className="novoClienteFormLabelFin">
            Despesa 1
            <input
              required
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="tituloDespesa1"
              name="tituloDespesa1"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
          </label>
          <label className="novoClienteFormLabelFin">
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta" />
            Valor
            <input
              required
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="valorDespesa1"
              name="valorDespesa1"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </label>
        </div>
        <div className="novoClienteFinanceirosDiv">
          <label className="novoClienteFormLabelFin">
            Despesa 2
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="tituloDespesa2"
              name="tituloDespesa2"
              form="financeiros"
              tabIndex={3}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
          </label>
          <label className="novoClienteFormLabelFin">
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta" />
            Valor
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="valorDespesa2"
              name="valorDespesa2"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </label>
        </div>
        <div className="novoClienteFinanceirosDiv">
          <label className="novoClienteFormLabelFin">
            Despesa 3
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="tituloDespesa3"
              name="tituloDespesa3"
              form="financeiros"
              tabIndex={4}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
          </label>

          <label className="novoClienteFormLabelFin">
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta" />
            Valor
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="valorDespesa3"
              name="valorDespesa3"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </label>
        </div>
        <div className="novoClienteFinanceirosDiv">
          <label className="novoClienteFormLabelFin">
            Despesa 4
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="tituloDespesa4"
              name="tituloDespesa4"
              form="financeiros"
              tabIndex={4}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
          </label>
          <label className="novoClienteFormLabelFin">
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta" />
            Valor
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="valorDespesa4"
              name="valorDespesa4"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </label>
        </div>
        <div className="novoClienteFinanceirosDiv">
          <label className="novoClienteFormLabelFin">
            Despesa 5
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="tituloDespesa5"
              name="tituloDespesa5"
              form="financeiros"
              tabIndex={4}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
          </label>
          <label className="novoClienteFormLabelFin">
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta" />
            Valor
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="valorDespesa5"
              name="valorDespesa5"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </label>
        </div>
        <div className="novoClienteFinanceirosDiv">
          <label className="novoClienteFormLabelFin">
            Despesa 6
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="tituloDespesa6"
              name="tituloDespesa6"
              form="financeiros"
              tabIndex={4}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
          </label>
          <label className="novoClienteFormLabelFin">
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta" />
            Valor
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="valorDespesa6"
              name="valorDespesa6"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </label>
        </div>
        <div className="novoClienteFinanceirosDiv">
          <label className="novoClienteFormLabelFin">
            Despesa 7
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="tituloDespesa7"
              name="tituloDespesa7"
              form="financeiros"
              tabIndex={4}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
          </label>
          <label className="novoClienteFormLabelFin">
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta" />
            Valor
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="valorDespesa7"
              name="valorDespesa7"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </label>
        </div>
        <div className="novoClienteFinanceirosDiv">
          <label className="novoClienteFormLabelFin">
            Despesa 8
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="tituloDespesa8"
              name="tituloDespesa8"
              form="financeiros"
              tabIndex={4}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
          </label>
          <label className="novoClienteFormLabelFin">
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta" />
            Valor
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="valorDespesa8"
              name="valorDespesa8"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </label>
        </div>
        <div className="novoClienteFinanceirosDiv">
          <label className="novoClienteFormLabelFin">
            Despesa 9
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="tituloDespesa9"
              name="tituloDespesa9"
              form="financeiros"
              tabIndex={4}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
          </label>

          <label className="novoClienteFormLabelFin">
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta" />
            Valor
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="valorDespesa9"
              name="valorDespesa9"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </label>
        </div>
        <div className="novoClienteFinanceirosDiv">
          <label className="novoClienteFormLabelFin">
            Despesa 10
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="tituloDespesa10"
              name="tituloDespesa10"
              form="financeiros"
              tabIndex={4}
              maxLength={20}
              onChange={(e) => {
                cuidarInsercaoDados(e);
              }}
            />
          </label>

          <label className="novoClienteFormLabelFin">
            <TbArrowBigRightLinesFilled className="novoClienteFormSeta" />
            Valor
            <input
              type="text"
              className="novoClienteFinanceirosFormInput"
              id="valorDespesa10"
              name="valorDespesa10"
              form="financeiros"
              tabIndex={2}
              maxLength={20}
              onChange={(e) => {
                cuidarInputMoeda(e);
              }}
            />
          </label>
        </div>
        <p className="novoClienteErroFinanceirosDespesas">{erroDespesas}</p>
      </form>
    </section>
  );
}
