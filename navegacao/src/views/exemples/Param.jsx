import React from 'react'
import { useParams } from 'react-router-dom'

const Param = props => {

    const { id } = useParams();

    return (
        <div className="Param">
            <hi>Param</hi>
            <h2>Valor:{id}</h2>
        </div>
    )
}

export default Param;