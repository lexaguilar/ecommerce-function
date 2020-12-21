import { useState } from "react"

function Counter(props)
{
    let { valorInicial } = props;

    const [ valor, modificarValor ] = useState(valorInicial);

    const incrementar = () => {
        modificarValor(valor + 1);
    }

    const decrementar = () => {
        modificarValor(valor - 1);
    }

    const { titulo } = props;

    return(
        <>
            <h1>{titulo}</h1>
            <h2>{valor}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </>
    )
}

Counter.defaultProps = {
    titulo : 'Counter 0',
    valorInicial : 0
}

export default Counter;