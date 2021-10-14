import logo from '../../assets/logo.png';
import { FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, SocialMedias } from './style';

export const Footer = () => {

    return (
        <Container>
            <section>
                <div>
                    <img src={logo} alt='Kenzinho logo'></img>
                </div>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/wedding'>Wedding</Link>
                    <Link to='/graduation'>Graduation</Link>
                    <Link to='/confraternization'>Confra</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div>
                    <div><FiPhoneCall /><p>(99) 9876-9876</p></div>
                    <div><FiMail /><p>contact@kenzinhoevents.com.br</p></div>
                    <div>
                        <FiMapPin />
                        <p>Kenzie Street, 012, room 34
                        District, ZipCode: 56789-012
                        Kenzie City/KA</p>
                    </div>
                </div>
            </section>
            <SocialMedias>
                <Link to='#'><FiFacebook /></Link>
                <Link to='#'><FiInstagram /></Link>
            </SocialMedias>
            <span>2021 Copyright | All rights reserved | (99) 9876-9876 | contact@kenzinhoevents.com.br</span>
        </Container>
    )
}