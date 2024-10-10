import Banda from '../features/Banda';
import Procura from '../app/assets/images/Procura.png';
import Civil from '../app/assets/images/Civil.png';
import Mecanica from '../app/assets/images/Mecanica.png';
import Instrumentacion from '../app/assets/images/Instrumentacion.png';
import Vector1 from '../app/assets/images/Vector 1.png';
import Vector2 from '../app/assets/images/Vector 2.png';
import Vector3 from '../app/assets/images/Vector 3.png';

const Services = () => {
    return (
        <>
            <Banda />
            <div style={{ textAlign: 'center', marginTop:'15em' }} className="about-us-title">NUESTRA ESPECIALIDAD
                <div style={{ textAlign: 'center', marginTop: '0.5em', marginBottom: '1em' }} className="about-us-heading">PRODUCTOS Y SERVICIOS</div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '20px 90px',
                flexWrap: 'wrap' 
            }}>
                <div className="service-card">
                    <img alt='procura' src={Procura} style={{ height: '7em', width: '7em' }} />
                    <img alt='Vector1' src={Vector1} className="service-vector" style={{ height: '4em', width: '12em', position:'absolute', top:'5em', left:'10em'  }} />
                    <div className="service-title">PROCURA</div>
                    <div className="service-description">
                        Nuestro equipo especializado en gestión de procura es la base de la ejecución exitosa de un proyectos. Contamos con una red global de proveedores y socios estratégicos, lo que nos permite asegurar la disponibilidad oportuna de materiales y servicios críticos para cada proyecto.
                    </div>
                </div>
                <div className="service-card">
                    <img alt='Civil' src={Civil} style={{ height: '7em', width: '7em' }} />
                    <img alt='Vector2' src={Vector2} className="service-vector" style={{ height: '4em', width: '12em', position:'absolute', left:'15em', top:'6em'}} />
                    <div className="service-title">DISCIPLINA CIVIL</div>
                    <div className="service-description">
                        Servicios de construcción en las áreas civiles (movimiento de tierra, relleno y compactación, excavación, armado de acero de refuerzo, encofrado, vaciado de concreto, fabricación y montaje de estructuras metálicas y pavimentación, remodelaciones de edificaciones, recuperación de infraestructuras, etc.)
                    </div>
                </div>
                <div className="service-card">
                    <img alt='Mecanica' src={Mecanica} style={{ height: '7em', width: '7em' }} />
                    <img alt='Vector3' src={Vector3} className="service-vector" style={{ height: '5em', width: '10em', position:'absolute', top:'27em', left:'13em' }} />
                    <div className="service-title">DISCIPLINA MECÁNICA</div>
                    <div className="service-description">
                        Ofrecemos suministro, construcción y montaje de sistemas mecánicos industriales, así como mantenimiento mecánico integral, que incluye mantenimiento preventivo, correctivo y predictivo. También realizamos proyectos mecánicos llave en mano, fabricación, instalación y soldadura de spools, montaje y mantenimiento de equipos estáticos y dinámicos.
                    </div>
                </div>
            </div>
            <div className="instrumentacion">
                <img alt='Instrumentacion' src={Instrumentacion}/>
                <div style={{
                    fontFamily: 'montserrat',
                    fontSize: '1.2em',
                    fontWeight: 500,
                    color: '#182542',
                    textAlign: 'start',
                    marginRight: '2.5em'
                }}>
                    INSTRUMENTACION Y CONTROL
                </div>
                <div style={{
                    fontFamily: 'montserrat',
                    fontSize: '1em',
                    fontWeight: 200,
                    textAlign: 'justify',
                    marginLeft: '1em',
                    marginTop: '2em',
                }}>
                    Instalación de cables y conexionado de equipos en salas de control y campo, Calibración en laboratorio de instrumentación y equipos de instrumentación de campo, calibración en sitio de instrumentos de campo y sistemas de analizadores, pruebas eléctricas de megado, continuidad y punto a punto de lazos para los sistemas de instrumentación y control, pruebas hidrostáticas para instalaciones de instrumentos en campo, pruebas de lazos de instrumentos, pruebas de secuencia de equipos relacionados con sistemas de instrumentación y control, asistencia en arranques de planta, incluyendo recalibración, pruebas eléctricas, de lazo, de secuencia, hidrostática, desconexión de equipos, reparación de instrumentos, modificaciones a los arreglos existentes, trabajos de instalaciones de instrumentos, Conduit, tubing, entonación de lazos u otros.
                </div>
            </div>
        </>
    );
};

export default Services;