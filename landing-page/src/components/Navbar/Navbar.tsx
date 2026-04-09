//Barra de navagação fixa no topo da página
import Button from '../Button/Button';
import './style.css';

function showMessage(){
    alert('Realizar login');
}

function Navbar(){
    return(
        <nav className="navbar">

            <div className="container">
                <a href="#" className="logo">EduTrack</a>

                <ul className="list-menu">
                    <li><a className="link" href="#sobre">Sobre</a></li>
                    <li><a className="link" href="#funcionalidades">Funcionalidades</a></li>
                    <li><a className="link" href="#equipe">Equipe</a></li>
                    <li><a className="link" href="#contato">Contato</a></li>
                </ul>

                <div>
                    <Button border={false} filled={false} label='Login' onClick={showMessage} />
                    <Button border={true} filled={true} label='Começar agora' onClick={()=>{}} />
                </div>

            </div>

        </nav>
    );
}

export default Navbar;