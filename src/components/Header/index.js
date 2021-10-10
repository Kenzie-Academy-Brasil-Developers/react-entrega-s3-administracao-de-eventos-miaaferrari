import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { Container,Logo, Menu } from './style';

export const Header = () => {

    return(
        <Container>
            <Logo>
                <img src={logo} alt='Kenzinho'></img>
                <h1>Kenzinho Events</h1>
            </Logo>
            <Menu>
                <Link to='/'>Home</Link>
                <Link to='/wedding'>Wedding</Link>
                <Link to='/graduation'>Graduation</Link>
                <Link to='/confraternization'>Confra</Link>
                <Link to='#'>Contact</Link>
                <Link><FiFacebook /></Link>
                <Link><FiInstagram /></Link>
            </Menu>
        </Container>
    )
 }