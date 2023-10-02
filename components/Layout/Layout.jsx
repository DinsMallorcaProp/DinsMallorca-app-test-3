import React from 'react';
import { Navbar, Footer } from 'components/index';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
