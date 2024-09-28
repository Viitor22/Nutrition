import styled from "styled-components";
import { breakpoints } from "../../style";

export const Section = styled.section`
section {
    background-color: #c8e0b6;
    padding: 20px;

    @media (max-width: ${breakpoints.tablet}){
      display: flex; 
      jjustify-content: center;
    }
  }
  
  form {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;
    border-top: 6px solid #4b8f29;

    @media (max-width: ${breakpoints.tablet}){
      width: 400px;
    }
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #4b8f29;
  }
  
  h3 {
    font-size: 20px;
    color: #4b8f29;
    margin-bottom: 10px;
  }
  
  .grupoFormulario {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="number"],
  input[type="email"],
  input[type="tel"],
  input[type="date"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  input[type="radio"],
  input[type="checkbox"] {
    margin-right: 5px;

    @media (max-width: ${breakpoints.tablet}){
      margin-left: 20px;
    }
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4b8f29;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3e7a23; /* Mudança na cor do botão ao passar o mouse */
  }
  
  .cabecalho {
    background-color: #c8e0b6;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  
  .secao {
    margin-bottom: 30px;
  }

`
