import React from 'react'
import Button from '../UI/Button/Button'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import classes from './Header.module.css'


function Header() {
	return (
		<header className={`${classes.header} darkening-overlay`}>
			<div className={`${classes.wrapper} container`}>
				<Logo width={50} height={50}></Logo>
				<Navigation></Navigation>
				<Button>Скачать</Button>
			</div>
		</header>
	)
}

export default Header