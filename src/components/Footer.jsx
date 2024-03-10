import React from "react";
import { BsTwitterX, BsLinkedin, BsGithub } from "react-icons/bs";

const styles = {
    card: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#2a2e3c', // Adjust background color if needed
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '15px'
    },
    icon: {
        fontSize: "3rem",
        marginRight: 65,
        color: '#233D4D'
    }
};

function Footer() {
    return (
        <div style={styles.card}>
            <footer style={styles.footer}>
                <a href="https://github.com/ayoleese">
                    <BsGithub style={styles.icon} />
                </a>
                <a href="https://linkedin.com/in/lisa-lar-67077710a">
                    <BsLinkedin style={styles.icon} />
                </a>
                <a href="https://twitter.com/ayoleese">
                    <BsTwitterX style={styles.icon} />
                </a>
            </footer>
        </div>
    );
}

export default Footer;
