// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, phone, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Example: 'Gmail',
            auth: {
                user: 'info@dinsmallorca.com',
                pass: 'rqagmvltzlvmzype'
            }
        });

        try {
            await transporter.sendMail({
                from: `Consulta ${email}`,
                to: 'info@dinsmallorca.com',
                subject: `Consulta de ${firstName} ${lastName}`,
                text: `Nombre: ${firstName}\s${lastName}\nTeléfono: ${phone}\nCorreo: ${email}\nMensaje: ${message}`
            });

            res.status(200).send('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Failed to send email');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}
