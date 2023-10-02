/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                dmgreen: {
                    olive: '#637b6b', // Olive Green Plant
                    dark: '#a9c7c8', // Dark Border Button
                    light: '#cfdfe0', // Light Background Button
                    logo: '#637b6b', // Green from Dins Mallorca Logo
                    plant: '#c4d8bd', //   Green Plant,
                    recycling: '#09710d',
                    border: '#a9c7c8',
                    bg: '#cfdfe0'
                },
                dmgray: {
                    light: '#ABB0B8',
                    dark: '#6F7378',
                    whatups: '#999'
                },
                dmblack: '#36383f',
                dmwhite: '#f9f9f9',
                dmred: '#ff0000',
                backgroundColor: {
                    // Facebook blue
                    facebook: '#1877F2',
                    // Instagram gradient
                    'instagram-start': '#FDCB73',
                    'instagram-end': '#FE8A63',
                    // WhatsApp green
                    whatsapp: '#25D366'
                }
            },
            height: {
                128: '32rem'
            }
        }
    },
    variants: {
        extend: {}
    }
};
