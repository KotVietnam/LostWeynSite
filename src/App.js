import React from 'react';
import Headers from './Components/Header/Header.jsx'
import Main from './Components/Main/Main.jsx';
import classes from './app.css'

function App() {
	return (
		<div>
			<Headers></Headers>
			<Main
				title={'lostweyn'}
				description={'Lostweyn - Проект созданный двумя людьми, Среди которых: Чел который выдаёт себя за программиста, чел который Сис.Админ. Мы просто пытаемся сделать что-то крутое! Наша цель - собрать ламповое окружение, где всем будет приятно находится и общаться! Хоть мы ещё и многое не умеем, хоть где-то у нас что-то не получается, но мы постоянно прокачиваем свои навыки, и будем удивлять вас понастоящему крутыми вещами! Надеюсь тебе тут понравится :)'}
			></Main>
		</div>
	);
}

export default App;
