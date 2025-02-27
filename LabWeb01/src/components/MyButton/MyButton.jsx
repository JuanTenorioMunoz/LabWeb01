const MyButton = ({text, type, color}) => {
    return(
            <button className={color + "-button"}>
                <p className={color + "-button-text"}>{text}</p>
            </button>
    )
}


export default MyButton