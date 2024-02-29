import "./Header.css"
import logo from "../../assets/controle.png"
function Header (){
  return (
    <header>
      <nav>
      <h2>Retro Games</h2>
      <div>
        <img src={logo} alt="logo controle"></img>
      </div>
    </nav>
    </header>
  );
}

export default Header;