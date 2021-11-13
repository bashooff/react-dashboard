import "./Header.css"
import { IconContext } from "react-icons";
import { VscAccount } from "react-icons/vsc"

const Header = () => {
    return(
      
        <div className="normal-header-container">
           <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <form class="form-inline my-2 my-lg-0">
                <input className="form-control mr-md-2" type="search" placeholder="Search" aria-label="Search"/>
              </form>
            
              <div className="navbar-logo">
              <VscAccount />
              
            </div>
          </nav>
        </div>
        
    )
}

export default Header;