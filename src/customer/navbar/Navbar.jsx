import Logo1 from "../../assets/icon/logo.png"
import "../style/Customer.css";

// eslint-disable-next-line no-unused-vars
const Navbar = () => {
    return(
      <nav className="navbar  ">
        <div className="container2">
          <div className="logo"> 
            <img src={Logo1} alt="Logo1" />
          </div>
          
            <a href="/login">
            <button>
              Kembali
            </button></a>
        </div>
      </nav>  
    );
};

export default Navbar;