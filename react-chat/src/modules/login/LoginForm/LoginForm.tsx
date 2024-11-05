import { MouseEventHandler, useState } from "react";
import InputField from "../../../components/InputField";
import { ApiError, AuthService, TokenObtainPair } from "../../../api";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../../utils/const";

type LoginFormProps = {
	onChange: MouseEventHandler<HTMLButtonElement>;
}

const LoginForm = ({onChange}: LoginFormProps) => {
    const [credentials, setCredentials] = useState<TokenObtainPair>({
		username: "",
		password: ""
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			[name]: value
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); 

		try {
			const response = await AuthService.authCreate(credentials);
			console.log("Login successful:", response);
			localStorage.setItem('accessToken', response.access);
            localStorage.setItem('refreshToken', response.refresh);
            setError("");
			navigate(AppRoute.Chats);
		} catch (error) {
            const apiError = error as ApiError;
			console.error("Login failed:", apiError.body);
            setError(apiError.body.detail);

		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<InputField
				label="Username"
				name="username"
				value={credentials.username}
				onChange={handleChange}
			/>
			<InputField
				label="Password"
				name="password"
				value={credentials.password}
				onChange={handleChange}
			/>
			<div>
			<button type="submit">Login</button>
			<button onClick={onChange}>Registration</button>
			</div>
			{error && <p style={{ color: "red" }}>{error}</p>}
		</form>
	);
};

export default LoginForm;
