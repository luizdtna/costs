import { Link} from 'react-router-dom'
import logo from '../../img/costs_logo.png'
import styles from './Navbar.module.css'
import Container from './Container'


const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt='Costs'></img>    
                </Link> 
                <ul className={styles.list}>
                    <li>
                        <Link to="/contact">Contato</Link> 
                    </li>
                    <li>
                        <Link to="/project">Projeto</Link> 
                    </li>
                    <li>
                        <Link to="/newproject">Novo Projeto</Link> 
                    </li>
                    <li>
                        <Link to="/company">Compania</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )

}

export default Navbar