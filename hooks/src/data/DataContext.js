import React from 'react'

export const data = {
    number: 123,
    text: 'Context Api'
}

const DataContex = React.createContext(data)

export default DataContex;