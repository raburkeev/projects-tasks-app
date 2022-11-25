import React from 'react'
import {Link} from 'react-router-dom'
import style from './index.module.scss'
import {navBarConfig} from './navBarConfig'

const NavBar = () => {
    return (
        <div className={style.nav_container}>
            <ul className={style.nav_list}>
                {navBarConfig.map(({id, name, path}) => (
                    <li key={id} className={style.nav_list_item}>
                        <Link to={path} className={style.nav_list_item_link}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavBar
