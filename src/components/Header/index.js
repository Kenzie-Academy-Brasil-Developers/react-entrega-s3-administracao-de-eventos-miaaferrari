import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { Container,Logo, Menu } from './style';
import { useContext } from 'react';
import { WeddingContext } from '../../providers/wedding';
import { GraduationContext } from '../../providers/graduation';
import { ConfraContext } from '../../providers/confra';

export const Header = () => {

    const { wedding } = useContext(WeddingContext);
    const { graduation } = useContext(GraduationContext);
    const { confra } = useContext(ConfraContext);
 
    return(
        <Container>
            <Logo>
                <img src={logo} alt='Kenzinho'></img>
                <h1>Kenzinho Events</h1>
            </Logo>
            <Menu>
                <Link to='/'>Home</Link>
                <Link to='/wedding'>Wedding<span>{wedding.length}</span></Link>
                <Link to='/graduation'>Graduation<span>{graduation.length}</span></Link>
                <Link to='/confraternization'>Confra<span>{confra.length}</span></Link>
                <Link to='/contact'>Contact</Link>
                <Link to='#'><FiFacebook /></Link>
                <Link to='#'><FiInstagram /></Link>
            </Menu>
        </Container>
    )
 }