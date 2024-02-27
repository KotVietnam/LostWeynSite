import React from 'react'
import classes from './Main.module.css'
import ParticlesEffect from '../ParticlesEffect/ParticlesEffect.jsx';

function Main({ title, description }) {
	return (
		<main className={`${classes.main}`}>
					<ParticlesEffect></ParticlesEffect>
			<div className={`${classes.wrapper} darkening-overlay`}>
				<div className={classes.info}>
					<h1 className={classes.h1}>{title}</h1>
					<p className={classes.p}>{description}</p>
				</div>
			</div>
		</main>
	)
}

export default Main