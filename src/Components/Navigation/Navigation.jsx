import React from 'react'
import classes from './Navigation.module.css'
import Servericon from './Icon/Servericon'
import Newicon from './Icon/Newicon'
import Skinicon from './Icon/Skinicon'

function Navigation() {
	return (
		<nav className={`${classes.wrapper}`}>
			<ul className={classes.ul}>
				<li className={classes.li}><Servericon /> Сервера</li>

				<li className={classes.li}> <Newicon /> Новости</li>
				<li className={classes.li}> <Skinicon />Скины</li>
			</ul>
		</nav>
	)
}

export default Navigation