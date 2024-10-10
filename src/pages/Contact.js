import { useState } from 'react';
import edificio2 from '../app/assets/images/edificio2.png'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import emailjs from 'emailjs-com';

const Contact = () => { 

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email) {
            alert('Por favor, ingresa un correo electrónico.');
            return; 
        }

        emailjs.send('service_20eb96a', 'template_m3fa4pd', formData, 'PYlx3pQPWm1bskBdm')
            .then((response) => {
                console.log('Mensaje enviado:', response.status, response.text);
                alert('Mensaje enviado con éxito');
                
                setFormData({
                    nombre: '',
                    apellido: '',
                    email: '',
                    mensaje: ''
                });
            }, (err) => {
                console.error('Error al enviar el mensaje:', err);
                alert('Error al enviar el mensaje. Intente nuevamente.');
            });
    };

    return (
        <div style={{
            backgroundImage:`url(${edificio2})`,
            backgroundColor:'#192541',
            opacity:'100%',
            marginTop:'6em',
            display:'flex',
            flexDirection:'column',
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'right'
        }}>
            <div style={{ color:'white', textAlign: 'center', marginTop:'5em'}} className="about-us-title">NUESTRA ESPECIALIDAD
                <div style={{ textAlign: 'center',marginTop:'0.5em', marginBottom:'1em', }} className="about-us-heading">PRODUCTOS Y SERVICIOS</div>
            </div>
            <div style={{
                backgroundColor:'white',
                margin:'10px 130px 130px',
                zIndex:1
            }}>
                <Form onSubmit={handleSubmit} style={{
                    padding:'30px 30px 0 30px'

                }}>
                    <FormGroup style={{padding:'10px'}}>
                        <Label style={{fontFamily:'montserrat', display:'flex', fontWeight:'300'}} for="Nombre">
                            NOMBRE
                        </Label>
                        <Input
                        id="Nombre"
                        name="nombre"
                        placeholder="Nombre"
                        type="name"
                        value={formData.nombre}
                        onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup style={{padding:'10px'}}>
                        <Label style={{fontFamily:'montserrat', display:'flex', fontWeight:'300'}} for="Apellido">
                            APELLIDO
                        </Label>
                        <Input
                        id="Apellido"
                        name="apellido"
                        placeholder="Apellido"
                        type="name"
                        value={formData.apellido}
                        onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup style={{padding:'10px'}}>
                        <Label style={{fontFamily:'montserrat', display:'flex', fontWeight:'300'}}  for="Email">
                            EMAIL
                        </Label>
                        <Input
                        id="Email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup style={{padding:'10px'}}>
                        <Label style={{fontFamily:'montserrat', display:'flex', fontWeight:'300'}} for="Mensaje">
                            MENSAJE
                        </Label>
                        <Input
                        id="Mensaje"
                        name="mensaje"
                        type="textarea"
                        value={formData.mensaje}
                        onChange={handleChange}
                        />
                    </FormGroup>
                    <Button type="submit" className="d-md-block" style={{fontFamily: 'montserrat', backgroundColor: '#192541', border: '#192541', marginBottom:'30px', width:'100%'}}>
                        SUBMIT
                    </Button>
                </Form>
            </div>
        </div>
    )
};

export default Contact;