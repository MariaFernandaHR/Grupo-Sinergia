import edificio from '../app/assets/images/edificio.png'; 

const Header = () => {
    return (
        <>
            <div style={{ 
                background: 'linear-gradient(to right, #182542, #303E64)', 
                display: 'flex', 
                alignItems: 'flex-start', 
                padding: '50px 0',
                position: 'relative', 
                minHeight: '100vh',
            }}>
                <div style={{ 
                    paddingLeft: '150px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'flex-start',
                    zIndex: 5 
                }}>
                    <div style={{ 
                        fontFamily: 'montserrat, sans-serif', 
                        fontSize: '5rem', 
                        fontWeight: 200, 
                        color: 'white',
                        marginTop:'200px'
                    }}>
                        GRUPO
                    </div>
                    <div style={{ 
                        fontFamily: 'montserrat, sans-serif', 
                        fontSize: '5rem', 
                        fontWeight: 200, 
                        color: 'white', 
                        lineHeight: 0.5 
                    }}>
                        SINERGIA
                    </div>
                    <div style={{ 
                        fontFamily: 'montserrat, sans-serif', 
                        fontSize: '5rem', 
                        fontWeight: 200, 
                        color: 'white' 
                    }}>
                        INDUSTRIAL
                    </div>
                    <div style={{ 
                        fontFamily: 'montserrat, sans-serif', 
                        fontSize: '1rem', 
                        fontWeight: 400, 
                        color: '#F07C1B' 
                    }}>
                        RIF: J-408524805
                    </div>
                </div>

                <img 
                    src={edificio} 
                    alt='edificio' 
                    style={{ 
                        position: 'absolute', 
                        right: '0', 
                        bottom: '-135px', 
                        width: 'auto', 
                        height: '800px', 
                        zIndex: 4, 
                        objectFit: 'cover',
                        opacity:0.7
                    }} 
                />
            </div>
            <div style={{ 
                background: 'white', 
                display: 'flex', 
                alignItems: 'flex-start', 
                minHeight: '40px',
                position: 'relative',
                zIndex: 3 
            }}> 
            </div>
        </>
    );
};

export default Header;