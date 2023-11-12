
import { useState } from "react"
import styles from '../src/button.module.css'
/*
Função que eu chamo dentro do meu componente, o retorno dela é um array com 2 posições
Renderização condicional - cada usuario em um sistema tem acesso a partes diferente, por ex.
*/

export default function MeuContador () {

    const [contador, setContador] = useState(0)
    function aumentar () {
        setContador(contador+1)
    }

    return (
        <div className="container">
            <h1>Meu Contador</h1>
            {contador > 9 ? <h1>Valor muito grande</h1> : null} 
            <h3>{contador}</h3>
            <button className={styles.myButton} onClick={aumentar}>aumentar</button>
        </div>
    )
}