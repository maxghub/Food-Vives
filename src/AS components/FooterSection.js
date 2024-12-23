import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FooterSection() {
    const openInTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer');
    };
    return (
        <>
            <div className="footer-section">
                <p>@2022 FOODVIBES. All Rights Reserved</p>
                <div className="footer-names">
                    <p>Design by
                        <a href="" onClick={()=> openInTab('https://www.linkedin.com/in/yogitavaishnav12/')}>Yogita Vaishnav</a><span></span>
                        <a href="" onClick={()=> openInTab('https://www.linkedin.com/in/yogitavaishnav12/')}>Abhishek Solanki</a><span></span>
                        <a href="">Mustafiz Kaifi</a><span></span>
                        <a href="">Mohammad Asif</a>
                    </p>
                </div>
                <div className="footer-icons">
                    <FaFacebookSquare />
                    <FaInstagram />
                    <FaLinkedin />
                </div>
            </div>
        </>
    )
}