import { useState } from "react"

export const useCounter = (inicialValue = 100) => {

    const [count, setCount] = useState(inicialValue)

    function inc(){
        setCount(count + 1)
    }

    function dec(){
        setCount(count - 1)
    }

    return [count, inc, dec]
}