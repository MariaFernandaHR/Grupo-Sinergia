import logo from '../app/assets/images/logo.png';
import { useState } from 'react';
import {
    Navbar,
    NavbarToggler,
    Collapse,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
} from 'reactstrap';
import { Link } from 'react-scroll';

const CustomNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Navbar
                style={{
                    height: '100px',
                    background: 'linear-gradient(to right, #182542, #303E64)',
                    position: 'fixed',
                    width: '100%',
                    padding: '0 15px', 
                }}
                sticky='top'
                expand='md'
                className='container-fluid'
            >
                <NavbarBrand className='ms-5' href='/'>
                    <img
                        src={logo}
                        alt='sinergia logo'
                        style={{ width: '200px', height: 'auto' }}
                        className='me-5'
                    />
                </NavbarBrand>
                <NavbarToggler
                    onClick={toggle}
                    style={{
                        backgroundColor: 'white',
                        opacity:'60%',
                        border: 'none',
                        padding: '10px', 
                        borderRadius: '5px', 
                    }}
                />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='me-auto' navbar>
                        <NavItem>
                            <Link
                                className='nav-link'
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                            >
                                INICIO
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className='nav-link'
                                to="aboutus"
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                            >
                                NOSOTROS
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className='nav-link'
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                            >
                                PRODUCTOS Y SERVICIOS
                            </Link>
                        </NavItem>
                    </Nav>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        className="d-none d-md-block"
                        style={{ marginRight: '30px', textDecoration: 'none' }}
                    >
                        <Button
                            className="d-md-block"
                            style={{
                                fontFamily: 'montserrat',
                                backgroundColor: '#F07C1B',
                                border: 'none', 
                                marginRight: '30px'
                            }}
                        >
                            CONTÁCTANOS
                        </Button>
                    </Link>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default CustomNavBar;