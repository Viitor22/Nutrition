import { useNavigate } from "react-router-dom"

import { Section } from './style.ts';

function FormNutri() {
    const navigate = useNavigate();
    const routeHome = () => {
        navigate('/')
    }

    return (
        <Section>
        <form>
            <div className="secao">
            <h2>Ficha de Anamnese Nutricional</h2>
            <h3 className="cabecalho">Dados Pessoais</h3>
            <div className="grupoFormulario">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required/>
            </div>
            <div className="grupoFormulario">
                <label for="data_nascimento">Data de Nascimento:</label>
                <input type="date" id="data_nascimento" name="data_nascimento" required/>
            </div>
            <div className="grupoFormulario">
                <label for="idade">Idade:</label>
                <input type="number" id="idade" name="idade" required/>
            </div>
            <div className="grupoFormulario">
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required/>
            </div>
            <div className="grupoFormulario">
                <label for="bairro">Bairro:</label>
                <input type="text" id="bairro" name="bairro" required/>
            </div>
            <div className="grupoFormulario">
                <label for="complemento">Complemento:</label>
                <input type="text" id="complemento" name="complemento"/>
            </div>
            <div className="grupoFormulario">
                <label for="cidade_uf">Cidade/UF:</label>
                <input type="text" id="cidade_uf" name="cidade_uf" required/>
            </div>
            <div className="grupoFormulario">
                <label for="celular_wpp">Celular/Wpp:</label>
                <input type="tel" id="celular_wpp" name="celular_wpp" required/>
            </div>
            <div className="grupoFormulario">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="grupoFormulario">
                <label for="ocupacao">Ocupação:</label>
                <input type="text" id="ocupacao" name="ocupacao" required/>
            </div>
        </div>

    <div className="secao">
        <h3 className="cabecalho">Histórico Clínico e Nutricional</h3>
        <div className="grupoFormulario">
            <label>Motivo da consulta:</label>
            <input type="text" id="motivo_consulta" name="motivo_consulta" required/>
        </div>
        <div className="grupoFormulario">
            <label>Já fez consulta nutricional?</label>
            <input type="radio" id="consulta_sim" name="consulta_nutricional" value="sim"/> Sim
            <input type="radio" id="consulta_nao" name="consulta_nutricional" value="nao"/> Não
        </div>
        <div className="grupoFormulario">
            <label>Alergia alimentar?</label>
            <input type="radio" id="alergia_nao" name="alergia" value="nao"/> Não
            <input type="radio" id="alergia_sim" name="alergia" value="sim"/> Sim. Qual?
            <input type="text" id="detalhe_alergia" name="detalhe_alergia"/>
        </div>
        <div className="grupoFormulario">
            <label for="cirurgias">Cirurgias:</label>
            <input type="text" id="cirurgias" name="cirurgias"/>
        </div>
        <div className="grupoFormulario">
            <label for="medicamentos">Uso de medicamentos:</label>
            <input type="text" id="medicamentos" name="medicamentos"/>
        </div>
        <div className="grupoFormulario">
            <label>Tabagismo:</label>
            <input type="checkbox" id="tabagismo" name="tabagismo"/>
            <label>Etílismo:</label>
            <input type="checkbox" id="etilismo" name="etilismo"/>
        </div>
        <div className="grupoFormulario">
            <label>Ritmo intestinal:</label>
            <input type="checkbox" id="normal" name="ritmo_intestinal"/> Normal
            <input type="checkbox" id="constipacao" name="ritmo_intestinal"/> Constipado
            <input type="checkbox" id="diarreia" name="ritmo_intestinal"/> Diarreia
        </div>
        <div className="grupoFormulario">
            <label for="doencas">Diabetes, Hipertensão, Ansiedade:</label>
            <input type="text" id="doencas" name="doencas"/>
        </div>
        <div className="grupoFormulario">
            <label for="local_refeicoes">Local das refeições:</label>
            <input type="text" id="local_refeicoes" name="local_refeicoes"/>
        </div>
        <div className="grupoFormulario">
            <label for="atividade_fisica">Atividade física:</label>
            <input type="text" id="atividade_fisica" name="atividade_fisica"/>
        </div>
        <div className="grupoFormulario">
            <label for="horas_sono">Dorme quantas horas por dia?</label>
            <input type="number" id="horas_sono" name="horas_sono"/>
        </div>
    </div>

    <div className="secao">
        <h3 className="cabecalho">Dados Antropométricos</h3>
        <div className="grupoFormulario">
            <label for="peso">Peso atual (kg):</label>
            <input type="number" id="peso" name="peso" step="0.01"/>
        </div>
        <div className="grupoFormulario">
            <label for="altura">Altura (m):</label>
            <input type="number" id="altura" name="altura" step="0.01"/>
        </div>
        <div className="grupoFormulario">
            <label for="imc">IMC (kg/m²):</label>
            <input type="number" id="imc" name="imc" step="0.01"/>
        </div>
        <div className="grupoFormulario">
            <label for="classNameificacao_imc">ClassNaclassNameificação IMC:</label>
            <input type="text" id="classNameificacao_imc" name="classNameificacao_imc"/>
        </div>
        <div className="grupoFormulario">
            <label for="circunferencia_cintura">Circunferência da cintura (cm):</label>
            <input type="number" id="circunferencia_cintura" name="circunferencia_cintura" step="0.01"/>
        </div>
        <div className="grupoFormulario">
            <label for="circunferencia_quadril">Circunferência do quadril (cm):</label>
            <input type="number" id="circunferencia_quadril" name="circunferencia_quadril" step="0.01"/>
        </div>
        <div className="grupoFormulario">
            <label for="rcq">RCQ:</label>
            <input type="number" id="rcq" name="rcq" step="0.01"/>
        </div>
        <div className="grupoFormulario">
            <label for="classNameificacao_rcq">ClassNaclassNameificação RCQ:</label>
            <input type="text" id="classNameificacao_rcq" name="classNameificacao_rcq"/>
        </div>
    </div>

    <button type="submit" onClick={routeHome}>Enviar</button>
    </form>
    </Section>
    );
}

export default FormNutri;
