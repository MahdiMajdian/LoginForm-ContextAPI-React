import React, {useState, useEffect} from "react"

const AuthContenx = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (username, password) => {},
})

export const AuthContenxProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		if (localStorage.getItem("isLoggedIn") === "1") {
			setIsLoggedIn(true)
		}
	}, [])

	const loginHandler = (email, password) => {
		localStorage.setItem("isLoggedIn", "1")
		setIsLoggedIn(true)
	}

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedIn")
		setIsLoggedIn(false)
	}

	return (
		<AuthContenx.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}>
			{props.children}
		</AuthContenx.Provider>
	)
}
export default AuthContenx
