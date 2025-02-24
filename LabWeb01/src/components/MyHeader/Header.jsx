import GoldButton from "../GoldButton/GoldButton"

const MyHeader = ({paradoxLogo, ckLogo, }) => {
    return(
        <div id="header-container">

            <div id="left-side">
                <img id="paradox-logo" src=""></img>
                <img id="ck-logo" src=""></img>
                <p className="header-text">ABOUT</p>
                <p className="header-text">ADD-ONS</p>
                <p className="header-text">NEWS</p>
                <p className="header-text">ON CONSOLE</p>
                <p className="header-text">LEGENDS OF CRUSADER KINGS III</p>

            </div>
                
            <div id="right-side">
                <GoldButton text={"BUY NOW"}></GoldButton>
                <img id="shopping-cart"></img>
                <p className="header-text">LOG IN</p>
            </div>


        </div>
    )
}

export default MyHeader