import { Card, CardBody, CardImg, CardText, CardGroup, CardTitle, UncontrolledPopover, PopoverBody } from "reactstrap";
import Mision from '../app/assets/images/Mision.png';
import Vision from '../app/assets/images/Vision.png';
import Valores from '../app/assets/images/Valores.png';
import boton from '../app/assets/images/boton.png';

const AboutUsDetails = () => {
    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '0.5em' }} className="about-us-title">TRABAJAMOS EN SINERGIA</div>
            <div style={{ textAlign: 'center', marginBottom: '1em' }} className="about-us-heading">MISIÓN, VISIÓN Y VALORES</div>

            <CardGroup className="about-us-card-group" style={{ gap: '1em', justifyContent: 'center', flexWrap: 'wrap' }}> 
                <Card className="about-us-card" style={{ boxShadow: '0 0px 50px rgba(0, 0, 0, 0.1)', width: '20em' }}>
                    <CardImg
                        alt="Mision"
                        src={Mision}
                        top
                        style={{ height: '10em', objectFit: 'contain', marginTop: '1em' }}
                    />
                    <CardBody>
                        <CardTitle style={{ fontFamily: 'montserrat', textAlign: 'start', fontSize: '1.3rem', fontWeight: '500', marginBottom: '1em' }}>
                            MISIÓN
                        </CardTitle>
                        <CardText style={{ textAlign: 'justify', fontFamily: 'montserrat', fontWeight: '300', display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            Proveer a nuestros clientes con las mejores tecnologías, equipos / materiales y servicios del mundo a través de los proyectos emprendidos, utilizando nuestra experiencia, para que los proyectos de los clientes sean exitosos.
                        </CardText>
                        <hr />
                        <div style={{ fontFamily: 'montserrat', color: '#F07C1B', fontWeight: '600', textAlign: 'start', marginLeft: '1em' }}>
                            FindOutMore
                            <img
                                src={boton}
                                alt='boton'
                                className="find-out-more"
                                id='UncontrolledPopover1'
                            />
                            <UncontrolledPopover placement="bottom" target="UncontrolledPopover1" trigger='click'>
                                <PopoverBody style={{ textAlign: 'justify' }}>
                                    Proveer a nuestros clientes con las mejores tecnologías, equipos / materiales y servicios del mundo a través de los proyectos emprendidos, utilizando nuestra experiencia, para que los proyectos de los clientes sean exitosos.
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                    </CardBody>
                </Card>

                <Card className="about-us-card" style={{ boxShadow: '0 0px 50px rgba(0, 0, 0, 0.1)', width: '20em' }}>
                    <CardImg
                        alt="Vision"
                        src={Vision}
                        top
                        style={{ height: '10em', objectFit: 'contain', marginTop: '1em' }}
                    />
                    <CardBody>
                        <CardTitle style={{ fontFamily: 'montserrat', textAlign: 'start', fontSize: '1.3rem', fontWeight: '500', marginBottom: '1em' }}>
                            VISIÓN
                        </CardTitle>
                        <CardText style={{ textAlign: 'justify', fontFamily: 'montserrat', fontWeight: '300', display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            GRUPO SINERGIA INDUSTRIAL, C.A., una Corporación Nacional de Servicios de Ingeniería, Procura, Mantenimiento y Construcción con objeto de llegar a ser reconocida como una Empresa de altos estándares de calidad y desempeño, a través de innovaciones consistentes y la aplicación de nuevas tecnologías con el fin beneficiar a sus clientes, inversores, empleados y la sociedad.
                        </CardText>
                        <hr />
                        <div style={{ fontFamily: 'montserrat', color: '#F07C1B', fontWeight: '600', textAlign: 'start', marginLeft: '1em' }}>
                            FindOutMore
                            <img
                                src={boton}
                                alt='boton'
                                className="find-out-more"
                                id='UncontrolledPopover2'
                            />
                            <UncontrolledPopover placement="bottom" target="UncontrolledPopover2" trigger='click'>
                                <PopoverBody style={{ textAlign: 'justify' }}>
                                    GRUPO SINERGIA INDUSTRIAL, C.A., una Corporación Nacional de Servicios de Ingeniería, Procura, Mantenimiento y Construcción con objeto de llegar a ser reconocida como una Empresa de altos estándares de calidad y desempeño, a través de innovaciones consistentes y la aplicación de nuevas tecnologías con el fin beneficiar a sus clientes, inversores, empleados y la sociedad.
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                    </CardBody>
                </Card>

                <Card className="about-us-card" style={{ boxShadow: '0 0px 50px rgba(0, 0, 0, 0.1)', width: '20em' }}>
                    <CardImg
                        alt='Valores'
                        src={Valores}
                        top
                        style={{ height: '10em', objectFit: 'contain', marginTop: '1em' }}
                    />
                    <CardBody>
                        <CardTitle style={{ fontFamily: 'montserrat', textAlign: 'start', fontSize: '1.3rem', fontWeight: '500', marginBottom: '1em' }}>
                            VALORES
                        </CardTitle>
                        <CardText style={{ textAlign: 'justify', fontFamily: 'montserrat', fontWeight: '300', display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            Algunos de los valores que nos definen son la calidad, la disciplina, la eficiencia y la honestidad. Estos principios no solo orientan nuestras acciones cotidianas, sino que también constituyen la base sobre la cual desarrollamos nuestras relaciones y proyectos.
                        </CardText>
                        <hr />
                        <div style={{ fontFamily: 'montserrat', color: '#F07C1B', fontWeight: '600', textAlign: 'start', marginLeft: '1em' }}>
                            FindOutMore
                            <img
                                src={boton}
                                alt='boton'
                                className="find-out-more"
                                id='UncontrolledPopover3'
                            />
                            <UncontrolledPopover placement="bottom" target="UncontrolledPopover3" trigger='click'>
                                <PopoverBody style={{ textAlign: 'justify' }}>
                                    Algunos de los valores que nos definen son la calidad, la disciplina, la eficiencia y la honestidad. Estos principios no solo orientan nuestras acciones cotidianas, sino que también constituyen la base sobre la cual desarrollamos nuestras relaciones y proyectos.
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                    </CardBody>
                </Card>
            </CardGroup>
        </>
    );
};

export default AboutUsDetails;