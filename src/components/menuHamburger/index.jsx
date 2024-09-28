import { useState } from "react"
import { ContainerDiv, MenuButton } from "./style"
import { useNavigate } from "react-router-dom";

import x from '../../assets/x-regular-24.png'
import menu from '../../assets/menu-regular-24.png'

const MenuHamburger = () => {
    const [active, setActive] = useState(false);
    
    const navigate = useNavigate();
    const routeHome = () => {
        navigate('/')
    }
    const routeForm = () => {
        navigate('/formNutri')
    }
    const routeLogin = () => {
        navigate('/login')
    }

        function menuShow() {
            let menuMobile = document.querySelector('.mobile-menu');
            if (!menuMobile){

            }else{
                if (menuMobile.classList.contains('open')) {
                    menuMobile.classList.remove('open');
                } else {
                    menuMobile.classList.add('open');
                }
            }
        }

        return (
            <>
                <ContainerDiv>
                    <nav className="nav-bar">
                        <div onClick={() => {setActive(!active)}} className="mobile-menu-icon">
                            <button onClick={() => (menuShow())}> <img src={active ? x : menu}></img> </button>
                        </div>
                    </nav>
                    <div className="mobile-menu">
                        <ul className='links'>
                            <li><a onClick={routeHome}>Home</a></li>
                            <li><a onClick={routeForm}>Formulário</a></li>
                            <li><a>Contato</a></li>
                        </ul>
                        <MenuButton onClick={routeLogin}>Login</MenuButton>
                    </div>
                </ContainerDiv>
            </>
        )
}

export default MenuHamburger