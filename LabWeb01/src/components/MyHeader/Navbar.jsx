import MyButton from "../MyButton/MyButton"
import './Navbar.css'

const Navbar = () => {
    return(
        <div id="navbar-container">

            <div id="left-side">
                <img id="paradox-logo" src="https://www.paradoxinteractive.com/images/logo/logo-platypus-white.svg"></img>
                <img id="ck-logo" src="https://images.ctfassets.net/u73tyf0fa8v1/78eMnPuCsEMpHS3aZoM54i/48df13a2896e717a8c050d7f8f0180fa/CK3_Logo_Horizontal_White.png?w=3840&q=75"></img>
                <p className="navbar-text">ABOUT</p>
                <p className="navbar-text">ADD-ONS</p>
                <p className="navbar-text">NEWS</p>
                <p className="navbar-text">ON CONSOLE</p>
                <p className="navbar-text">LEGENDS OF CRUSADER KINGS III</p>

            </div>
                
            <div id="right-side">
                <MyButton text={"BUY NOW"} color={"gold"} size={"small"}></MyButton>
                <img className="shopping-cart" src="https://raw.githubusercontent.com/JuanTenorioMunoz/LabWeb01/f7f83449c47f00b4c31da4757660285fc6381ab7/LabWeb01/src/assets/svg/cart.svg"/>
                <p className="navbar-text">LOG IN</p>
            </div>

        </div>
    )
}

export default Navbar