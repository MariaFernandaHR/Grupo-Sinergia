import ImagenBanda from '../app/assets/images/Banda.png'; // Asegúrate de que la ruta sea correcta

const Banda = () => {
    return (
        <div style={{
            backgroundImage: `url(${ImagenBanda})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            position: 'relative',
            top:'10em',
            height: '400px', 
            color: 'white', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            textAlign: 'center' 
        }}>
            <h1 style={{
                fontFamily:'montserrat',
                fontWeight:'400',
                fontSize:'3rem',
                letterSpacing:'2px'
            }}>
                APOSTAMOS AL DESARROLLO DEL PAÍS
            </h1>
            <p style={{
                fontFamily:'montserrat',
                fontWeight:'400',
                fontSize:'1rem',
                color:'#F07C1B',
                letterSpacing:'3px',
                marginTop:'1em'
            }}>
                CADA ESTRUCTURA QUE CONSTRUIMOS ES MÁS QUE ACERO Y CONCRETO
            </p>
        </div>
    );
};

export default Banda;