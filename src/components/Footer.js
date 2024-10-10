import logo from '../app/assets/images/logo.png'
import { NavLink } from 'react-router-dom';
import twitter from '../app/assets/images/twitter.png'
import instagram from '../app/assets/images/instagram.png'
import facebook from '../app/assets/images/facebook.png'
import logoMF from '../app/assets/images/LogoMF.png'

const Footer = () => {
    return (
        <div style={{
            backgroundColor:'#192541',
            padding:'20px 0',
        }}>
            <div style={{
                display: 'flex', 
                justifyContent: 'space-around', 
                alignItems: 'center',  
            }}>
                <div style={{
                    width: '30%',  
                    padding: '20px',
                    textAlign: 'center',
                    display:'flex',
                    flexDirection:'column'
                }}>
                    <img
                        alt='logo'
                        src={logo}
                        style={{width:'150px'}}
                    />
                    <div style={{fontFamily:'montserrat', marginTop:'2em', fontSize:'0.8rem', color:'white', textAlign:'left'}}>
                        gsi@gruposinergiaca.com
                    </div>
                    <a                         
                        className='btn btn-link'
                        href='tel:+584248148573'
                        style={{padding:0, textDecoration:'none', fontFamily:'montserrat', marginTop:'2em', fontSize:'0.8rem', color:'white', textAlign:'left'}}
                    >   
                        +58-424 - 8148573
                    </a>
                    <a                         
                        className='btn btn-link'
                        href='tel:+584142387954' 
                        style={{padding:0, textDecoration:'none', fontFamily:'montserrat', fontSize:'0.8rem', color:'white', textAlign:'left'}}
                    >
                        +58-414 - 2387954
                    </a>
                </div>
                <div style={{
                    width: '30%',
                    padding: '20px',
                    textAlign: 'center',
                    display:'flex',
                    flexDirection:'column'
                }}>
                    <div style={{fontWeight:'600', fontFamily:'montserrat', fontSize:'1rem', color:'white', textAlign:'center', marginBottom:'2em'}}>QUICK LINKS</div>
                    <NavLink                         
                        to='/' 
                        style={{padding:0, textDecoration:'none', fontFamily:'montserrat', fontSize:'0.8rem', color:'white', textAlign:'left'}}
                    >
                        INICIO
                    </NavLink>
                    <NavLink                         
                        to='/aboutus' 
                        style={{padding:0, textDecoration:'none', fontFamily:'montserrat', fontSize:'0.8rem', color:'white', textAlign:'left'}}
                    >
                        NOSOTROS
                    </NavLink>
                    <NavLink                         
                        to='/servicios' 
                        style={{padding:0, textDecoration:'none', fontFamily:'montserrat', fontSize:'0.8rem', color:'white', textAlign:'left'}}
                    >
                        PRODUCTOS
                    </NavLink>
                    <NavLink                         
                        to='/contact'  
                        style={{padding:0, textDecoration:'none', fontFamily:'montserrat', fontSize:'0.8rem', color:'white', textAlign:'left'}}
                    >
                        CONTÁCTANOS
                    </NavLink>
                    <NavLink                         
                        to='/findus' 
                        style={{padding:0, textDecoration:'none', fontFamily:'montserrat', fontSize:'0.8rem', color:'white', textAlign:'left'}}
                    >
                        ENCUENTRANOS
                    </NavLink>
                </div>
                <div style={{
                    width: '30%',
                    padding: '20px',
                    textAlign: 'center',
                    position:'relative',
                    top:'1em'
                }}>
                    <a
                        className='btn btn-link'
                        href='https://www.x.com'
                        role='button'
                        target='_blank' 
                        rel='noopener noreferrer' 
                    >
                        <img 
                            alt='twitter'
                            src={twitter}
                        />
                    </a>
                    <a
                        className='btn btn-link'
                        href='https://www.instagram.com'
                        role='button'
                        target='_blank' 
                        rel='noopener noreferrer' 
                    >
                        <img 
                            alt='instagram'
                            src={instagram}
                        />
                    </a>
                    <a
                        className='btn btn-link'
                        href='https://www.facebook.com'
                        role='button'
                        target='_blank' 
                        rel='noopener noreferrer' 
                    >
                        <img 
                            alt='facebook'
                            src={facebook}
                        />
                    </a>
                    <div style={{position:'relative', left:'1.2em', fontWeight:'400', fontFamily:'montserrat', fontSize:'1rem', color:'white', textAlign:'center'}}>
                        POWERED BY
                        <img
                            alt="logomf"
                            src={logoMF}
                            style={{width:'100px'}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;