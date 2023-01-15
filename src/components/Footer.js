import styles from "./Footer.module.scss"

function Footer() {
    return (
        <footer className={ `${styles.footer} d-flex flex-row align-item justify-content p-10` } >
            <p>Copyright © 2022 Cookchef, Inc.</p>
        </footer>
    );
}

export default Footer;