import './Footer.css';



const Footer = () => {
    const year = new Date().getFullYear();
    return (
       <div className="footer">
           <p>© DMS Travel Guide. All right reserved {year} </p>
        
       </div>
    );
};

export default Footer;