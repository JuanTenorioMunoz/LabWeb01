const MyButton = ({text, type, color}) => {

    const setImage = () => {
        switch (type) {
          case "arrow":
            return <img src="/arrow.png"/>;
          case "buy":
            return <img src="/cart.png"/>;
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