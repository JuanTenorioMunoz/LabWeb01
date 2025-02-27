import "./MyButton.css"

const MyButton = ({text, type, color, size}) => {

    const setImage = () => {
        switch (type) {
            case "arrow":
                return <img className="button-icon" src="https://raw.githubusercontent.com/JuanTenorioMunoz/LabWeb01/8ef70bd7c24f086af7ea8342c7fa605a145f71c3/LabWeb01/src/assets/svg/arrow.svg"/>;
            case "buy":
                return <img className="button-icon" src="https://raw.githubusercontent.com/JuanTenorioMunoz/LabWeb01/f7f83449c47f00b4c31da4757660285fc6381ab7/LabWeb01/src/assets/svg/cart.svg"/>;
            case "video":
                return <img className="button-icon" src="https://raw.githubusercontent.com/JuanTenorioMunoz/LabWeb01/a576df5a2c5cafe45713dbfa70a5b431d76df99a/LabWeb01/src/assets/svg/video.svg"/>;
            default:
                return null;
        }
      };

    return(
            <button className={color + "-button custom-button " + size}>
                <p className={color + "-button-text"}>{text.toUpperCase()}</p>
                {setImage()}
            </button>
    )
}


export default MyButton