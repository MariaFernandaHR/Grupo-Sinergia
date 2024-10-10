import edificio from '../app/assets/images/edificio.png'; 

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="header-text">
                    <div className="header-title">GRUPO</div>
                    <div className="header-subtitle">SINERGIA</div>
                    <div className="header-subtitle">INDUSTRIAL</div>
                    <div className="header-rif">RIF: J-408524805</div>
                </div>

                <img 
                    src={edificio} 
                    alt='edificio' 
                    className="header-image" 
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