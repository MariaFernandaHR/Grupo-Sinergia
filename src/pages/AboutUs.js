import construccion from '../app/assets/images/construccion.png';
import bullet from '../app/assets/images/bullet.png';
import line from '../app/assets/images/line.png';
import AboutUsDetails from '../features/AbousUsDetails';

const AboutUs = () => {
    return (
        <>
            <div className="about-us-container">
                <div className="about-us-content">
                    <div className="about-us-title">SOMOS PROFESIONALES</div>
                    <div className="about-us-heading">NOSOTROS</div>
                    <p className="about-us-paragraph">
                        DESDE NUESTRA FUNDACIÓN EN EL AÑO 2016, NOS ENFOCAMOS EN REALIZAR TRABAJOS DE PROCURA, INGENIERÍA, CONSTRUCCIÓN, SERVICIOS DE INSTRUMENTACIÓN Y MANTENIMIENTO MECÁNICO, PARA CLIENTES DE TODOS LOS SECTORES INDUSTRIALES, PÚBLICOS Y PRIVADOS.
                    </p>
                    <p className="about-us-paragraph">
                        GRUPO SINERGIA INDUSTRIAL, C.A., TIENE COMO OBJETIVO SER PERCIBIDA POR NUESTROS CLIENTES COMO UNA EMPRESA COMPROMETIDA CON LA PRESTACIÓN DE SERVICIOS Y EL SUMINISTRO DE PRODUCTOS, DE MANERA OPORTUNA Y EFICIENTE, TRANSPARENTE EN SU ACTUACIÓN Y COMPROMETIDA CON EL ENTORNO EN EL QUE DESARROLLA SU ACTIVIDAD, SIENDO INNOVADORA EN SUS PROCEDIMIENTOS.
                    </p>
                    <p className="about-us-paragraph">
                        NUESTRA EMPRESA CUENTA CON UN PERSONAL ALTAMENTE CALIFICADO, UNA INFRAESTRUCTURA ESPECIALIZADA Y LOS RECURSOS NECESARIOS PARA LLEVAR A FELIZ TERMINO LOS PROYECTOS A EJECUTAR.
                    </p>
                    <p className="about-us-paragraph">
                        TRABAJAMOS EN LA MEJORA CONTINUA DE NUESTROS PROCESOS PRODUCTIVOS, DESEMPEÑO AMBIENTAL Y TRABAJO SEGURO. IDENTIFICAMOS, EVALUAMOS Y CONTROLAMOS AQUELLOS ASPECTOS GENERADOS POR NUESTRAS ACTIVIDADES Y SERVICIOS QUE PUDIERAN CAUSAR UN IMPACTO EN EL MEDIO AMBIENTE Y EN LA SEGURIDAD INDUSTRIAL, Y LLEVAMOS A TÉRMINO, ACCIONES ENCAMINADAS A SU MITIGACIÓN Y CONTROL.
                    </p>
                </div>
                <img
                    src={construccion}
                    alt="construccion"
                    className="about-us-image"
                />
                <div className="about-us-highlight">
                    PERSONAL ALTAMENTE CALIFICADO, INFRAESTRUCTURA ESPECIALIZADA Y RECURSOS NECESARIOS
                    <img 
                        src={bullet}
                        alt='bullet'
                        className="bullet-image"
                    />
                    <img 
                        src={line}
                        alt='line'
                        className="line-image"
                    />
                </div>
            </div>
            <AboutUsDetails />
        </>
    );
};

export default AboutUs;