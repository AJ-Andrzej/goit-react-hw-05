import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from 'clsx'
import 'modern-normalize'


const getLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.acitve)
}

export default function Navigation() {
    return (
        <header className={css.header}>
            <nav>
                <ul className={css.navigation}>
                    <li>
                        <NavLink to="/" className={getLinkClass}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className={getLinkClass}>Movies</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}