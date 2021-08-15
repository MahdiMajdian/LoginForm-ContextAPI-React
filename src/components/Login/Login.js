import React, {
	useContext,
	useEffect,
	useReducer,
	useRef,
	useState,
} from "react"

import Card from "../UI/Card/Card"
import classes from "./Login.module.css"
import Button from "../UI/Button/Button"
import AuthContenx from "../../store/auth-context"
import Input from "../UI/Input/Input"

const emailReducer = (prevState, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.includes("@") }
	}
	if (action.type === "INPUT_BLUR") {
		return {
			value: prevState.value,
			isValid: prevState.value.includes("@"),
		}
	}
	return { value: "", isValid: false }
}

const passwordReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.length > 6 }
	}
	if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.length > 6 }
	}
	return { value: "", isValid: false }
}

const Login = (props) => {
	const emailInputRef = useRef()
	const passwordInputRef = useRef()

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	})

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: null,
	})
	const [formIsValid, setFormIsValid] = useState(false)

	const context = useContext(AuthContenx)
	const { isValid: emailIsValid } = emailState
	const { isValid: passswordIsValid } = passwordState

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log("check for valideity")
			setFormIsValid(emailIsValid && passswordIsValid)
		}, 500)
		return () => {
			clearTimeout(identifier)
		}
	}, [emailIsValid, passswordIsValid])

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value })
	}

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "USER_INPUT", val: event.target.value })
	}

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" })
	}

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" })
	}

	const submitHandler = (event) => {
		event.preventDefault()
		if (formIsValid) {
			context.onLogin(emailState.value, passwordState.value)
		} else if (!emailIsValid) {
			emailInputRef.current.focus()
		} else {
			passwordInputRef.current.focus()
		}
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					isValid={emailIsValid}
					label="E-Mail"
					id="email"
					type="email"
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={passwordInputRef}
					isValid={passswordIsValid}
					label="Password"
					id="password"
					type="password"
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}

export default Login
