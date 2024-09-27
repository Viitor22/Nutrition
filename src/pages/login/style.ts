import styled from "styled-components";
import background from '../../assets/imagem.jpg'

export const LoginContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 90vh;
background-image: url(${background});
background-size: cover;
background-position: center;

.container{
    width: 500px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.5);
    padding: 40px;
    border-radius: 10px;
}

.container h1{
    text-align: center;
    font-size: 40px;
    color: white;

}

.container .input-field {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px auto;
}

.input-field input{
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    font-size: 15px;
    color: white;
    padding: 20px 30px;
}

.input-field input::placeholder{
    color: white;
}

.input-field .icon{
    position: absolute;
    right: 15px;
    top: 33%;
    transform: translate(-50%);
    font-size: 18px;
    color: white;
}

.container .recall-forget {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    margin: -15px 0 15px;
}

.recall-forget label {
    color: white;
}

.recall-forget input {
    margin-right: 5px;
}

.recall-forget a,
.signup-link p a {
    color: white;
    text-decoration: none;
}

.recall-forget a:hover,
.signup-link a:hover {
    text-decoration: underline;
}

.container button{
    width: 100%;
    height: 50px;
    background-color: white;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    text-shadow: none;
}

.container .signup-link {
    font-size: 15px;
    text-align: center;
    margin: 20px 0 15px;
    text-shadow: none;
}
`



