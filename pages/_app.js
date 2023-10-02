import 'tailwindcss/tailwind.css';
import 'styles/globals.css';
import { Layout } from 'components/index';
import { appWithTranslation } from 'next-i18next';
import moment from 'moment';
import 'moment/locale/es'; // Import Spanish locale for moment
import 'react-big-calendar/lib/css/react-big-calendar.css';
moment.locale('es'); // Set the moment locale to Spanish
// import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Source_Code_Pro } from '@next/font/google';
import { Roboto_Mono } from '@next/font/google';

const sourceCodePro = Source_Code_Pro({
    weight: ['200', '300', '400', '500', '600', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin']
});
const RobotoMono = Roboto_Mono({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin']
});
config.autoAddCss = false;
library.add(fas, fab);

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <style jsx global>{`
                    :root {
                        --source-code-pro: ${sourceCodePro.style.fontFamily};
                        --roboto-mono: ${RobotoMono.style.fontFamily};
                    }
                `}</style>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
export default appWithTranslation(MyApp);
