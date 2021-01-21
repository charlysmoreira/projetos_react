import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SelectionTitle from '../../components/layout/SectionTitle'

import { useCounter } from '../../hookes/useCounter'
import { useFetch } from '../../hookes/useFetch'

const UseCustom = (props) => {

    const [count, inc, dec] = useCounter()

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)

    function showStates(states){
        if(states != null){
            return states.map((obj, i) => <tr key={obj.nome} className={i % 2 == 0 ? 'cinza': 'branco'}><td>{obj.nome}</td> <td> {obj.sigla}</td></tr>)
        }
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SelectionTitle title="Exercicio #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => inc()}>+1</button>
                    <button className="btn" onClick={() => dec()}>-1</button>
                </div>
            </div>
            <SelectionTitle title="Exercicio #02"/>
            <div className="center">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sigla</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showStates(response.data)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UseCustom
