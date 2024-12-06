import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    state = {  } 
    render() { 
        const currentYear = new Date().getFullYear();
        return (
            <footer className="custom-footer text-center py-3">
                <p className="custom-footer-text">&copy; {currentYear} Lern-App. Alle Rechte vorbehalten.</p>
            </footer>
 
        );
    }
}
 
export default Footer;