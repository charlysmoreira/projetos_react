import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/param/123">Param #1</Link>
                </li>
                <li>
                    <Link to="/param/teste">Param #2</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/not">Não existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu;