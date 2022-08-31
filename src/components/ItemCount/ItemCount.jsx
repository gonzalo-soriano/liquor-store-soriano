import { useState } from "react"
import './styles.css'

const ItemCount = ({ stock, initial}) => {
    const [counter, setCounter] = useState(initial)
    const remove = () => {
        setCounter(Math.max(counter - 1, initial));
    }
    const sum = () => {
        setCounter(Math.min(counter + 1, stock));
    }

    return (
        <div className="itemCount">
            <button onClick={remove}>
                -
            </button>
            <h2> {counter} </h2>
            <button onClick={sum}>
                +
            </button>
        </div>

    )
}

export default ItemCount