const ButtonGeneric = ({ visible, text }) => {
    const mensajeAlert = () => alert("Hola");
    

        return (
            <button visible={visible} onClick={mensajeAlert}>
                {text}
            </button>
        )
    }
    export default ButtonGeneric;