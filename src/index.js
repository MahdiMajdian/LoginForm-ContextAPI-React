import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import {AuthContenxProvider} from "./store/auth-context"

ReactDOM.render(
	<AuthContenxProvider>
		<App />
	</AuthContenxProvider>,
	document.getElementById("root")
)
