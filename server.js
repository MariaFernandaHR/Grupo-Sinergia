const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
    }
});

app.post('/send', (req, res) => {
    const { nombre, apellido, email, mensaje } = req.body;
    console.log(req.body);
    const mailOptions = {
        from: email,
        to: 'mafernandahr94@gmail.com', 
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nMensaje: ${mensaje}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
        console.log(mailOptions)
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});