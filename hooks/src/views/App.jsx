import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContex, {data} from '../data/DataContext'
import Store from '../data/Store'

const App = props => {

    const [state, setState] = useState(data)

    return (
        <Store>
            <DataContex.Provider value={{state, setState}}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContex.Provider>
        </Store>
        
    )
}

export default App