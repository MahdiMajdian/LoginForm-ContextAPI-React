import React, { useContext, useEffect, useState } from "react"

import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import MainHeader from "./components/MainHeader/MainHeader"
import AuthContenx from "./store/auth-context"

function App() {
	const context = useContext(AuthContenx)
	return (
		<>
			<MainHeader />
			<main>
				{!context.isLoggedIn && <Login />}
				{context.isLoggedIn && <Home />}
			</main>
		</>
	)
}

export default App
