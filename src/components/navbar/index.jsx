import { useNavigate } from "react-router-dom"

import logo from '../../assets/plano.png'
import {NavBarContainer} from './style.js'

const NavBar = () => {

    const navigate = useNavigate();
    const routeLogin = () => {
        navigate('/login')
    }
    const routeForm = () => {
        navigate('/formnutri')
    }
    const routeHome = () => {
        navigate('/')
    }

    return (
        <>
        <NavBarContainer>
            <div>
                <img src={logo} alt="Nutrition Logo" /> Nutrition
            </div>
            <div className='content'>
                <ul className='links'>
                    <li><a onClick={routeHome}>Home</a></li>
                    <li><a onClick={routeForm}>Formulário</a></li>
                    <li><a>Contato</a></li>
                </ul>
                <button onClick={routeLogin}>Login</button>
            </div>
        </NavBarContainer>
        </>
    )
}

export default NavBar