import './Footer.css';

const Footer = (props) => {
    return (
        <footer className="footer">
            &copy; {props.dataFooter.copy} {new Date().getFullYear()}
        </footer>
    )
}

export default Footer;