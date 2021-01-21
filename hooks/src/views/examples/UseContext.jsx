import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SelectionTitle from '../../components/layout/SectionTitle'
import DataContex from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    const {state, setState} = useContext(DataContex)

    function addNumber(value){
        setState({
            ...state,
            number: state.number + value
        })
    }
    
    //Exercicio 2
    const {number, text, setNumber, setText} = useContext(AppContext)

    useEffect(() => {
        if(number > 1250){
            setText('Passou do limite...')
        } else {
            setText('Context Api + Hooks')
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SelectionTitle title= "Excercico #1"/>
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(1)}>+1</button>
                </div>
            </div>
            <SelectionTitle title= "Exercicio #2"/>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <buttun className="btn" onClick={() => setNumber(number - 1)}>-1</buttun>
                    <buttun className="btn" onClick={() => setNumber(number + 1)}>+1</buttun>
                </div>
            </div>
        </div>
    )
}

export default UseContext
