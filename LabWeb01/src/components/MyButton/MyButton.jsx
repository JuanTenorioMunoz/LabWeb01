import "./MyButton.css"

const MyButton = ({text, type, color}) => {

    const setImage = () => {
        switch (type) {
          case "arrow":
            return <img src="/arrow.png"/>;
          case "buy":
            return <img src="https://raw.githubusercontent.com/JuanTenorioMunoz/LabWeb01/f7f83449c47f00b4c31da4757660285fc6381ab7/LabWeb01/src/assets/svg/cart.svg"/>;
          default:
            return null;
        }
      };

    return(
            <button className={color + "-button"}>
                <p className={color + "-button-text"}>{text}</p>
                {setImage()}
            </button>
    )
}


export default MyButton