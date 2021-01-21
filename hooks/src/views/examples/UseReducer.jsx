import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SelectionTitle from '../../components/layout/SectionTitle'

import { initialState, chamadaPelaReducer } from '../../store'
import { addNumber2, login } from '../../store/actions'

const UseReducer = (props) => {

    // Funcao reducer recebe a funcao que muda o estado e o estado inicial
    // dispatch(disparando uma acao) é o nome usado, mas é apenas uma funcao
    // payload é o nome mais usado, mas é apenas um nome para os outros valores que a action recebe,
    // lembrando que a action é um objeto, recebe um tipo e varios outros paramentros
    const [state, dispatch] = useReducer(chamadaPelaReducer, initialState)
    const [valueAdd, setValueAdd] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SelectionTitle title="Exercicio #1"/>
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem usuario</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => addNumber2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => login(dispatch, 'Joao e Maria')}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'multiply7'})}>X 7</button>
                    <button className="btn" onClick={() => dispatch({type: 'divide25'})}> / 25</button>
                    <button className="btn" onClick={() => dispatch({type: 'parseInt'})}>Parse para Inteiro</button>
                </div>
                <div>
                    <input type="number" className="input" value={valueAdd} onChange={e => setValueAdd(e.target.value)}/>
                    <button className="btn" onClick={() => dispatch({type: 'addNumberN', payload: valueAdd})}>Adicionar valor</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
